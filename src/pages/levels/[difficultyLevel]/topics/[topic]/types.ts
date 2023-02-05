import type { DehydratedState } from "@tanstack/react-query";

export type TopicPageProps = {
  topic: string;
  trpcState: DehydratedState;
};
