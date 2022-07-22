import ButtonSolidA from "@components/general/button/button-solid-a";
import CardA from "@components/general/card/card-a";
import InputA from "@components/general/input/input-a";
import classNames from "classnames";
import React from "react";
import styles from "./signup-form-a.module.css";
type Props = {
  buttonElement?: React.ReactElement;
  buttonText?: string;
  className?: string;
  padding?: "small" | "medium" | "large" | "none";
  buttonSize?: "small" | "medium" | "large" ;
};
const SignupFormA = ({
  buttonElement,
  buttonText,
  className,
  padding = "medium",
  buttonSize = "medium",
}: Props) => {
  let _padding = styles.paddingLarge;
  switch (padding) {
    case "small":
      _padding = styles.paddingSmall;
      break;
    case "medium":
      _padding = styles.paddingMedium;
      break;
    case "large":
      _padding = styles.paddingLarge;
      break;
    case "none":
      _padding = styles.paddingNone;
      break;
  }

  return (
    <CardA
      headerElement={<p>Icon create here</p>}
      className={classNames(className, styles.container, _padding)}
    >
      <form className="card-form pt-0">
        <div className="mb-3">
          <label htmlFor="nameSignupInput" className="form-label">
            Name
          </label>
          <InputA
            type="text"
            className="form-control form-control-outline"
            id="nameSignupInput"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="emailSignupInput" className="form-label">
            Email address
          </label>
          <InputA
            type="email"
            className="form-control form-control-outline"
            id="emailSignupInput"
            placeholder="your@email.com"
            required
          />
        </div>
        <div className="mb-3">
          <p className="text-muted fs-regular">
            By clicking sign-up, you agree that you accept our{" "}
            <a className="text-current-color" href="#">
              terms and conditions.
            </a>
          </p>
        </div>
        <div>
          <button
            className={classNames(styles.button)}
            type="submit"
            name="submit"
          >
            {buttonElement ? (
              buttonElement
            ) : (
              <ButtonSolidA size={buttonSize} width={"full"}>
                {buttonText}
              </ButtonSolidA>
            )}
          </button>
        </div>
      </form>
    </CardA>
  );
};

export default SignupFormA;
