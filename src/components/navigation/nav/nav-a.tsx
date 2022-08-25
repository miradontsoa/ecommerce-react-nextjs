import { MenuItem } from "@typescript/types";
import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import styles from "./nav-a.module.scss";
type Props = {
  className?: string;
  menuItems?: MenuItem[];
  openSubMenuOnHover?: boolean;
};
type MenuItemProps = {
  menuItem: MenuItem;
  openSubMenuOnHover?: boolean;
};
const MenuItem = ({ menuItem, openSubMenuOnHover = false }: MenuItemProps) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  // let ref = useRef();
  let ref = useRef<HTMLLIElement>(null);

  // Action when click outside the dropdown menu
  useEffect(() => {
    const handler = (event: Event) => {
      if (
        showSubMenu &&
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        // Hide menu if clicked element does not contain the menu
        setShowSubMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [showSubMenu]);
  const onMouseEnter = () => {
    openSubMenuOnHover && window.innerWidth > 992 && setShowSubMenu(true);
  };
  const onMouseLeave = () => {
    openSubMenuOnHover && window.innerWidth > 992 && setShowSubMenu(false);
  };

  return (
    <li
      className={classNames(
        styles.menuItem,
        menuItem.subMenuItems && styles.hasChild
      )}
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {!menuItem.subMenuItems && (
        <>
          {menuItem.element && <>{menuItem.element}</>}
          {menuItem.title && (
            <a className={styles.navLink} href={`${menuItem.href}`}>
              {menuItem.title}
            </a>
          )}
        </>
      )}

      {menuItem.subMenuItems && (
        <>
          <button
            className={classNames(styles.subMenuBtn, styles.navLink)}
            aria-expanded={showSubMenu ? "true" : "false"}
            onClick={() => {
              setShowSubMenu(!showSubMenu);
            }}
          >
            {menuItem.title}
            <div className={styles.arrowIcon}>
              <div className={styles.arrowIconDown}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  fill="currentColor"
                >
                  <g
                    id="caret-down-circle"
                    transform="translate(-2645.31 -1536.5)"
                  >
                    <g id="Group_288" data-name="Group 288">
                      <path
                        id="Path_365"
                        data-name="Path 365"
                        d="M2697.31,1562.5a26,26,0,1,0-26,26,26,26,0,0,0,26-26Zm-15.2-2.221-9.266,11.136a2,2,0,0,1-3.075,0l-9.266-11.136a2,2,0,0,1,1.536-3.279h18.535a2,2,0,0,1,1.536,3.279Z"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div className={styles.arrowIconRight}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  fill="currentColor"
                >
                  <g
                    id="caret-forward-circle"
                    transform="translate(-297.241 -1700.5)"
                  >
                    <g id="Group_295" data-name="Group 295">
                      <path
                        id="Path_372"
                        data-name="Path 372"
                        d="M349.241,1726.5a26,26,0,1,0-26,26A26,26,0,0,0,349.241,1726.5Zm-31.5,9.267v-18.534a2,2,0,0,1,3.278-1.537l11.137,9.267a2,2,0,0,1,0,3.074l-11.137,9.267a2,2,0,0,1-3.278-1.537Z"
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </button>
          <ul
            className={classNames(
              styles.subMenu,
              showSubMenu && styles.showSubMenu
            )}
          >
            {menuItem.subMenuItems.map((subMenuItem, index) => {
              return <MenuItem menuItem={subMenuItem} key={index} />;
            })}
          </ul>
        </>
      )}
    </li>
  );
};
const NavA = ({ className, menuItems, openSubMenuOnHover = false }: Props) => {
  return (
    <ul className={classNames(className, styles.navA)}>
      {menuItems &&
        menuItems.map((menuItem, index) => {
          return (
            <MenuItem
              menuItem={menuItem}
              key={index}
              openSubMenuOnHover={openSubMenuOnHover}
            />
          );
        })}
    </ul>
  );
};
export default NavA;
