import classNames from "classnames";
import React from "react";
import ButtonInlineA from "../button/button-inline-a";
import styles from "./card-category-b.module.scss";
type Props = {
  className?: string;
  title?: string;
  viewText?: string;
  backgroundColor?: string;
  imageElement?: React.ReactElement;
  titleElement?: React.ReactElement;
  viewElement?: React.ReactElement;
  textAlign?: "center" | "right" | "left";
  verticalAlign?: "top" | "center" | "bottom";
};
const CardCategoryB = ({
  className,
  title,
  viewText,
  imageElement,
  backgroundColor = "none",
  titleElement,
  viewElement,
  textAlign = "center",
  verticalAlign = "center",
}: Props) => {
  return (
    <div
      className={classNames(className, styles.cardCategoryB)}
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <div className={styles.cardImage}>{imageElement}</div>
      <div
        className={classNames(
          styles.cardBody,
          styles[`t-${textAlign}`],
          styles[`v-${verticalAlign}`]
        )}
      >
        {(title || titleElement) && (
          <div className={styles.line}>
            {titleElement}
            {title && <h5 className={styles.title}>{title}</h5>}
          </div>
        )}
        {viewText && (
          <div className={styles.line}>
            <ButtonInlineA text={viewText ? viewText : "Discover"} />
          </div>
        )}
        {viewElement && <div className={styles.line}>{viewElement}</div>}
      </div>
    </div>
  );
};

export default CardCategoryB;
