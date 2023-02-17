import Image from "next/image";

import { Button } from "../Button";

import type { CardProps } from "./types";

const Card: React.FC<CardProps> = ({
  cardTitle,
  buttonLabel,
  onButtonClick,
  cardDescription = "",
  cardImage = "",
  cardBlurImage = "",
}: CardProps) => {
  return (
    <div className="card-compact card w-80 bg-base-100 shadow-xl md:w-96">
      {cardImage && (
        <figure>
          <Image
            src={cardImage}
            alt={cardDescription || cardTitle}
            width="384"
            height="100"
            quality={75}
            placeholder="blur"
            blurDataURL={cardBlurImage}
          />
        </figure>
      )}
      <div className="card-body">
        <h2 className="card-title text-neutral">{cardTitle}</h2>
        {cardDescription && <p>{cardDescription}</p>}
        <div className="card-actions justify-end text-neutral">
          <Button onClick={onButtonClick}>{buttonLabel}</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
