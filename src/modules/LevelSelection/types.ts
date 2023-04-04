import type { Difficulty, Topic } from "@prisma/client";

export type LevelSelectionProps = {
  difficulties: (Difficulty & {
    topics: Topic[];
  })[];
};
