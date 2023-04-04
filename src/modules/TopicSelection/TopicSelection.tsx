import cx from 'classnames';
import { Breadcrumb } from '../../components';
import { useTopicSelection } from './hooks';

import type { BreadcrumbItem } from '../../components/Breadcrumb/types';
import type { TopicSelectionProps } from './types';

const TopicSelection: React.FC<TopicSelectionProps> = ({ difficultyLevel, topics }: TopicSelectionProps) => {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Niveau wählen', href: '/' },
    { label: difficultyLevel, href: `/levels/${difficultyLevel}/topics` },
  ];
  const { preloadedImages, renderTopics } = useTopicSelection(difficultyLevel);

  return (
    <>
      <div className='flex flex-col items-center gap-4'>
        <Breadcrumb breadcrumbItems={breadcrumbItems} />
        <h1 className='text-4xl font-bold text-neutral'>Wähle ein Thema</h1>
        <div
          className={cx('grid grid-cols-1 gap-4', {
            'md:grid-cols-2': !!topics && topics.length > 1,
          })}
        >
          {renderTopics(topics)}
        </div>
        {preloadedImages.map((image: JSX.Element) => image)}
      </div>
    </>
  );
};

export default TopicSelection;
