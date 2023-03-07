import Image from "next/image";

import type { QuestionProps } from "./types";

const Question: React.FC<QuestionProps> = ({
  image = "",
  question = "",
}: QuestionProps) => {
  return (
    <>
      {image && (
        <figure className="drag-none pointer-events-none relative h-24 w-24 select-none ">
          <Image
            className="max-h-full"
            src={image}
            alt={question}
            width={96}
            height={92}
            quality={25}
            priority
            style={{
              objectFit: "contain",
            }}
          />
        </figure>
      )}
      <span className="text-neutral">{question}</span>
    </>
  );
};

export default Question;
