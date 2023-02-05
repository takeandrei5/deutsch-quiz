import React from "react";

import { Breadcrumb } from "../../components";
import { useQuiz } from "./hooks";

import type { QuizProps } from "./types";
import type { BreadcrumbItem } from "../../components/Breadcrumb/types";

const Quiz: React.FC<QuizProps> = ({
  difficultyLevel,
  topic,
  questions,
}: QuizProps) => {
  const { history, quizRef } = useQuiz(questions);

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Niveau wählen", href: "/" },
    { label: difficultyLevel, href: `/levels/${difficultyLevel}` },
    { label: topic, href: `/levels/${difficultyLevel}/topics/${topic}` },
  ];

  return (
    <div className="flex h-full flex-col items-center gap-4">
      <Breadcrumb breadcrumbItems={breadcrumbItems} />
      <div
        className="h-full w-full overflow-auto rounded-2xl bg-base-100 p-4 shadow-xl lg:w-[768px] lg:p-8"
        ref={quizRef}
      >
        {history.map((item: JSX.Element, index: number) =>
          React.cloneElement(item, { key: index })
        )}
        <div className="mb-4"></div>
      </div>
    </div>
  );
};

export default Quiz;
