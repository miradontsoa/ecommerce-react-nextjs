import classNames from "classnames";
import React from "react";
import styles from "./icon-a.module.scss";
type Props = {
  className?: string;
  imageElement: React.ReactElement;
  //   color?: Color;
  size?: "text" | "xx-small" | "x-small"| "small" | "medium" | "large";
};
const IconA = ({
  className,
  imageElement,
  //   color,
  size = "medium",
}: Props) => {
  return (
    <div className={classNames(className, styles.IconA, styles[`size-${size}`])}>
      {imageElement}
    </div>
  );
};

export default IconA;
