import classNames from "classnames";
import React from "react";
import styles from "./image-b.module.scss";

type Props = {
  src: string;
  alt?: string;
  rounded?: "none" | "small" | "medium" | "large";
  scaleOnHover?: boolean
};
const ImageB = ({ src, alt, rounded = "none", scaleOnHover = true }: Props) => {
  let _rounded = styles.roundedNone;
  switch (rounded) {
    case "small":
      _rounded = styles.roundedSmall;
      break;
    case "medium":
      _rounded = styles.roundedMedium;
      break;
    case "large":
      _rounded = styles.roundedLarge;
      break;
  
  }
  return (
    <figure className={classNames(styles.imageB)}>
      {/* <div className={"fig-layer rounded overflow-hidden"}> */}
      <div className={classNames(styles.imageLayer, _rounded)}>
        <div className={classNames(scaleOnHover && styles.scaleOnHover)}>
          <img
            className={classNames(styles.fitCover)}
            src={src}
            alt={alt}
          />
        </div>
      </div>
    </figure>
  );
};

export default ImageB;
