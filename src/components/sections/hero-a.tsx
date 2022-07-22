import React from "react";
import classNames from "classnames";
import styles from "./hero-a.module.scss";

type Props = {
  className?: string;
  contentElement: React.ReactElement;
  imageSrc?: string;
};
const HeroA = ({ className, contentElement, imageSrc }: Props) => {
  return (
    <section className={classNames(className, styles.heroA)}>
      {imageSrc && (
        <div className={styles.heroBg}>
          <img className={styles.heroBgImg} alt="..." src={imageSrc} />
        </div>
      )}
      <div className={classNames(styles.heroBody)}>
        <div className={classNames(styles.heroContainer)}>
          <div className={classNames(styles.heroContent)}>{contentElement}</div>
        </div>
      </div>
    </section>
  );
};

export default HeroA;
