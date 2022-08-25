import { MenuItem } from "@typescript/types";
import classNames from "classnames";
import styles from "./nav-social-a.module.scss";
type Props = {
  className?: string;
  menuItems?: MenuItem[];
};
const NavSocialA = ({ className, menuItems }: Props) => {
  return (
    <>
      {menuItems && (
        <ul className={classNames(styles.navSocialA, className)}>
          {menuItems.map((menuItem, index) => {
            return (
              <li key={index} className={styles.navItem}>
                <a
                  href={menuItem.href}
                  title={menuItem.title}
                  className={styles.navLink}
                >
                  {menuItem.element ? menuItem.element : menuItem.title}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default NavSocialA;
