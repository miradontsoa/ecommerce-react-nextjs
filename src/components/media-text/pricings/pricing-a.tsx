import { Color } from "types/types";
import classNames from "classnames";
import React from "react";
import styles from "./pricing-a.module.css";

type Props = {
  className?: string;
  priceElement?: React.ReactElement;
  titleElement: React.ReactElement;
  contentElement?: React.ReactElement;
  footerElement?: React.ReactElement;
  color?: Color;
  featureList?: {
    title?: string;
    description?: string;
    enabled?: boolean;
  }[];
};
const PricingA = ({
  className,
  titleElement,
  priceElement,
  contentElement,
  footerElement,
  featureList,
  color = "primary",
}: Props) => {
  return (
    <div
      className={classNames(
        styles.pricingA,
        styles.moveHeader,
        styles[color],
        className
      )}
    >
      <div className={styles.header}>
        <div className={styles.badge}>{titleElement}</div>
      </div>
      <div className={styles.body}>
        {priceElement && <div className={styles.bodyPrice}>{priceElement}</div>}
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
export default PricingA;
