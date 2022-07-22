import classNames from "classnames";
import React from "react";
import styles from "./card-a.module.css";

type Props = {
  className?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  borderRadius?: "small" | "medium" | "large" | "x-large" | "none";
  headerElement?: React.ReactElement;
  children?: React.ReactElement | string | undefined;
  paddingTop?: "large" | "medium" | "small" | "none";
  paddingBottom?: "large" | "medium" | "small" | "none";
  paddingLeft?: "large" | "medium" | "small" | "none";
  paddingRight?: "large" | "medium" | "small" | "none";
};
const CardA = ({
  className,
  headerElement,
  children,
  backgroundImage,
  backgroundColor,
  borderRadius = "medium",
  paddingTop = "none",
  paddingBottom = "none",
  paddingLeft = "none",
  paddingRight = "none",
}: Props) => {
  let _borderRadius = styles.borderRadiusMedium;
  switch (borderRadius) {
    case "small":
      _borderRadius = styles.borderRadiusSmall;
      break;
    case "medium":
      _borderRadius = styles.borderRadiusMedium;
      break;
    case "large":
      _borderRadius = styles.borderRadiusLarge;
      break;
    case "none":
      _borderRadius = styles.borderRadiusNone;
      break;
  }

  let _paddingTop = styles.paddingTopMedium;
  switch (paddingTop) {
    case "small":
      _paddingTop = styles.paddingTopSmall;
      break;
    case "medium":
      _paddingTop = styles.paddingTopMedium;
      break;
    case "large":
      _paddingTop = styles.paddingTopLarge;
      break;
    case "none":
      _paddingTop = styles.paddingTopNone;
      break;
  }

  let _paddingBottom = styles.paddingBottomLarge;
  switch (paddingBottom) {
    case "small":
      _paddingBottom = styles.paddingBottomSmall;
      break;
    case "medium":
      _paddingBottom = styles.paddingBottomMedium;
      break;
    case "large":
      _paddingBottom = styles.paddingBottomLarge;
      break;
    case "none":
      _paddingBottom = styles.paddingBottomNone;
      break;
  }

  let _paddingLeft = styles.paddingLeftLarge;
  switch (paddingLeft) {
    case "small":
      _paddingLeft = styles.paddingLeftSmall;
      break;
    case "medium":
      _paddingLeft = styles.paddingLeftMedium;
      break;
    case "large":
      _paddingLeft = styles.paddingLeftLarge;
      break;
    case "none":
      _paddingLeft = styles.paddingLeftNone;
      break;
  }

  let _paddingRight = styles.paddingRightLarge;
  switch (paddingRight) {
    case "small":
      _paddingRight = styles.paddingRightSmall;
      break;
    case "medium":
      _paddingRight = styles.paddingRightMedium;
      break;
    case "large":
      _paddingRight = styles.paddingRightLarge;
      break;
    case "none":
      _paddingRight = styles.paddingRightNone;
      break;
  }

  return (
    <div className={classNames(className, styles.cardA, _borderRadius)}>
      {(backgroundImage || backgroundColor) && (
        <div className={classNames(styles.bg)}>
          {backgroundImage && (
            <div className={styles.bgLayer}>
              <img className="fit" alt="..." src={backgroundImage} />
            </div>
          )}
          {backgroundColor && (
            <div
              className={classNames(styles.bgLayer)}
              style={{ backgroundColor: backgroundColor }}
            ></div>
          )}
        </div>
      )}

      {headerElement && (
        <div className={classNames(styles.cardHeader)}>{headerElement}</div>
      )}

      <div
        className={classNames(
          styles.container,
          _paddingTop,
          _paddingBottom,
          _paddingLeft,
          _paddingRight
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default CardA;
