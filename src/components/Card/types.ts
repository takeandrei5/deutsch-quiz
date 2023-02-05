export type CardType = {
  cardTitle: string;
  buttonLabel: string;
  onButtonClick: () => void;
  cardDescription?: string;
  cardImage?: string;
};
