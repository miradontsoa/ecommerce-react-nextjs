import IconB from "components/general/icon/icon-b";
import InputA from "components/general/input/input-a";
import classNames from "classnames";
import React from "react";
import styles from "./searchbar-a.module.scss";

type Props = {
  className?: string;
  buttonElement?: React.ReactElement;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void | any;
  onSubmit?: (text: string) => void | any;
};

const SearchbarA = ({
  className,
  buttonElement,
  placeholder,
  value,
  onSubmit,
  onChangeText,
}: Props) => {
  const [textSearch, setTextSearch] = React.useState(value || "");
  return (
    <div className={classNames(styles.wrapper, className)}>
      <form className={classNames(styles.form)}>
        <div className={classNames(styles.inputGroup)}>
          {/* <input
            className="form-control form-control-a bd-thin"
            type="text"
            placeholder={placeholder}
          /> */}
          <InputA
            className={classNames("input", styles.input, styles.inputField)}
            type="text"
            name="textSearch"
            placeholder={placeholder}
            aria-label="textSearch"
            required
            value={textSearch}
            aspect="underline"
            size="small"
            onChange={(e) => {
              onChangeText
                ? onChangeText(e.target.value)
                : setTextSearch(e.target.value);
            }}
          />
          <button
            className={classNames(styles.button)}
            type="submit"
            name="submit"
            onClick={(e) => {
                onSubmit && onSubmit(textSearch);
            }}
          >
            {buttonElement ? (
              buttonElement
            ) : (
              <IconB
                size="small"
                imageElement={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="51.921"
                    height="51.92"
                    viewBox="0 0 51.921 51.92"
                  >
                    <g id="search" transform="translate(-1601.681 -2192.454)">
                      <g id="Group_397" data-name="Group 397">
                        <path
                          fill="currentColor"
                          id="Path_503"
                          data-name="Path 503"
                          d="M1652.81,2239.17l-11.761-11.762a21.862,21.862,0,1,0-4.413,4.413l11.762,11.761a3.125,3.125,0,0,0,4.412-4.412Zm-44.846-24.834a15.6,15.6,0,1,1,15.6,15.6,15.6,15.6,0,0,1-15.6-15.6Z"
                        />
                      </g>
                    </g>
                  </svg>
                }
              ></IconB>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchbarA;
