import { createProxySSGHelpers } from "@trpc/react-query/ssg";
import superjson from "superjson";

import { Spinner } from "@components";
import { TopicSelection } from "@modules";
import { createContext } from "@server/trpc/context";
import { appRouter } from "@server/trpc/router/_app";
import { trpc } from "@utils/trpc";

import type {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
  NextPage,
} from "next";
import type { TopicsPageProps } from "./types";

const TopicsPage: NextPage<TopicsPageProps> = ({
  difficultyLevel,
}: TopicsPageProps) => {
  const { data, isLoading, error } = trpc.difficulties.getManyTopics.useQuery({
    difficultyLevel,
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return <TopicSelection difficultyLevel={difficultyLevel} topics={data} />;
};

export const getStaticProps = async (
  context: GetStaticPropsContext<{ difficultyLevel: string }>
): Promise<GetStaticPropsResult<TopicsPageProps>> => {
  const ssg = createProxySSGHelpers({
    router: appRouter,
    ctx: await createContext(),
    transformer: superjson,
  });
  const difficultyLevel = context.params?.difficultyLevel as string;

  await ssg.difficulties.getManyTopics.prefetch({
    difficultyLevel,
  });

  return {
    props: {
      trpcState: ssg.dehydrate(),
      difficultyLevel,
    },
  };
};

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  return {
    paths: [{ params: { difficultyLevel: "A1" } }],
    fallback: false,
  };
}

export default TopicsPage;
