import React from "react";
import styles from "./icon-menu-a.module.scss";
import classnames from "classnames";

type Props = {
  isOpen?: boolean;
  onClick?: () => void;
};

const IconMenuA = ({ onClick, isOpen = false }: Props) => {
  const buttonStyle = classnames("icon", styles.iconMenuA, isOpen && styles.menuVisible);
  return (
    <span className={buttonStyle} onClick={onClick}>
      <span className={styles.dots}>
        <span className={styles.dot1}></span>
        <span className={styles.dot2}></span>
        <span className={styles.dot3}></span>
      </span>
    </span>
  );
};

export default IconMenuA;
