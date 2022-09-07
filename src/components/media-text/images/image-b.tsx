import classNames from "classnames";
import React from "react";
import styles from "./image-b.module.scss";

type Props = {
  image1Src: string;
  image2Src?: string;
  image1Alt?: string;
  image2Alt?: string;
};
const ImageB = ({ image1Src, image1Alt, image2Src, image2Alt }: Props) => {
  return (
    <figure className={classNames(styles.imageB)}>
      <div className={classNames(styles.img1)}>
        <img src={image1Src} alt={image1Alt} />
      </div>
      <div className={classNames(styles.img2)}>
        <img src={image2Src} alt={image2Alt} />
      </div>
    </figure>
  );
};

export default ImageB;
