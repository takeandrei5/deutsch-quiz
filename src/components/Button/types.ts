export type ButtonProps = {
  children: string;
  onClick: () => void;
  style?: "primary" | "error";
  type?: "button" | "submit" | "reset";
  onHover?: () => void;
};
