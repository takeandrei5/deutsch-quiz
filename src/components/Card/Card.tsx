import Image from "next/image";

import { Button } from "../Button";

import type { CardType } from "./types";

const Card: React.FC<CardType> = ({
  cardTitle,
  buttonLabel,
  onButtonClick,
  cardDescription = "",
  cardImage = "",
}: CardType) => {
  return (
    <div className="card-compact card w-80 bg-base-100 shadow-xl md:w-96">
      {cardImage && (
        <figure>
          <Image
            src={cardImage}
            alt={cardDescription || cardTitle}
            width="384"
            height="100"
            quality={100}
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
