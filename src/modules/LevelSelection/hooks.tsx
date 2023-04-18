import { Card } from '@components';
import { usePreloadImage } from '@components/PreloadedImage';
import { useRouter } from 'next/router';

import type { Difficulty, Topic } from '@prisma/client';
import type { NextRouter } from 'next/router';

const useLevelSelection = () => {
	const router: NextRouter = useRouter();
	const { preloadImage, preloadedImages } = usePreloadImage();

	const preloadImages = (
		hoveredDifficulty: Difficulty & {
			topics: Topic[];
		}
	): void => {
		hoveredDifficulty.topics.forEach((topic: Topic) =>
			preloadImage({
				id: topic.id,
				name: topic.name,
				src: topic.image,
				width: 384,
				height: 192,
				quality: 75
			})
		);
	};

	const renderDifficultyCards = (
		difficulties: (Difficulty & {
			topics: Topic[];
		})[]
	): JSX.Element[] => {
		return difficulties.map(
			(
				difficulty: Difficulty & {
					topics: Topic[];
				}
			) => (
				<Card
					key={difficulty.level}
					cardTitle={difficulty.level}
					difficultyRating={difficulty.rating}
					cardDescription={difficulty.description}
					buttonLabel='Start'
					onButtonClick={() => void router.push(`/levels/${difficulty.level}/topics`)}
					onCardButtonHover={() => preloadImages(difficulty)}
				/>
			)
		);
	};

	return { preloadedImages, renderDifficultyCards };
};

export { useLevelSelection };
