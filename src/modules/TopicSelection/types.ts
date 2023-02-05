import type { Topic } from "@prisma/client";

export type TopicSelectionProps = {
  difficultyLevel: string;
  topics: Topic[];
};
