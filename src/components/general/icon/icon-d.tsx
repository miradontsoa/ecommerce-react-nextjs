import classNames from "classnames";
import React from "react";
import styles from "./icon-d.module.scss";
type Props = {
  className?: string;
  imageElement: React.ReactElement;
  //   color?: Color;
  size?: "x-small"| "small" | "medium" | "large";
};
const IconD = ({
  className,
  imageElement,
  //   color,
  size = "medium",
}: Props) => {
  let _size = styles.sizeMedium;
  switch (size) {
    case "x-small":
      _size = styles.sizeXSmall;
      break;
    case "small":
      _size = styles.sizeSmall;
      break;
    case "medium":
      _size = styles.sizeMedium;
      break;
    case "large":
      _size = styles.sizeLarge;
      break;
  }
  return (
    <div className={classNames(className, styles.IconA, _size)}>
      {imageElement}
    </div>
  );
};

export default IconD;
