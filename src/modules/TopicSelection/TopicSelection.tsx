import { useRouter } from "next/router";

import { Breadcrumb, Card } from "../../components";

import type { Topic } from "@prisma/client";
import type { NextRouter } from "next/router";
import type { BreadcrumbItem } from "../../components/Breadcrumb/types";
import type { TopicSelectionProps } from "./types";
import cx from "classnames";

const TopicSelection: React.FC<TopicSelectionProps> = ({
  difficultyLevel,
  topics,
}: TopicSelectionProps) => {
  const router: NextRouter = useRouter();
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Niveau wählen", href: "/" },
    { label: difficultyLevel, href: `/levels/${difficultyLevel}` },
  ];

  const renderTopics = (topics: Topic[]): JSX.Element[] => {
    return topics.map((topic) => {
      return (
        <Card
          key={topic.id}
          cardTitle={topic.name}
          cardDescription={topic.description || ""}
          cardImage={topic.image || ""}
          buttonLabel="Start"
          onButtonClick={() =>
            void router.push(`/levels/${difficultyLevel}/topics/${topic.name}`)
          }
        />
      );
    });
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Breadcrumb breadcrumbItems={breadcrumbItems} />
      <h1 className="text-4xl font-bold text-neutral">Wähle ein Thema</h1>
      <div
        className={cx("grid grid-cols-1 gap-4", {
          "md:grid-cols-2": !!topics && topics.length > 1,
        })}
      >
        {renderTopics(topics)}
      </div>
    </div>
  );
};

export default TopicSelection;
