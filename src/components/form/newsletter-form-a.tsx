import React from "react";
import classNames from "classnames";
import styles from "./newsletter-form-a.module.css";
import InputA from "@components/general/input/input-a";
import ButtonSolidA from "@components/general/button/button-solid-a";

type Props = {
  className?: string;
  direction?: "horizontal" | "vertical";
  buttonElement?: React.ReactElement;
  subscribeText?: string;
  email?: string;
  onChangeEmail: (text: string) => void;
};

const NewsletterFormA = ({
  className,
  buttonElement,
  subscribeText,
  email = "",
  direction = "horizontal",
  onChangeEmail,
}: Props) => {
  return (
    <>
      <div className={classNames(styles.wrapper, className)}>
        <form className={classNames(styles.form, styles[direction])}>
          <div className={classNames(styles.inputGroup)}>
            <InputA
              className={classNames("input", styles.input, styles.inputEmail)}
              type="email"
              name="email"
              placeholder="Email"
              aria-label="Email"
              required
              value={email}
              onChange={(e) => onChangeEmail(e.target.value)}
            />
            <button
              className={classNames(styles.button)}
              type="submit"
              name="submit"
            >
              {buttonElement ? (
                buttonElement
              ) : (
                <ButtonSolidA
                  size="medium"
                  width={direction === "vertical" ? "full" : "auto"}
                >
                  {subscribeText}
                </ButtonSolidA>
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default NewsletterFormA;
