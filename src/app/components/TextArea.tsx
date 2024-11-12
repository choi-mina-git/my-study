import React from "react";
import { textBoxCommonStyles } from "../utils/styles";

interface TextAreaProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  maxLength?: number;
}

const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChange,
  placeholder,
  maxLength,
}) => {
  return (
    <div className="relative mb-2">
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        className={`${textBoxCommonStyles}  w-full h-28 resize-none p-2}`}
      />
      <div className="absolute bottom-4 right-2 text-right text-xs text-gray-500">
        {value.length}/{maxLength}
      </div>
    </div>
  );
};

export default TextArea;
