import classNames from "classnames";
import styles from "./button-inline-a.module.scss";
type Props = {
  children?: React.ReactElement | string | undefined;
  iconElement?: React.ReactElement;
  iconPosition?: "left" | "right";
  className?: string;
  text?: string;
  badgeText?: string;
  size?: "x-small" | "small" | "medium" | "large";
  onClick?: React.MouseEventHandler;
};
const ButtonInlineA = ({
  className,
  children,
  text,
  iconElement,
  iconPosition,
  badgeText,
  size,
  onClick,
}: Props) => {
  let _iconPosition = styles.iconLeft;
  switch (iconPosition) {
    case "left":
      _iconPosition = styles.iconLeft;
      break;
    case "right":
      _iconPosition = styles.iconRight;
      break;

    default:
      break;
  }
  return (
    <button
      className={classNames(
        styles.btnInlineA,
        className,
        _iconPosition,
        styles[size]
      )}
    >
      {children}
      {text && <span className={classNames(styles.text)}>{text}</span>}
      {iconElement && (
        <span className={classNames(styles.icon)}>{iconElement}</span>
      )}
      {badgeText && (
        <span className={classNames(styles.badge, "badge badge-alert")}>
          {badgeText}
        </span>
      )}
    </button>
  );
};
export default ButtonInlineA;
