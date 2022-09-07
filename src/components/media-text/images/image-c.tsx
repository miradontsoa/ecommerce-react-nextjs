import React from "react";
import classNames from "classnames";
import styles from "./image-c.module.scss";

type Props = {
  src: string;
  className?: string;
  backgroundSrc?: string;
  alt?: string;
  shadow?: "small" | "medium" | "large" | "none";
  backgroundRounded?: "small" | "medium" | "large" | "none";
  backgroundTranslation?: "top" | "right" | "left" | "bottom" | "none";
  backgroundAttachment?: "fixed" | "none";
};

const ImageC = ({
  src,
  alt,
  className,
  backgroundSrc,
  backgroundRounded = "none",
  backgroundTranslation = "none",
  backgroundAttachment = "none",
  shadow = "large",
}: Props) => {
  let _shadow = "";
  switch (shadow) {
    case "small":
      _shadow = styles.shadowSmall;
      break;
    case "medium":
      _shadow = styles.shadowMedium;
      break;
    case "large":
      _shadow = styles.shadowLarge;
      break;
  }
  let _bgRounded = "";
  switch (backgroundRounded) {
    case "small":
      _bgRounded = styles.bgRoundedSmall;
      break;
    case "medium":
      _bgRounded = styles.bgRoundedMedium;
      break;
    case "large":
      _bgRounded = styles.bgRoundedLarge;
      break;
  }
  let _bgTranslation = "";
  switch (backgroundTranslation) {
    case "left":
      _bgTranslation = styles.bgTranslationLeft;
      break;
    case "right":
      _bgTranslation = styles.bgTranslationRight;
      break;
    case "top":
      _bgTranslation = styles.bgTranslationTop;
      break;
    case "bottom":
      _bgTranslation = styles.bgTranslationBottom;
      break;
  }
  let _bgAttachment = "";
  switch (backgroundAttachment) {
    case "fixed":
      _bgAttachment = styles.bgAttachmentFixed;
      break;
  }
  return (
    <figure className={classNames(styles.imageC, className)}>
      {backgroundSrc && (
        <div
          style={{
            backgroundImage: `url(${backgroundSrc})`,
          }}
          className={classNames(
            styles.figureBg,
            _bgRounded,
            _bgTranslation,
            _bgAttachment,
          )}
        ></div>
      )}
      <img
        src={src}
        className={classNames(_shadow, "img-fluid rounded-sm")}
        alt={alt}
      />
    </figure>
  );
};

export default ImageC;
