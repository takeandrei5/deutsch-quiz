import cx from "classnames";
import { useState } from "react";

import type { Option, UserOptionProps } from "./types";

const UserOption: React.FC<UserOptionProps> = ({
  options,
  onOptionClick,
}: UserOptionProps) => {
  const [selectedOptionId, setSelectedOptionId] = useState<number>(-1);

  const onClick = (optionId: number, callback: (optionId: number) => void) => {
    if (optionId === -1) {
      return;
    }

    setSelectedOptionId(optionId);
    callback(optionId);
  };

  const renderOptions = (
    options: Option[],
    onOptionClick: (optionId: number) => void
  ) => {
    return options.map((option: Option) => {
      return (
        <li key={option.id} className="flex items-center gap-2">
          <input
            type="checkbox"
            name="radio-1"
            className={cx("radio h-5 w-5 bg-base-100", {
              "pointer-events-none": selectedOptionId !== -1,
            })}
            checked={option.id === selectedOptionId}
            onChange={() => onClick(option.id, onOptionClick)}
          />
          <span>{option.value}</span>
        </li>
      );
    });
  };

  return (
    <ul className="flex flex-col gap-1">
      {renderOptions(options, onOptionClick)}
    </ul>
  );
};

export default UserOption;
