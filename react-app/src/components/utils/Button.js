import React from "react";

import "./Button.css";

/**
 * Custom Button Component
 * @param  {Number} style 1: grey text 2: primary text 3: inverse
 * @param  {String} value button value
 * @param {Function} onClickFunc button onClick function
 */
const Button = ({ style, value, onClickFunc }) => {
  const classNamePicker = () => {
    if (style === 1) return "main_button button_simple";
    if (style === 2) return "main_button button_inverse";
    if (style === 3) return "main_button button_main";
    if (style === 4) return "main_button button_outline";
  };
  return (
    <button onClick={onClickFunc} className={classNamePicker()}>
      {value}
    </button>
  );
};

export default Button;
