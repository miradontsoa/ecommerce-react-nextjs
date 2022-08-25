import classNames from "classnames";
import styles from "./navtabs-a.module.scss";
import { useState } from "react";
type Props = {
    className?:string,
  activeIndex?: number;
  menuItems: {
    title: string;
    href?: string;
    onClick?: () => void;
  }[];
};
const NavtabsA = ({ className, activeIndex = 0, menuItems }: Props) => {
  const [activeId, setActiveId] = useState(activeIndex);
  return (
    <ul className={classNames(styles.navtabsA, className)}>
      {menuItems.map((item, index) => {
        return (
          <li
            className={classNames(
              styles.navItem,
              index === activeId && styles.active
            )}
            key={index}
            onClick={() => {
              setActiveId(index);
              item.onClick && item.onClick();
            }}
          >
            {item.href ? (
              <a
                className={classNames(styles.navTitle, styles.navLink)}
                aria-current="page"
                href="#"
              >
                {item.title}
              </a>
            ) : (
              <span className={styles.navTitle}>{item.title}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default NavtabsA;
