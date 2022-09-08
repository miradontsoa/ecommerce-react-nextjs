import { ThemeColor } from "types/types";
import classNames from "classnames";
import React from "react";
import styles from "./icon-c.module.scss";
type Props = {
  className?: string;
  imageElement: React.ReactElement;
  color?: ThemeColor;
  size?: "x-small" | "small" | "medium" | "large";
  shape?:
    | "square"
    | "rounded-small"
    | "rounded-medium"
    | "rounded-large"
    | "circle";
};
const IconC = ({
  className,
  imageElement,
  size = "medium",
  color = "currentColor",
  shape = "circle",
}: Props) => {
  return (
    <div
      className={classNames(
        className,
        styles.IconC,
        styles[`size-${size}`],
        styles.sizeMedium,
        styles[`shape-${shape}`],
        styles[color]
      )}
    >
      {imageElement}
    </div>
  );
};

export default IconC;
