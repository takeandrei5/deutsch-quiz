import Image from "next/image";

import { Button } from "..";

import type { CardProps } from "./types";

const Card: React.FC<CardProps> = ({
  cardTitle,
  buttonLabel,
  onButtonClick,
  difficultyRating,
  cardDescription = "",
  cardImage = "",
  cardBlurImage = "",
}: CardProps) => {
  const renderDifficultyRatingStars = (
    difficultyRating: number
  ): JSX.Element => {
    return (
      <div className="rating rating-sm">
        {Array.from({ length: 5 }).map(
          (_: unknown, index: number): JSX.Element => {
            return (
              <input
                key={index}
                aria-label="difficulty-rating"
                type="radio"
                name="rating-2"
                className="mask mask-star-2 pointer-events-none bg-orange-400"
                checked={index + 1 === difficultyRating}
                readOnly
              />
            );
          }
        )}
      </div>
    );
  };

  return (
    <div className="card-compact card w-80 bg-base-100 shadow-xl md:w-96">
      {cardImage && (
        <figure className="relative h-48 max-w-sm">
          <Image
            src={cardImage}
            alt={cardDescription || cardTitle}
            fill
            quality={75}
            placeholder="blur"
            blurDataURL={cardBlurImage}
            priority
            style={{
              objectFit: "cover",
            }}
          />
        </figure>
      )}
      <div className="card-body">
        <h2 className="card-title text-neutral">
          {cardTitle}
          {difficultyRating && renderDifficultyRatingStars(difficultyRating)}
        </h2>
        {cardDescription && <p>{cardDescription}</p>}
        <div className="card-actions justify-end text-neutral">
          <Button onClick={onButtonClick}>{buttonLabel}</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
