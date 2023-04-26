import React from 'react';

import { Breadcrumb } from '@components';
import { QuizGame } from './QuizGame';

import type { BreadcrumbItem } from '@components/Breadcrumb/types';
import type { QuizProps } from './types';

const Quiz: React.FC<QuizProps> = ({ difficultyLevel, topic, questions }: QuizProps) => {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Niveau wählen', href: '/' },
    { label: difficultyLevel, href: `/levels/${difficultyLevel}/topics` },
    { label: topic.name, href: `/levels/${difficultyLevel}/topics/${topic}` },
  ];

  return (
    <div className='flex max-w-full flex-col items-center'>
      <Breadcrumb breadcrumbItems={breadcrumbItems} />
      <QuizGame questions={questions} topic={topic} />
    </div>
  );
};

export default Quiz;
