import Image from "next/image";

import type { QuestionProps } from "./types";

const Question: React.FC<QuestionProps> = ({
  image = "",
  blurImage = "",
  question = "",
}: QuestionProps) => {
  return (
    <>
      {image && (
        <Image
          src={image}
          alt={question}
          width={100}
          height={100}
          quality={75}
          placeholder="blur"
          blurDataURL={blurImage}
        />
      )}
      <span className="text-neutral">{question}</span>
    </>
  );
};

export default Question;
