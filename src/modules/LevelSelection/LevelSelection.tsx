import { Breadcrumb, Card } from "@components";
import cx from "classnames";
import { useRouter } from "next/router";

import type { BreadcrumbItem } from "@components/Breadcrumb/types";
import type { Difficulty } from "@prisma/client";
import type { NextRouter } from "next/router";
import type { LevelSelectionProps } from "./types";

const LevelSelection: React.FC<LevelSelectionProps> = ({
  difficulties,
}: LevelSelectionProps) => {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Niveau wählen", href: "/levels" },
  ];

  const router: NextRouter = useRouter();

  const renderDifficultyCards = (difficulties: Difficulty[]) => {
    return difficulties.map((difficulty: Difficulty) => (
      <Card
        key={difficulty.level}
        cardTitle={difficulty.level}
        difficultyRating={difficulty.rating}
        cardDescription={difficulty.description}
        buttonLabel="Start"
        onButtonClick={() =>
          void router.push(`/levels/${difficulty.level}/topics`)
        }
      />
    ));
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Breadcrumb breadcrumbItems={breadcrumbItems} />
      <h1 className="text-4xl font-semibold text-neutral">Los geht&apos;s</h1>
      <div
        className={cx("grid grid-flow-col grid-cols-1 justify-center", {
          "md:grid-cols-2": false,
        })}
      >
        {renderDifficultyCards(difficulties)}
      </div>
    </div>
  );
};

export default LevelSelection;
