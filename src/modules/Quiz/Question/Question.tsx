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
        <figure className="relative h-24 w-24">
          <Image
            src={image}
            alt={question}
            fill
            quality={75}
            placeholder="blur"
            blurDataURL={blurImage}
            style={{
              objectFit: "cover",
            }}
          />
        </figure>
      )}
      <span className="text-neutral">{question}</span>
    </>
  );
};

export default Question;
