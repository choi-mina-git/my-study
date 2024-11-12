import React from "react";
import { buttonBaseStyles } from "../utils/styles";

interface MyButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const MyButton: React.FC<MyButtonProps> = ({
  children,
  onClick,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${buttonBaseStyles} ${className}`}
    >
      {children}
    </button>
  );
};

export default MyButton;
