import classNames from "classnames";
import styles from "./color-categories-a.module.scss";
type Props = {
  className?: string;
  colors?: {
    title?: string;
    rgb: string;
    active?: boolean;
  }[];
};
const ColorCategoriesA = ({ colors, className }: Props) => {
  return (
    <>
      {colors && (
        <div className={classNames(styles.colors, className)}>
          {colors.map((color, index) => {
            return (
              <span
                key={index}
                className={styles.colorIcon}
                style={{
                  // backgroundColor: "#f4f",
                  backgroundColor: color.rgb,
                }}
              ></span>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ColorCategoriesA;
