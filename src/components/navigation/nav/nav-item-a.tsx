import { MenuItem } from "types/types";
import classNames from "classnames";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./nav-item-a.module.scss";
import NavLink from "./nav-link";
import { useRouter } from "next/router";

type Props = {
  menuItem: MenuItem;
  itemClassName?: string;
  linkClassName?: string;
  activeClassName?: string;
  subMenuClassName?: string;
  subMenuButtonClassName?: string;
  iconOpenElement?: React.ReactElement;
  iconCloseElement?: React.ReactElement;
  showSubMenu?: boolean;
  parentActivePathUri?: string;
  onActivePathUri?: (uri: string) => void;
  onSecondaryMenuItems?: (menuItems: MenuItem[]) => void;
};

const NavItemA = ({
  menuItem,
  itemClassName,
  activeClassName,
  linkClassName,
  subMenuClassName,
  subMenuButtonClassName,
  iconCloseElement,
  iconOpenElement,
  showSubMenu = false,
  parentActivePathUri = "",
  onActivePathUri,
  onSecondaryMenuItems,
}: Props) => {
  const [_showSubMenu, setShowSubMenu] = useState(showSubMenu);
  const [_menuItem, setMenuItem] = useState(menuItem);
  const currentPathUri = `${parentActivePathUri}/${_menuItem.slug}`;

  // let ref = useRef();
  let ref = React.useRef<HTMLDivElement>(null);

  const onToggle = (event: MouseEvent) => {
    if (_showSubMenu) {
      setShowSubMenu(false);
      onActivePathUri && onActivePathUri(`${parentActivePathUri}`);
      //   setMenuItem({..._menuItem, active: false})
    } else {
      onActivePathUri && onActivePathUri(`${currentPathUri}`);
      //   setMenuItem({..._menuItem, active: true})
    }
    //   setActivePath({ ...activePath, child: undefined });
  };

  const router = useRouter();
  useEffect(() => {
    // onSecondaryMenuItems && onSecondaryMenuItems(menuItem.secondaryMenuItems || []);
    if (
      router.pathname === currentPathUri &&
      !menuItem.subMenuItems &&
      menuItem.secondaryMenuItems
    ) {
    //   console.log(menuItem.secondaryMenuItems);
      onSecondaryMenuItems && onSecondaryMenuItems(menuItem.secondaryMenuItems);
    }
  }, [menuItem]);

  return (
    <div
      className={classNames(
        itemClassName,
        styles.navItem,
        _menuItem.active && styles.active,
        _menuItem.active && activeClassName,
        _menuItem.subMenuItems && styles.hasChild
      )}
      ref={ref}
      //   onMouseEnter={onMouseEnter}
      //   onMouseLeave={onMouseLeave}
      onClick={(e) => {
        e.stopPropagation();
        onToggle(e as any);
        onSecondaryMenuItems &&
          onSecondaryMenuItems(_menuItem.secondaryMenuItems || []);
      }}
    >
      {!_menuItem.subMenuItems && (
        <>
          {_menuItem.element && <>{_menuItem.element}</>}
          {_menuItem.title && (
            <NavLink href={_menuItem?.href || currentPathUri || "."}>
              <a className={classNames(linkClassName, styles.navLink)}>
                {_menuItem.title}
              </a>
            </NavLink>
          )}
        </>
      )}

      {_menuItem.subMenuItems && (
        <>
          <button
            className={classNames(
              linkClassName,
              subMenuButtonClassName,
              styles.subMenuBtn,
              styles.navLink,
              _showSubMenu && styles.showSubMenu
            )}
            aria-expanded={_showSubMenu ? "true" : "false"}
            onClick={() => {
              setShowSubMenu(!_showSubMenu);
            }}
          >
            {_menuItem.title}
            {_menuItem?.subMenuItems && (
              <div className={styles.arrowIcon}>
                <div className={styles.arrowIconOpen}>
                  {iconOpenElement || (
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
                  )}
                </div>
                <div className={styles.arrowIconClose}>
                  {iconCloseElement || (
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
                  )}
                </div>
              </div>
            )}
          </button>
          <div
            className={classNames(
              subMenuClassName,
              styles.subMenu,
              _showSubMenu && styles.show
            )}
          >
            {_menuItem?.subMenuItems.map((subMenuItem, index) => {
              return (
                <NavItemA
                  menuItem={subMenuItem}
                  key={index}
                  itemClassName={itemClassName}
                  activeClassName={activeClassName}
                  linkClassName={linkClassName}
                  subMenuClassName={subMenuClassName}
                  subMenuButtonClassName={subMenuButtonClassName}
                  iconOpenElement={iconOpenElement}
                  iconCloseElement={iconCloseElement}
                  onActivePathUri={onActivePathUri}
                  parentActivePathUri={`${currentPathUri}`}
                  showSubMenu={subMenuItem.active}
                  onSecondaryMenuItems={onSecondaryMenuItems}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default NavItemA;
