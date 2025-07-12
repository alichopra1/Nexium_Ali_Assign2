import React from "react";

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export const Label: React.FC<LabelProps> = ({ children, className, ...props }) => {
  const baseClasses = "block mb-1 text-sm font-medium text-gray-700";
  const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses;

  return (
    <label
      className={combinedClasses}
      {...props}
    >
      {children}
    </label>
  );
}