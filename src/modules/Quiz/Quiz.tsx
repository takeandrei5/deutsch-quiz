import React, { useRef, useState } from "react";

import { Breadcrumb } from "@components";
import { QuizGame } from "./QuizGame";
import { SoundControlIcon } from "./SoundControlIcon";

import type { BreadcrumbItem } from "@components/Breadcrumb/types";
import type { QuizProps } from "./types";

const Quiz: React.FC<QuizProps> = ({
  difficultyLevel,
  topic,
  questions,
}: QuizProps) => {
  const [isSoundOn, setIsSoundOn] = useState<boolean>(true);

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Niveau wählen", href: "/" },
    { label: difficultyLevel, href: `/levels/${difficultyLevel}/topics` },
    { label: topic, href: `/levels/${difficultyLevel}/topics/${topic}` },
  ];

  return (
    <div className="flex h-full max-w-full flex-col items-center overflow-hidden">
      <Breadcrumb breadcrumbItems={breadcrumbItems} />
      <div className="mt-4 ml-auto">
        <SoundControlIcon
          isSoundOn={isSoundOn}
          toggleSound={() => setIsSoundOn((prevState) => !prevState)}
        />
      </div>
      <QuizGame questions={questions} isSoundOn={isSoundOn} />
    </div>
  );
};

export default Quiz;
