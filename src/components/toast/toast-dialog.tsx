import React from "react";
import styles from './toast-dialog.module.css';
import classNames from "classnames";

type Props = {
  // reference: React.LegacyRef<any>;
  reference: React.LegacyRef<HTMLDivElement>;
  children?: React.ReactElement;
  title?: string;
  visibility?: string;
  elapsedTime?: string;
  closeText?: string;
  variant?: "error" | "warning" | "info";
  onClose?: ()=> void;
}
// A pop up message used to warn users about failed API calls to the back end
const ToastDialog = ({
  children,
  title,
  visibility,
  elapsedTime,
  reference,
  closeText,
  variant = "info",
  onClose,
} : Props) => {
  return (
    <React.Fragment>
      <div
        ref={reference}
        // className={`toast mt-3 ${visibility ? visibility : ""}`}
        className={classNames('toast mt-3',visibility ? visibility : "", styles[`variant-${variant}`])}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header">
          <div className={classNames("me-auto", styles.title)}>{title ? title : "Information"}</div>
          <small>{elapsedTime ? elapsedTime : "Just now"}</small>
          <button
            type="button"
            className="btn btn-ui-e btn-primary btn-sm"
            data-bs-dismiss="toast"
            aria-label="Close"
            onClick={onClose}
          >
            {" "}
            {closeText && <span className="text">{closeText}</span>}
            X
            {/* <Icon iconName="close"></Icon> */}
          </button>
        </div>
        <div className="toast-body">{children}</div>
      </div>
    </React.Fragment>
  );
};



export default ToastDialog;
