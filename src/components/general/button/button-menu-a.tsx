import React from "react";
import styles from "./button-menu-a.module.scss";
import classnames from "classnames";

type Props = {
  isOpen?: boolean;
  openText?: string;
  closeText?: string;
  onClick?: () => void;
};

const ButtonMenuA = ({
  onClick,
  isOpen = false,
  openText,
  closeText,
}: Props) => {
  const buttonStyle = classnames(
    "icon",
    styles.buttonMenuA,
    isOpen && styles.menuVisible
  );
  return (
    <button className={buttonStyle} onClick={onClick}>
      {openText && (
        <span className={styles.text}>
          {isOpen ? closeText || openText : openText}
        </span>
      )}
      <span className={styles.dots}>
        <span className={styles.dot1}></span>
        <span className={styles.dot2}></span>
        <span className={styles.dot3}></span>
      </span>
    </button>
  );
};

export default ButtonMenuA;
