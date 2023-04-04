import cx from "classnames";

import type { ButtonProps } from "./types";

const Button = ({
  children,
  onClick,
  style = "primary",
  type = "button",
  onHover = () => {
    return;
  },
}: ButtonProps) => {
  return (
    <button
      className={cx("btn text-neutral", {
        "btn-primary": style === "primary",
        "btn-error": style === "error",
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
