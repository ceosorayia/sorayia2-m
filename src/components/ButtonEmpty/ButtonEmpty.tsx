import React from "react";
import styles from "./ButtonEmpty.module.css";

interface ButtonEmptyProps {
  text: string;
  isHeader?: boolean;
}

const ButtonEmpty: React.FC<ButtonEmptyProps> = ({ text, isHeader }) => {
  return (
    <button
      className={`${styles.button} ${isHeader ? styles.headerButton : ""}`}
    >
      {text}
    </button>
  );
};

export default ButtonEmpty;
