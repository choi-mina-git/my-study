import React from "react";

interface MyTitleProps {
  title: string;
}

const MyTitle: React.FC<MyTitleProps> = ({ title }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="font-bold text-xs text-gray-400">
        Home {">"} {title}
      </p>
    </div>
  );
};

export default MyTitle;
