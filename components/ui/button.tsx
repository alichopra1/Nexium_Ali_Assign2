import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  const baseClasses = "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors";
  const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses;

  return (
    <button
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
}