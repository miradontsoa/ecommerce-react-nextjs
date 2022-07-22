import classNames from "classnames";
import React from "react";
import styles from "./icon-a.module.scss";
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
const IconA = ({
  className,
  imageElement,
  //   color,
  size = "medium",
  shape = "rounded-medium",
}: Props) => {
  /* let _color = styles.colorCurrent;
  switch (color) {
    case "primary":
      _color = styles.colorPrimary;
      break;
    case "secondary":
      _color = styles.colorSecondary;
      break;

    default:
      break;
  } */
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
    <div className={classNames(className, styles.IconA, _size, _shape)}>
      {/* <div className={classNames(className, styles.IconA, _size, _color, _shape)}> */}
      {/* <div className="icon-box-xl bg-primary-opacity-2 rounded align-middle"> */}
      {imageElement}
    </div>
  );
};

export default IconA;
