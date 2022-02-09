import React from "react";

interface TextProps {
  styles?: { [key: string]: string };
  cssClasses?: string[];
  background?: string;
  children?: React.ReactNode;
}

const Text = ({ styles, cssClasses, background, children }: TextProps) => {
  return (
    <input
        type = "text"
      
      className={cssClasses ? cssClasses.join(" ") : ""}
      style={{
        ...styles,
        background: background,
      }}
    />
  );
};

export default Text;
