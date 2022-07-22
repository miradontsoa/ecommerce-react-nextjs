import classNames from "classnames";
import React from "react";
import styles from "./input-a.module.scss";

type Props = {
  id?: string;
  value?: string | number | string[] | undefined;
  aspect?: "outline" | "underline" | "shadow" | "elevated" | "flat";
  className?: string;
  type?: React.HTMLInputTypeAttribute | undefined;
  name?: string | undefined;
  placeholder?: string | undefined;
  ariaLabel?: string | undefined;
  required?: boolean | undefined;
  size?: "small" | "medium" | "large";
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

const InputA = ({
  id,
  aspect = "outline",
  size = "medium",
  className,
  type,
  name,
  placeholder,
  ariaLabel,
  required = false,
  value,
  onChange,
}: Props) => {
  return (
    <div
      className={classNames(
        "input",
        className,
        styles.inputA,
        styles[`aspect-${aspect}`],
      )}
    >
      <input
        id={id}
        className={classNames(
          styles.input,
          styles[`size-${size}`]
          // "input",
          // className,
          // styles.inputA,
          // styles[`aspect-${aspect}`],
          // styles[`size-${size}`]
        )}
        type={type}
        name={name}
        placeholder={placeholder}
        aria-label={ariaLabel}
        required={required}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputA;
