import cx from 'classnames';

import type { ButtonProps } from './types';

const Button = ({
  children,
  onClick,
  size = 'md',
  style = 'primary',
  type = 'button',
  onHover = () => {
    return;
  },
}: ButtonProps) => {
  return (
    <button
      className={cx('btn text-neutral', {
        'btn-primary': style === 'primary',
        'btn-error': style === 'error',
        'btn-xs': size === 'xs',
        'btn-sm': size === 'sm',
        'btn-md': size === 'md',
        'btn-lg': size === 'lg',
      })}
      onClick={onClick}
      onMouseEnter={onHover}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
