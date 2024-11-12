import React from "react";
import { textBoxCommonStyles } from "../utils/styles";

interface SelectBoxProps {
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
  height?: string;
  width?: string;
  margin?: string;
}

const InputSelectBox: React.FC<SelectBoxProps> = ({
  value,
  onChange = () => {},
  options,
  height = "40px",
  width = "100%",
  margin = "mb-2",
}) => {
  return (
    <div className={margin}>
      <select
        value={value}
        onChange={onChange}
        className={`${textBoxCommonStyles} w-full text-xs font-bold}`}
        style={{ minWidth: 300, width, height }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputSelectBox;
