export type CardProps = {
  cardTitle: string;
  buttonLabel: string;
  onButtonClick: () => void;
  cardDescription?: string;
  cardImage?: string;
  cardBlurImage?: string;
};
