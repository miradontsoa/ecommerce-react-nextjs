import classNames from "classnames";
import SearchbarA from "components/form/searchbar-a";
import ButtonInlineA from "components/general/button/button-inline-a";
import ButtonMenuA from "components/general/button/button-menu-a";
import IconA from "components/general/icon/icon-a";
import NavbarA from "components/navigation/navbar/navbar-a";
import { useOrder } from "hooks/order";
import Link from "next/link";
import React from "react";
import { MenuItem } from "types/types";
import styles from "./header-default.module.scss";
type Props = {
  className?: string;
  scrolled?: boolean;
  isMenuVisible?: boolean;
  onMenuToggler?: (isMenuVisible: boolean) => void;
};
const HeaderDefault = ({
  className,
  scrolled,
  isMenuVisible,
  onMenuToggler,
}: Props) => {
  const { countOrderItems } = useOrder();
  const primaryMenu: MenuItem[] = [
    {
      title: "Accessories",
      href: "#accessories",
    },
    {
      title: "Collections",
      subMenuItems: [
        {
          title: "Men",
          href: "#men",
        },
        {
          title: "Women",
          href: "#women",
        },
        {
          title: "Kids",

          subMenuItems: [
            {
              title: "Girls",
              href: "#girls",
            },
            {
              title: "Boys",
              href: "#boys",
            },
          ],
        },
      ],
    },
    {
      element: <SearchbarA placeholder="Search..." />,
    },
  ];
  const secondaryMenu: MenuItem[] = [
    {
      element: (
        <a href="#account">
          <ButtonInlineA
            text="Account"
            iconPosition="right"
            iconElement={
              <IconA
                size="x-small"
                imageElement={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="52.014"
                    height="56.001"
                    viewBox="0 0 52.014 56.001"
                  >
                    <g id="person" transform="translate(-2384.4 -878.5)">
                      <g id="Group_161" data-name="Group 161">
                        <path
                          fill="currentColor"
                          id="Path_202"
                          data-name="Path 202"
                          d="M2419.99,882.573a13,13,0,0,0-22.54,10.075c.555,7.64,6.368,13.855,12.96,13.855s12.4-6.214,12.958-13.852a13.2,13.2,0,0,0-3.378-10.076Zm12.42,51.928h-44a3.876,3.876,0,0,1-3.025-1.391,4.414,4.414,0,0,1-.9-3.639,21.4,21.4,0,0,1,9.523-14.22,30.686,30.686,0,0,1,32.8,0,21.4,21.4,0,0,1,9.522,14.219,4.412,4.412,0,0,1-.9,3.638,3.877,3.877,0,0,1-3.025,1.393Z"
                        />
                      </g>
                    </g>
                  </svg>
                }
              />
            }
          />
        </a>
      ),
    },
    {
      element: (
        <Link href="/cart">
          <a>
            <ButtonInlineA
              text="Order"
              iconPosition="right"
              badgeText={`${countOrderItems() || ""}`}
              iconElement={
                <IconA
                  size="x-small"
                  imageElement={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50.182"
                      height="46.186"
                      viewBox="0 0 50.182 46.186"
                    >
                      <g id="basket" transform="translate(-428.475 -882.5)">
                        <g id="Group_154" data-name="Group 154">
                          <path
                            fill="currentColor"
                            id="Path_186"
                            data-name="Path 186"
                            d="M474.581,898.5h-8.014l-11.4-15.2a2,2,0,0,0-3.2,0l-11.4,15.2h-8.014a4.09,4.09,0,0,0-4.078,4.055,3.8,3.8,0,0,0,.164,1.125l5.784,20.393a6.355,6.355,0,0,0,6.105,4.613H466.6a6.417,6.417,0,0,0,6.125-4.607l5.791-20.42a2,2,0,0,0,.058-.295l.066-.617a1.551,1.551,0,0,0,.012-.193A4.091,4.091,0,0,0,474.581,898.5Zm-21.013-10.666,8,10.666h-16Zm0,30.625a4.019,4.019,0,1,0,0-.005Z"
                          />
                        </g>
                      </g>
                    </svg>
                  }
                />
              }
            />
          </a>
        </Link>
      ),
    },
  ];
  return (
    <>
      <NavbarA
        className={classNames(styles.navbarTop, className)}
        logoElement={<img src="/img/logo-b-dark.svg" alt="Logo or Brand" />}
        leftNavMenu={primaryMenu}
        rightNavMenu={secondaryMenu}
        menuButtonIcon={<ButtonMenuA isOpen={isMenuVisible} />}
        isMenuVisible={isMenuVisible}
        onMenuToggler={onMenuToggler}
        // onMenuToggler={setIsMenuVisible}
      />
    </>
  );
};
export default HeaderDefault;
