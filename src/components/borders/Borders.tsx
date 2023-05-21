import React from "react";

interface DecoratedBorderProps {
  children: React.ReactNode;
  className?: string;
}

const DecoratedBorder = ({ children, className }: DecoratedBorderProps) => (
  <div className={`boxDecoration border border-stone-700 p-1 bg-stone-400`}>
    <div
      className={`boxDecoration border-2 border-stone-600 bg-gray-200 relative flex ${className}`}
    >
      {children}
    </div>
  </div>
);

export default DecoratedBorder;
