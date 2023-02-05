import type { DehydratedState } from "@tanstack/react-query";

export type TopicsPageProps = {
  difficultyLevel: string;
  trpcState: DehydratedState;
};
