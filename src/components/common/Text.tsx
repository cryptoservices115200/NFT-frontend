import React, { useRef } from "react";
import $ from 'jquery';


interface TextProps {
  styles?: { [key: string]: string };
  cssClasses?: string[];
  background?: string;
  children?: React.ReactNode;
  onChange?: (value: string) => void;
  // onClickPlus?:() => void;
  // onClickMinus?:() => void;
  propVal?: Number;
}

const Text = ({ styles, cssClasses, background, onChange, propVal }: TextProps) => {

  const myInput = useRef(null);

  const onClickPlus = () =>
  {
    let value = $("#mintAmount").val();
    value = Number(value) + 1;
    $("#mintAmount").val(value);
    
    if (onChange) onChange(String(value));
  }

  function onClickMinus()
  {
    let value = $("#mintAmount").val();
    value = Number(value) - 1;
    $("#mintAmount").val(value);

    if (onChange) onChange(String(value));
  }

  return (
    <>
      <button
          className={"action-btn primary-btn rounded-pill"}
          onClick={() => onClickPlus()}
          style={{ ...styles }}
        >+</button>
      <input
          id = "mintAmount"
          type = "number"
          // value = {propVal}
          onChange={(e) => {
              if (onChange) onChange(e.target.value)
          }}
          className={cssClasses ? cssClasses.join(" ") : ""}
          style={{
              ...styles,
              background: background,
          }}
      />
      <button
          className={"action-btn primary-btn rounded-pill"}
          onClick={() => onClickMinus()}
          style={{ ...styles }}
        >-</button>
      </>
  );
};

export default Text;
