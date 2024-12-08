import React from "react";
import styles from "./ButtonFilled.module.css";

interface ButtonFilledProps {
  text: string;
  isHeader?: boolean;
}

const ButtonFilled: React.FC<ButtonFilledProps> = ({ text, isHeader }) => {
  return (
    <button
      className={`${styles.button} ${isHeader ? styles.headerButton : ""}`}
    >
      {text}
    </button>
  );
};

export default ButtonFilled;
