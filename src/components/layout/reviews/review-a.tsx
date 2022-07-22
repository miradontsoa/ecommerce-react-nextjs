import { Color } from "@typescript/types";
import classNames from "classnames";
import styles from "./review-a.module.css";
type Props = {
  imageElement?: React.ReactElement;
  authorElement?: React.ReactElement;
  contentElement: React.ReactElement;
  color?: Color;
};

const ReviewA = ({ imageElement, contentElement, authorElement }: Props) => {
  return (
    <div className={classNames(styles.reviewA)}>
      <div className={classNames(styles.imageContainer)}>
        <div className={classNames(styles.image)}>{imageElement}</div>
      </div>
      <div className={classNames(styles.bodyContainer)}>
        <div className={styles.quote}>
          <svg width="56.05" height="50" viewBox="0 0 56.05 50">
            <path
              d="M53.6,0V7.1a11.4,11.4,0,0,0-5,6.7A39.4,39.4,0,0,0,47,26.4v2.2h9V50H35V34a48,48,0,0,1,4.7-23,21.229,21.229,0,0,1,14-11Zm-35,0V7.1a11.4,11.4,0,0,0-5,6.7A39.4,39.4,0,0,0,12,26.4v2.2h9V50H0V34A48,48,0,0,1,4.7,11a21.229,21.229,0,0,1,14-11Z"
              transform="translate(0.05)"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div className={styles.content}>
          <div>{contentElement}</div>
        </div>
        <div className={styles.author}>
          <div>{authorElement}</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewA;
