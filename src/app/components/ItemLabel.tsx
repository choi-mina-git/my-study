import React from "react";

interface ItemLabelProps {
  label: string;
  className?: string;
  required?: boolean;
}

const ItemLabel: React.FC<ItemLabelProps> = ({
  label,
  className = "block text-sm font-bold mb-2",
  required = false,
}) => {
  return (
    <label className={className}>
      {label} {required && <span className="text-red-500">*</span>}
    </label>
  );
};

export default ItemLabel;
