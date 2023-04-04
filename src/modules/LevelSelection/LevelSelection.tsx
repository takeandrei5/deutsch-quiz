import { Breadcrumb } from "@components";
import cx from "classnames";
import React from "react";
import { useLevelSelection } from "./hooks";

import type { BreadcrumbItem } from "@components/Breadcrumb/types";
import type { LevelSelectionProps } from "./types";

const LevelSelection: React.FC<LevelSelectionProps> = ({
  difficulties,
}: LevelSelectionProps) => {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Niveau wählen", href: "/levels" },
  ];

  const { preloadedImages, renderDifficultyCards } = useLevelSelection();

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
      {preloadedImages.map((image: JSX.Element) => image)}
    </div>
  );
};

export default LevelSelection;
