export type ButtonProps = {
  children: string | React.ReactNode;
  onClick: () => void;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  style?: 'primary' | 'error';
  type?: 'button' | 'submit' | 'reset';
  onHover?: () => void;
};
