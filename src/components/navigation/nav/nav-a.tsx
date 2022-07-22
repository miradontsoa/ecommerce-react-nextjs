import { MenuItem } from "@typescript/types";
import classNames from "classnames";
import styles from "./nav-a.module.scss";
type Props = {
  className?: string;
  menuItems?: MenuItem[];
};
type MenuItemProps = {
  menuItem: MenuItem;
};
const MenuItem = ({ menuItem }: MenuItemProps) => {
  return (
    <li className="menu-items">
      {menuItem.title && <a href={menuItem.href}>{menuItem.title}</a>}
      {menuItem.element && <>{menuItem.element}</>}
      {menuItem.subMenuItems && (
        <ul>
        {menuItem.subMenuItems.map((subMenuItem, index) => {
          return (
            <MenuItem menuItem={subMenuItem} key={index}/>
          );
        })}
      </ul>
      )}
    </li>
  );
};
const NavA = ({ className, menuItems }: Props) => {
  return (
    <ul className={classNames(className, styles.navA)}>
      {menuItems &&
        menuItems.map((menuItem, index) => {
          return <MenuItem menuItem={menuItem} key={index}/>
          /* return (
            <li key={menuItem.title}>
              {menuItem.title && <a href={menuItem.href}>{menuItem.title}</a>}
              {menuItem.element && <>{menuItem.element}</>}
              {menuItem.subMenuItems && (
                <ul>
                  {menuItem.subMenuItems.map((subMenuItem) => {
                    return (
                      <li key={subMenuItem.title}>
                        {subMenuItem.title && (
                          <a href={subMenuItem.href}>{subMenuItem.title}</a>
                        )}
                        {subMenuItem.element && <>{subMenuItem.element}</>}
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          ); */
        })}
    </ul>
  );
};
export default NavA;
