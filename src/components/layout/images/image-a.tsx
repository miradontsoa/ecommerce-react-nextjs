import classNames from "classnames";
import React from "react";
import styles from "./image-a.module.scss";

type Props = {
  src: string;
  alt?: string;
  shape?: "square" | "rounded-small" | "rounded-medium" | "rounded-large" | "circle";
  scaleOnHover?: boolean
};
const ImageA = ({ src, alt, shape = "square", scaleOnHover = true }: Props) => {
  
  let _shape = styles.shapeSquare;
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
    <figure className={classNames(styles.imageA)}>
      {/* <div className={"fig-layer rounded overflow-hidden"}> */}
      <div className={classNames(styles.imageLayer, _shape)}>
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

export default ImageA;
