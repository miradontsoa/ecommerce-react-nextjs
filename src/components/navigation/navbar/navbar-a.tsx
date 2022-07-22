import ButtonSolidA from "@components/general/button/button-solid-a";
import Link from "next/link";
import React from "react";
import classNames from "classnames";
import styles from "./navbar-a.module.scss";
import { MenuItem } from "@typescript/types";
import NavA from "../nav/nav-a";

type Props = {
  className?: string;
  containerWidth?: "full" | "content" | "navbar-max-width";
  logoElement?: React.ReactElement;
  logoText?: string;
  logoTextSubtitle?: string;
  logoHref?: string;
  menuButtonIcon?: React.ReactElement;
  leftNavElement?: React.ReactElement;
  leftNavMenu?: MenuItem[];
  rightNavMenu?: MenuItem[];
  rightNavElement?: React.ReactElement;
  isMenuVisible?: boolean;
  onMenuToggler?: (isMenuVsible: boolean) => void;
};
/**
 * Navigation Bar at top
 */
const NavbarA = ({
  className,
  containerWidth = "content",
  logoElement,
  logoText,
  logoTextSubtitle,
  logoHref = "#",
  menuButtonIcon,
  leftNavMenu,
  rightNavMenu,
  isMenuVisible = false,
  onMenuToggler,
}: Props): React.ReactElement => {
  let _containerWidth = styles.content;
  switch (containerWidth) {
    case "full":
      _containerWidth = styles.full;
      break;
    case "content":
      _containerWidth = styles.content;
      break;
  }

  const [_isMenuVisible, setIsMenuVisible] = React.useState(isMenuVisible);
  const toggleMenu = () => {
    setIsMenuVisible(!_isMenuVisible);
    onMenuToggler && onMenuToggler(!_isMenuVisible);
  };

  return (
    <>
      <header className={classNames(className, styles.navbarA)}>
        <nav className={classNames(styles.navContainer, _containerWidth)}>
          {logoElement && (
            <a className={classNames(styles.logo)} href={logoHref}>
              <span className={styles.logoImage}>{logoElement}</span>
              {logoText && (
                <span className={styles.logoText}>
                  <span className={styles.title}>{logoText}</span>
                  {logoTextSubtitle && (
                    <span className={styles.subTitle}>{logoTextSubtitle}</span>
                  )}
                </span>
              )}
            </a>
          )}
          

          <div className={`${styles.navbarCollapse} ${styles.collapse}`}>
            {_isMenuVisible && (
              <>
                {leftNavMenu && (
                  <div className={classNames(styles.leftNavElt)}>
                    <NavA menuItems={leftNavMenu}/>
                  </div>
                )}
                {rightNavMenu && (
                  <div className={classNames(styles.rightNavElt)}>
                    <NavA menuItems={rightNavMenu}/>
                  </div>
                )}
              </>
            )}
          </div>

          {menuButtonIcon && (
            <button
              className={classNames(
                styles.menuButton
              )}
              type="button"
              onClick={toggleMenu}
            >
              {menuButtonIcon}
            </button>
          )}
        </nav>
      </header>
    </>
  );
};
export default NavbarA;
