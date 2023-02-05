export type UserOptionProps = {
  options: Option[];
  onOptionClick: (optionId: number) => void;
};

export type Option = {
  id: number;
  value: string;
};
