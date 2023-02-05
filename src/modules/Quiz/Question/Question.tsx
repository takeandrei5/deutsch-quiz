import Image from "next/image";

import type { QuestionProps } from "./types";

const Question: React.FC<QuestionProps> = ({ image = "", question = "" }) => {
  return (
    <>
      {image && (
        <Image
          src={image}
          alt={question}
          width={100}
          height={100}
          quality={100}
        />
      )}
      <span className="text-neutral">{question}</span>
    </>
  );
};

export default Question;
