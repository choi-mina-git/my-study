import React from "react";
import cls from "classnames";

interface InputGroupProps {
  className?: string;
  type?: string;
  placeholder?: string;
  value: string;
  setValue: (str: string) => void;
  error: string | undefined;
  height?: string;
  width?: string; // width 프롭 추가
}

const InputGroup: React.FC<InputGroupProps> = ({
  className = "mb-2",
  type = "text",
  placeholder = "",
  error,
  value,
  setValue,
  height = "40px", // 기본 값 설정
  width = "380px", // 기본 값 설정
}) => {
  return (
    <div className={className}>
      <input
        type={type}
        style={{ minWidth: 300, width, height }} // width 프롭 사용
        className={cls(
          `p-3 transition duration-200 border border-customBeige rounded bg-gray-50 focus:bg-white hover:bg-white text-gray-700 text-xs`,
          { "border-red-500 text-red-500": error }
        )}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <small className="font-medium text-red-500">{error}</small>
    </div>
  );
};

export default InputGroup;
