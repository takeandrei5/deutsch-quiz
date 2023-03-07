import Image from "next/image";

import type { QuestionProps } from "./types";
import { useState } from "react";
import cx from "classnames";

const Question: React.FC<QuestionProps> = ({
  image = "",
  question = "",
}: QuestionProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <>
      {image && (
        <figure
          className={cx(
            "drag-none pointer-events-none relative h-24 w-24 select-none "
          )}
        >
          <Image
            className={cx("max-h-full duration-700 ease-in-out", {})}
            src={image}
            alt={question}
            width={96}
            height={92}
            quality={25}
            priority
            style={{
              objectFit: "contain",
            }}
            onLoadingComplete={() => setIsLoading(false)}
          />
        </figure>
      )}
      <span className="text-neutral">{question}</span>
    </>
  );
};

export default Question;
