export type CardProps = {
  cardTitle: string;
  buttonLabel: string;
  onButtonClick: () => void;
  difficultyRating?: number;
  cardDescription?: string;
  cardImage?: string;
};
