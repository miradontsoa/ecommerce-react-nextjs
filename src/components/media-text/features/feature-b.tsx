import { ThemeColor } from "types/types";
import classNames from "classnames";
import React from "react";
import styles from "./feature-b.module.scss";

type Props = {
  className?: string;
  imageElement?: React.ReactElement;
  titleElement?: React.ReactElement;
  contentElement?: React.ReactElement;
  color?: ThemeColor;
};
const FeatureB = ({ imageElement, titleElement, contentElement, className }: Props) => {
  return (
    <div className={classNames("item-feature", styles.featureB, className)}>
      <div className={classNames(styles.header)}>{imageElement}</div>
      <div className={classNames(styles.body)}>
        <div className={classNames(styles.bodyTitle)}>{titleElement}</div>
        <div className={classNames(styles.bodyContent, "text-large")}>
          {contentElement}
        </div>
      </div>
    </div>
  );
};
export default FeatureB;
