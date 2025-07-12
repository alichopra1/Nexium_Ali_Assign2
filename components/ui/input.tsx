import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
  const baseClasses = "w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500";
  const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses;

  return (
    <input
      className={combinedClasses}
      {...props}
    />
  );
}