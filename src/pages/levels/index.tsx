import { Spinner } from "@components";
import { LevelSelection } from "@modules";
import { createContext } from "@server/trpc/context";
import { appRouter } from "@server/trpc/router/_app";
import { createProxySSGHelpers } from "@trpc/react-query/ssg";
import { trpc } from "@utils/trpc";
import superjson from "superjson";

import type { GetStaticPropsResult, NextPage } from "next";
import type { LevelsPageProps } from "./types";

const LevelsPage: NextPage<LevelsPageProps> = () => {
  const { data, isLoading, error } =
    trpc.difficulties.getManyDifficulties.useQuery();

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return <LevelSelection difficulties={data} />;
};

export const getStaticProps = async (): Promise<
  GetStaticPropsResult<LevelsPageProps>
> => {
  const ssg = createProxySSGHelpers({
    router: appRouter,
    ctx: await createContext(),
    transformer: superjson,
  });
  await ssg.difficulties.getManyDifficulties.prefetch();

  return {
    props: {
      trpcState: ssg.dehydrate(),
    },
  };
};

export default LevelsPage;
