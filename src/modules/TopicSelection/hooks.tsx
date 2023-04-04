import { Card } from '@components';
import { usePreloadImage } from '@components/PreloadedImage';
import { useRouter } from 'next/router';

import type { MultipleQuizQuestion, Topic } from '@prisma/client';
import type { NextRouter } from 'next/router';

const useTopicSelection = (difficultyLevel: string) => {
  const router: NextRouter = useRouter();
  const { preloadImage, preloadedImages } = usePreloadImage();

  const preloadImages = (
    hoveredTopic: Topic & {
      multipleQuizQuestions: MultipleQuizQuestion[];
    }
  ): void => {
    const firstMultipleQuizQuestion: MultipleQuizQuestion = hoveredTopic.multipleQuizQuestions.filter(
      (multipleQuizQuestion: MultipleQuizQuestion) => !!multipleQuizQuestion.image
    )[0];

    if (!firstMultipleQuizQuestion.image) {
      return;
    }

    preloadImage({
      id: firstMultipleQuizQuestion.id,
      name: firstMultipleQuizQuestion.correctAnswer,
      src: firstMultipleQuizQuestion.image,
      width: 96,
      height: 92,
      quality: 75,
    });
  };

  const renderTopics = (
    topics: (Topic & {
      multipleQuizQuestions: MultipleQuizQuestion[];
    })[]
  ): JSX.Element[] => {
    return topics.map((topic) => {
      return (
        <Card
          key={topic.id}
          cardTitle={topic.name}
          cardDescription={topic.description || ''}
          cardImage={topic.image || ''}
          buttonLabel='Start'
          onButtonClick={() => void router.push(`/levels/${difficultyLevel}/topics/${topic.name}`)}
          onCardButtonHover={() => preloadImages(topic)}
        />
      );
    });
  };

  return { preloadedImages, renderTopics };
};

export { useTopicSelection };
