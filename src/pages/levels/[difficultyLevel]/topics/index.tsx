import { createProxySSGHelpers } from "@trpc/react-query/ssg";
import superjson from "superjson";

import { TopicSelection } from "../../../../modules";
import { createContext } from "../../../../server/trpc/context";
import { appRouter } from "../../../../server/trpc/router/_app";
import { trpc } from "../../../../utils/trpc";

import type { TopicsPageProps } from "./types";

import type {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextPage,
} from "next";
import { Spinner } from "../../../../components";

const TopicsPage: NextPage<TopicsPageProps> = ({
  difficultyLevel,
}: TopicsPageProps) => {
  const { data, isLoading, error } =
    trpc.difficultyLevels.getManyTopics.useQuery({
      difficultyLevel: "A1",
    });

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return <TopicSelection difficultyLevel={difficultyLevel} topics={data} />;
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext<{ difficultyLevel: string }>
): Promise<GetServerSidePropsResult<TopicsPageProps>> => {
  const ssg = createProxySSGHelpers({
    router: appRouter,
    ctx: await createContext(),
    transformer: superjson,
  });
  const difficultyLevel = context.query.difficultyLevel as string;

  await ssg.difficultyLevels.getManyTopics.prefetch({
    difficultyLevel: "A1",
  });

  return {
    props: {
      trpcState: ssg.dehydrate(),
      difficultyLevel,
    },
  };
};

export default TopicsPage;
