import React from "react";
import { textBoxCommonStyles } from "../utils/styles";

interface TextBoxProps {
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  height?: string;
  width?: string;
  margin?: string;
  disabled?: boolean;
}

const TextBox: React.FC<TextBoxProps> = ({
  value,
  onChange = () => {},
  placeholder,
  height = "40px",
  width = "100%",
  margin = "mb-2",
  disabled = false,
}) => {
  return (
    <div className={margin}>
      <input
        type="text"
        style={{ minWidth: 300, width, height }} // width 프롭 사용
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${textBoxCommonStyles} text-right } ${
          disabled ? "bg-gray-100 cursor-not-allowed" : ""
        }`}
        disabled={disabled}
      />
    </div>
  );
};

export default TextBox;
