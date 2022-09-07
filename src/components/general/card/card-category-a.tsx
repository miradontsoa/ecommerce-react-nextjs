import classNames from "classnames";
import React from "react";
import ButtonInlineA from "../button/button-inline-a";
import styles from "./card-category-a.module.scss";
type Props = {
  className?: string;
  title?: string;
  viewText?: string;
  imageElement?: React.ReactElement;
  titleElement?: React.ReactElement;
  viewElement?: React.ReactElement;
  textAlign?: "center" | "right" | "left"
};
const CardCategoryA = ({
  className,
  title,
  viewText,
  imageElement,
  titleElement,
  viewElement,
  textAlign = "center"
}: Props) => {
  return (
    <div className={classNames(className, styles.cardCategoryA)}>
      <div className={styles.cardImage}><div className={styles.cardImageContent}>{imageElement}</div></div>
      <div className={classNames(styles.cardBody, styles[textAlign])}>
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
        {viewElement && (
          <div className={styles.line}>
            {viewElement}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardCategoryA;
