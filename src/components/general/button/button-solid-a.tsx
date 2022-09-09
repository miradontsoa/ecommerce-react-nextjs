import React from "react";
import styles from "./button-solid-a.module.scss";
import classnames from "classnames";
import { ThemeColor } from "types/types";

type Props = {
  children?: any;
  text?: string;
  // color?: "primary" | "secondary" | "light" | string;
  color?: ThemeColor;
  className?: string;
  size?: "x-small" | "small" | "medium" | "large";
  width?: "auto" | "full";
  icon?: React.ReactElement;
  iconOnly?: boolean;
  iconPosition?: "left" | "right";
  buttonStyle?: "solid" | "outlined";
  borderWidth?: "thin" | "thick" | "medium";
  shape?:
    | "square"
    | "rounded-small"
    | "rounded-medium"
    | "rounded-large"
    | "circle";
  // onClick?: () => void;
  onClick?: React.MouseEventHandler;
};

const ButtonSolidA = ({
  children,
  text,
  className,
  icon,
  iconOnly = false,
  iconPosition = "right",
  color = "light",
  size = "medium",
  width = "auto",
  shape = "rounded-medium",
  buttonStyle = "solid",
  borderWidth = "medium",
  onClick,
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
  const iconElement = (
    <>{icon && <span className={`${styles.icon}`}>{icon}</span>}</>
  );
  return (
    <React.Fragment>
      <button
        className={classnames(
          className,
          styles.btnSolidA,
          styles[size],
          styles[`color-${color}`],
          styles[`shape-${shape}`],
          styles[`style-${buttonStyle}`],
          styles[`bdw-${borderWidth}`],
          iconOnly && styles.iconOnly,
          _width
        )}
        onClick={onClick}
      >
        {children}
        {iconPosition === "left" && iconElement}
        {text && <span className={`${styles.text}`}>{text}</span>}
        {iconPosition === "right" && iconElement}
      </button>
    </React.Fragment>
  );
};
export default ButtonSolidA;
