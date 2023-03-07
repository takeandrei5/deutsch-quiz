import React from "react";

import { Breadcrumb } from "@components";
import { QuizGame } from "./QuizGame";

import type { BreadcrumbItem } from "@components/Breadcrumb/types";
import type { QuizProps } from "./types";

const Quiz: React.FC<QuizProps> = ({
  difficultyLevel,
  topic,
  questions,
}: QuizProps) => {
  const quizRef = React.useRef<HTMLDivElement>(null);
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Niveau wählen", href: "/" },
    { label: difficultyLevel, href: `/levels/${difficultyLevel}/topics` },
    { label: topic, href: `/levels/${difficultyLevel}/topics/${topic}` },
  ];

  return (
    <div className="flex h-full flex-col items-center gap-4">
      <Breadcrumb breadcrumbItems={breadcrumbItems} />
      <div
        className="h-full w-full overflow-auto rounded-2xl bg-base-100 p-4 shadow-xl md:w-[768px] lg:p-8"
        ref={quizRef}
      >
        <QuizGame questions={questions} anchorRef={quizRef} />
        <div className="mb-4"></div>
      </div>
    </div>
  );
};

export default Quiz;
