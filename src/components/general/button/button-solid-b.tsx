import React from "react";
import styles from "./button-solid-b.module.scss";
import classnames from "classnames";

type Props = {
  children?: any;
  text?: string;
  color?: "primary" | "secondary" | "light" | string;
  colorStyle?: "color-normal" | "color-invert";
  className?: string;
  size?: "small" | "medium" | "large";
  width?: "auto" | "full";
  icon?: React.ReactElement;
  ref?: any;
  itemRef?: any;
};

const ButtonSolidB = ({
  children,
  text,
  className,
  icon,
  color = "primary",
  colorStyle = "color-normal",
  size = "medium",
  width = "auto",
  ref,
  itemRef,
}: Props): React.ReactElement => {
  let _width = styles.widthAuto;
  switch (width) {
    case "auto":
      _width = styles.widthAuto;
      break;
    case "full":
      _width = styles.widthFull;
      break;

    default:
      break;
  }
  return (
    <React.Fragment>
      <span
        className={classnames(
          className,
          styles.btnSolidB,
          styles[color],
          styles[size],
          styles[colorStyle],
          _width
        )}
      >
        {children}
        <span className={`${styles.text}`}>{text}</span>
        {icon && <span className={`${styles.icon}`}>{icon}</span>}
      </span>
    </React.Fragment>
  );
};
export default ButtonSolidB;
