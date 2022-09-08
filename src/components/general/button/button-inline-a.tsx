import classNames from "classnames";
import styles from "./button-inline-a.module.scss";
type Props = {
  children?: React.ReactElement | string | undefined;
  iconElement?: React.ReactElement;
  iconPosition?: "left" | "right";
  className?: string;
  text?: string;
  badgeText?: string;
};
const ButtonInlineA = ({
  className,
  children,
  text,
  iconElement,
  iconPosition,
  badgeText,
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
    <span className={classNames(styles.btnInlineA, className, _iconPosition)}>
      {children}
      {text && <span className={classNames(styles.text)}>{text}</span>}
      {iconElement && <span className={classNames(styles.icon)}>{iconElement}</span>}
      {badgeText && <span className={classNames(styles.badge,"badge badge-alert")}>{badgeText}</span>}
    </span>
  );
};
export default ButtonInlineA;
