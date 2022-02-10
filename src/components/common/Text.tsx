import React from "react";

interface TextProps {
  styles?: { [key: string]: string };
  cssClasses?: string[];
  background?: string;
  children?: React.ReactNode;
  onChange?: (value: string) => void;
}

const Text = ({ styles, cssClasses, background, onChange }: TextProps) => {
  return (
    <input
        type = "number"
        onChange={(e) => {
            if (onChange) onChange(e.target.value)
        }}
        className={cssClasses ? cssClasses.join(" ") : ""}
        style={{
            ...styles,
            background: background,
        }}
    />
  );
};

export default Text;
