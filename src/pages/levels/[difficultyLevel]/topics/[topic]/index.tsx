import { createProxySSGHelpers } from "@trpc/react-query/ssg";
import { useRouter } from "next/router";
import superjson from "superjson";

import { Spinner } from "../../../../../components";
import { Quiz } from "../../../../../modules";
import { createContext } from "../../../../../server/trpc/context";
import { appRouter } from "../../../../../server/trpc/router/_app";
import { trpc } from "../../../../../utils/trpc";

import type { TopicPageProps } from "./types";

import type { NonEmptyArray } from "../../../../../utils/models";

import type { NextRouter } from "next/router";
import type {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextPage,
} from "next";
import type { MultipleQuizQuestion } from "@prisma/client";

const QuizPage: NextPage = () => {
  const router: NextRouter = useRouter();

  const difficultyLevel = router.query.difficultyLevel as string;
  const topic = router.query.topic as string;

  const { data, isLoading, error } =
    trpc.topics.getMultipleQuizQuestions.useQuery({ topic });

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>{error?.message}</div>;
  }

  return (
    <Quiz
      difficultyLevel={difficultyLevel}
      topic={topic}
      questions={data as NonEmptyArray<MultipleQuizQuestion>}
    />
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext<{ difficultyLevel: string }>
): Promise<GetServerSidePropsResult<TopicPageProps>> => {
  const ssg = createProxySSGHelpers({
    router: appRouter,
    ctx: await createContext(),
    transformer: superjson,
  });
  const topic = context.query.topic as string;

  await ssg.topics.getMultipleQuizQuestions.prefetch({
    topic,
  });

  return {
    props: {
      trpcState: ssg.dehydrate(),
      topic,
    },
  };
};

export default QuizPage;
