import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

const url = "https://github.com/TanavP2112";

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link className='btn-'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={() => {
          window.location.href = url;
        }}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
