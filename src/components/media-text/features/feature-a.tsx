import { ThemeColor } from "types/types";
import classNames from "classnames";
import React from "react";
import styles from "./feature-a.module.scss";

type Props = {
  imageElement?: React.ReactElement;
  titleElement?: React.ReactElement;
  contentElement?: React.ReactElement;
  color?: ThemeColor;
  className?: string;
  elevation?: "none" | "small" | "large" | "medium";
  padding?: "none" | "small" | "large" | "medium";
  shape?: "square" | "rounded-small" | "rounded-medium" | "rounded-large";
};
const FeatureA = ({
  className,
  imageElement,
  titleElement,
  contentElement,
  shape,
  elevation,
  padding,
}: Props) => {
  let _shape = "";
  switch (shape) {
    case "rounded-small":
      _shape = styles.rdSm;
      break;
    case "rounded-medium":
      _shape = styles.rdMd;
      break;
    case "rounded-large":
      _shape = styles.rdLg;
      break;
  }
  let _elevation = "";
  switch (elevation) {
    case "small":
      _elevation = styles.elevSm;
      break;
    case "medium":
      _elevation = styles.elevMd;
      break;
    case "large":
      _elevation = styles.elevLg;
      break;
  }

  let _padding = "";
  switch (padding) {
    case "small":
      _padding = styles.pSM;
      break;
    case "medium":
      _padding = styles.pMd;
      break;
    case "large":
      _padding = styles.pLg;
      break;
  }

  return (
    <div className={classNames(className, styles.body, _shape, _elevation, _padding)}>
      <div className={classNames(styles.image)}>{imageElement}</div>
      <div className={classNames(styles.bodyTitle)}>{titleElement}</div>
      <div className={classNames(styles.bodyContent)}>{contentElement}</div>
    </div>
  );
};
export default FeatureA;
