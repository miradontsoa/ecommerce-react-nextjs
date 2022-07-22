import { Color } from "@typescript/types";
import classNames from "classnames";
import React from "react";
import styles from "./pricing-b.module.css";

type Props = {
  className?: string;
  priceElement?: React.ReactElement;
  titleElement: React.ReactElement;
  contentElement?: React.ReactElement;
  footerElement?: React.ReactElement;
  elevation?: "none" | "small" | "large" | "medium";
  shape?: "square" | "rounded-small" | "rounded-medium" | "rounded-large";
  featureList?: {
    title?: string;
    description?: string;
    enabled?: boolean;
  }[];
};
const PricingB = ({
  className,
  elevation = "small",
  shape = "rounded-medium",
  titleElement,
  priceElement,
  contentElement,
  footerElement,
  featureList,
}: Props) => {
  let _elevation = "";
  
  let _shape = "";
  switch (shape) {
    case "rounded-small":
      _shape = styles.rdSm;
      break;
    case "rounded-medium":
      _shape = styles.rdMd;
      break;
    case "rounded-large":
      _shape = styles.rdLg;
      break;
  }
  switch (elevation) {
    case "small":
      _elevation = styles.elevSm;
      break;
    case "medium":
      _elevation = styles.elevMd;
      break;
    case "large":
      _elevation = styles.elevLg;
      break;
  }
  return (
    <div
      className={classNames(
        styles.pricingB,
        _shape,
        _elevation,
        className
      )}
    >
      <div className={styles.body}>
        {titleElement && <div className={styles.title}>{titleElement}</div>}
        {priceElement && <div className={styles.price}>{priceElement}</div>}
        {contentElement && (
          <div className={styles.bodyContent}>{contentElement}</div>
        )}
        {featureList && (
          <div className={styles.bodyFeatureList}>
            <ul className={styles.featureList}>
              {featureList.map((feature) => {
                return (
                  <li
                    key={feature.title}
                    className={classNames(
                      feature.enabled === false && styles.featureDisabled
                    )}
                  >
                    {feature.enabled === true && (
                      <span className={styles.featureIcon}>
                        <svg viewBox="0 0 512 512">
                          <path
                            d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                            fill="none"
                            stroke="currentColor"
                            strokeMiterlimit="10"
                            strokeWidth="32"
                          />
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="32"
                            d="M352 176L217.6 336 160 272"
                          />
                        </svg>
                      </span>
                    )}
                    {feature.enabled === false && (
                      <span className={styles.featureIcon}>
                        <svg viewBox="0 0 512 512">
                          <path
                            d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                            fill="none"
                            stroke="currentColor"
                            strokeMiterlimit="10"
                            strokeWidth="32"
                          />
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="32"
                            d="M320 320L192 192M192 320l128-128"
                          />
                        </svg>
                      </span>
                    )}
                    <span className={styles.featureTitle}>{feature.title}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      {footerElement && <div className={styles.footer}>{footerElement}</div>}
    </div>
  );
};
export default PricingB;
