import React from "react";
import styles from "./button-solid-a.module.scss";
import classnames from "classnames";

type Props = {
  children?: any;
  text?: string;
  color?: "primary" | "secondary" | "light" | string;
  className?: string;
  size?: "small" | "medium" | "large";
  width?: "auto" | "full";
  icon?: React.ReactElement;
};

const ButtonSolidA = ({
  children,
  text,
  className,
  icon,
  color = "light",
  size = "medium",
  width = "auto",
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
          styles.btnSolidA,
          styles[color],
          styles[size],
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
export default ButtonSolidA;
