  import React from "react";
import styles from "./section-a.module.scss";
import classNames from "classnames";

type Props = {
  backgroundImage?: string,
  backgroundColor?: string,
  className?: string;
  containerWidth?: "full" | "content" | "small" | "medium" | "large";
  contentElement: React.ReactElement;
  footerElement?: React.ReactElement;
  footerContainerWidth?: "full" | "content";
  marginX?: "large" | "medium" | "small" | "none";
  marginTop?: "large" | "medium" | "small" | "none";
  marginBottom?: "large" | "medium" | "small" | "none";
  borderBottom?: "medium" | "none";
  borderTop?: "medium" | "none";
};
const SectionA = ({
  backgroundImage,
  backgroundColor,
  className,
  containerWidth = "content",
  contentElement,
  footerElement,
  footerContainerWidth,
  marginX = "none",
  marginTop,
  marginBottom,
  borderTop = "none",
  borderBottom = "none",
}: Props) => {
  let _containerWidth = styles.content;
  switch (containerWidth) {
    case "full":
      _containerWidth = styles.containerFull;
      break;
    case "content":
      _containerWidth = styles.containerContent;
      break;
    case "small":
        _containerWidth = styles.containerSmall;
        break;
    case "medium":
        _containerWidth = styles.containerMedium;
        break;
    case "large":
      _containerWidth = styles.containerLarge;
      break;
  }
  let _footerContainerWidth = styles.content;
  switch (footerContainerWidth) {
    case "full":
      _footerContainerWidth = styles.full;
      break;
    case "content":
      _footerContainerWidth = styles.content;
      break;
  }

  let _marginTop = styles.marginTopMedium;
  switch (marginTop) {
    case "small":
      _marginTop = styles.marginTopSmall;
      break;
    case "medium":
      _marginTop = styles.marginTopMedium;
      break;
    case "large":
      _marginTop = styles.marginTopLarge;
      break;
    case "none":
      _marginTop = styles.marginTopNone;
      break;
  }

  let _marginBottom = styles.marginBottomLarge;
  switch (marginBottom) {
    case "small":
      _marginBottom = styles.marginBottomSmall;
      break;
    case "medium":
      _marginBottom = styles.marginBottomMedium;
      break;
    case "large":
      _marginBottom = styles.marginBottomLarge;
      break;
    case "none":
      _marginBottom = styles.marginBottomNone;
      break;
  }

  return (
    <section className={classNames(className, styles.sectionA)}>
      { ( backgroundImage || backgroundColor) && <div className={styles.bg}>
        { backgroundImage && <div className={styles.bgLayer}>
          <img className="fit" alt="..." src={backgroundImage}/>
        </div>}
        {backgroundColor && <div className={classNames(styles.bgLayer)} style={{backgroundColor: backgroundColor}}></div>}
      </div>}

      <div
        className={classNames(
          styles.container,
          "container-fluid",
          styles[`borderTop-${borderTop}`],
          styles[`borderBottom-${borderBottom}`],
          styles[`mx-${marginX}`],
          _marginTop,
          _marginBottom
        )}
      >
        <div className={classNames(styles.body, _containerWidth)}>
          <div className={classNames(styles.sectionContent)}>
            {contentElement}
          </div>
        </div>
      </div>

      {footerElement && (
        <div className={classNames(styles.footer, _footerContainerWidth)}>
          {footerElement}
        </div>
      )}
    </section>
  );
};

export default SectionA;
