import { useEffect } from "react";
import useSound from "use-sound";

import type { QuizResultsMessageProps } from "./types";

const QuizResultsMessage: React.FC<QuizResultsMessageProps> = ({
  correctAnswersCount,
  totalQuestionsCount,
}: QuizResultsMessageProps) => {
  const [play] = useSound("/cheering.mp3", { volume: 0.25 });

  useEffect(() => play(), [play]);

  return (
    <div className="mr-auto ml-auto flex w-fit flex-col items-center rounded-2xl bg-gradient-to-br from-pink-300 via-fuchsia-200 to-purple-300 p-4 text-neutral">
      <span className="text-3xl font-bold">Fertig!</span>
      <span className="text-center text-xl">
        Sie haben <br />{" "}
        <b>
          {correctAnswersCount} von {totalQuestionsCount}
        </b>{" "}
        <br /> Fragen <br /> richtig beantwortet!
      </span>
    </div>
  );
};

export default QuizResultsMessage;
