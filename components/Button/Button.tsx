import React from "react";

export type IButtonProps = {
  text: string;
};

export const Button: React.FC<IButtonProps> = ({ text }) => {
  return (
    <button className="px-4 py-2 border-gray-800 bg-purple-500 text-white rounded-md hover:bg-purple-600">
      {text}
    </button>
  );
};
