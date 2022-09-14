import { MenuItem } from "types/types";
import classNames from "classnames";
import Link from "next/link";
import NavItemA from "../nav/nav-item-a";
import styles from "./sidebar-nav-a.module.scss";
import IconA from "components/general/icon/icon-a";

type Props = {
  expanded?: boolean;
  className?: string;
  title?: string;
  titleIconElement?: React.ReactElement;
  menuItems?: MenuItem[];
  parentPath?: string;
  openedActivePath?: string;
  onOpenedPath?: (path?: string) => void;
  onSecondaryMenuItems?: (menuItems: MenuItem[]) => void;
  // onActivePath: (path: String) => void;
};

/**
 * Sidebar
 * use openedActivePath (URI styled) or openedMenu
 * @param param0
 * @returns
 */
const SidebarNavA = ({
  className,
  title,
  titleIconElement,
  menuItems,
  expanded = true,
  parentPath,
  openedActivePath = "",
  onOpenedPath,
  onSecondaryMenuItems,
}: Props) => {

  // Open and activate menu branch from provided openedActivePath
  // remove first / from base path
  let parsedPath = openedActivePath.split("/");
  parsedPath = parsedPath.filter((slug) => {
    return slug != "";
  });
  const activateSubMenuItems = (items?: MenuItem[], deep = 0) => {
    items?.forEach((menuItem) => {
      if (menuItem.slug === parsedPath[deep]) {
        menuItem.active = true;
      } else {
        menuItem.active = false;
      }
      if (menuItem.subMenuItems) {
        menuItem.subMenuItems = activateSubMenuItems(
          menuItem.subMenuItems,
          deep + 1
        );
      }
    });
    return items;
  };
  activateSubMenuItems(menuItems);

  const onActivePathUri = (uri: string) => {
    onOpenedPath && onOpenedPath(uri);
  };

  return (
    <div
      className={classNames(
        "sidebar-menu-a",
        className,
        styles.sidebar,
        expanded && styles.expanded
      )}
    >
      {/* <>
        {menuItems?.map((item) => {
          return <div key={item.title}>{item.title}</div>;
        })}
      </> */}
      {title && (
        <div className={classNames(styles.header)}>
          <Link href="#">
            <a className={classNames(styles.link, styles.hTitle)}>
              <span className={classNames(styles.title)}>
                <span className="line strong">{title}</span>
              </span>
              {titleIconElement && (
                <span className={styles.icon}>{titleIconElement}</span>
              )}
            </a>
          </Link>
        </div>
      )}

      <div className={styles.body}>
        <div className={styles.navGroup}>
          <div className={classNames(styles.nav, "nav")}>
            {menuItems?.map((menuItem) => {
              return (
                <NavItemA
                  key={menuItem.slug}
                  itemClassName={classNames(
                    styles.navItem,
                    // menuItem.active && styles.active,
                    "nav-item"
                  )}
                  linkClassName={classNames(styles.navLink, "nav-link")}
                  activeClassName={classNames(styles.active)}
                  subMenuClassName={classNames(styles.subMenu)}
                  subMenuButtonClassName={classNames(styles.subMenuBtn)}
                  menuItem={menuItem}
                  showSubMenu={menuItem.active}
                  parentActivePathUri={parentPath}
                  onActivePathUri={onActivePathUri}
                  onSecondaryMenuItems={onSecondaryMenuItems}
                  iconOpenElement={
                    <IconA
                      size="x-small"
                      imageElement={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="11.25"
                          height="12"
                          viewBox="0 0 11.25 12"
                        >
                          <path
                            id="Polygon_1"
                            data-name="Polygon 1"
                            d="M6,0l6,11.25H0Z"
                            transform="translate(11.25) rotate(90)"
                            fill="currentColor"
                          />
                        </svg>
                      }
                    />
                  }
                  iconCloseElement={
                    <IconA
                      size="x-small"
                      imageElement={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="4"
                          viewBox="0 0 40 4"
                        >
                          <g
                            id="remove"
                            transform="translate(-2781.76 -1724.5)"
                          >
                            <g id="Group_324" data-name="Group 324">
                              <path
                                id="Path_404"
                                data-name="Path 404"
                                d="M2819.76,1728.5h-36a2,2,0,0,1,0-4h36a2,2,0,0,1,0,4Z"
                                fill="currentColor"
                              />
                            </g>
                          </g>
                        </svg>
                      }
                    />
                  }
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="footer">

        <ul className="nav">
          <li className="nav-item">
            <a
              className="nav-link-off btn btn-solid-b btn-primary"
              href="https://buy.paddle.com/product/644914"
            >
              <span className="icon">
                <i className="ion ion-ios-cart"></i>
              </span>
              <span className="text">Buy it now</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default SidebarNavA;
