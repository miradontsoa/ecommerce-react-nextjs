import classNames from "classnames";
import React from "react";
import styles from "./icon-b.module.scss";
type Props = {
  className?: string;
  imageElement: React.ReactElement;
  //   color?: Color;
  size?: "small" | "medium" | "large";
  shape?:
    | "square"
    | "rounded-small"
    | "rounded-medium"
    | "rounded-large"
    | "circle";
};
const IconB = ({
  className,
  imageElement,
  size = "medium",
  shape = "rounded-medium",
}: Props) => {
  let _size = styles.sizeMedium;
  switch (size) {
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
  let _shape = styles.shapeRoundedMedium;
  switch (shape) {
    case "square":
      _shape = styles.shapeSquare;
      break;
    case "rounded-small":
      _shape = styles.shapeRoundedSmall;
      break;
    case "rounded-medium":
      _shape = styles.shapeRoundedMedium;
      break;
    case "rounded-large":
      _shape = styles.shapeRoundedLarge;
      break;
    case "circle":
      _shape = styles.shapeCircle;
      break;
  }
  return (
    <div className={classNames(className, styles.IconB, _size, _shape)}>
      {imageElement}
    </div>
  );
};

export default IconB;
