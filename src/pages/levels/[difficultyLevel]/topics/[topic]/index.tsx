import { createProxySSGHelpers } from "@trpc/react-query/ssg";
import { useRouter } from "next/router";
import superjson from "superjson";

import { Spinner } from "@components";
import { Quiz } from "@modules";
import { createContext } from "@server/trpc/context";
import { appRouter } from "@server/trpc/router/_app";
import { trpc } from "@utils/trpc";

import type { MultipleQuizQuestion } from "@prisma/client";
import type { NonEmptyArray } from "@utils/models";
import type {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
  NextPage,
} from "next";
import type { NextRouter } from "next/router";
import type { TopicPageProps } from "./types";

const QuizPage: NextPage = () => {
  const router: NextRouter = useRouter();

  const difficultyLevel = router.query.difficultyLevel as string;
  const topic = router.query.topic as string;

  const { data, isLoading, error } =
    trpc.topics.getManyMultipleQuizQuestions.useQuery({ topic });

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

export const getStaticProps = async (
  context: GetStaticPropsContext<{ topic: string }>
): Promise<GetStaticPropsResult<TopicPageProps>> => {
  const ssg = createProxySSGHelpers({
    router: appRouter,
    ctx: await createContext(),
    transformer: superjson,
  });
  const topic = context.params?.topic as string;

  await ssg.topics.getManyMultipleQuizQuestions.prefetch({
    topic,
  });

  return {
    props: {
      trpcState: ssg.dehydrate(),
      topic,
    },
  };
};

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  return {
    paths: [
      {
        params: {
          difficultyLevel: "A1",
          topic: "Auf dem Bauernhof",
        },
      },
      {
        params: {
          difficultyLevel: "A1",
          topic: "In dem Supermarkt",
        },
      },
    ],
    fallback: false,
  };
}

export default QuizPage;
