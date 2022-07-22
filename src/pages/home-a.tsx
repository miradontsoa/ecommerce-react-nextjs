import SearchbarA from "@components/form/searchbar-a";
import ButtonInlineA from "@components/general/button/button-inline-a";
import ButtonMenuA from "@components/general/button/button-menu-a";
import ButtonSolidA from "@components/general/button/button-solid-a";
import IconD from "@components/general/icon/icon-d";
import ImageA from "@components/layout/images/image-a";
import NavbarA from "@components/navigation/navbar/navbar-a";
import HeroA from "@components/sections/hero-a";
import SectionA from "@components/sections/section-a";
import { MenuItem } from "@typescript/types";
import classNames from "classnames";
import { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import styles from "./home-a.module.scss";

const HomeA: NextPage = () => {
  const [active, setActive] = useState("About");
  const [subscriptionEmail, setSubscriptionEmail] = useState("");
  const primaryMenu: MenuItem[] = [
    {
      title: "Accessories",
      href: "#accessories",
    },
    {
      title: "Collections",
      href: "#collections",
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
              <IconD
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
        <a href="#order">
          <ButtonInlineA
            text="Order"
            iconPosition="right"
            iconElement={
              <IconD
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
      ),
    },
  ];

  const [isMenuVisible, setIsMenuVisible] = useState(true);

  // On scroll behaviors
  const [pageScrolled, setPageScrolled] = useState(false);
  React.useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 80) {
        setPageScrolled(true);
      } else {
        setPageScrolled(false);
      }
    };
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className={classNames(styles.homeA, pageScrolled && styles.scrolled)}>
      <Head>
        <title>Home A</title>
        <meta name="description" content="Home A - Cutekit Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarA
        className={styles.navbarTop}
        logoElement={<img src="/img/logo-b-dark.svg" alt="Logo or Brand" />}
        leftNavMenu={primaryMenu}
        rightNavMenu={secondaryMenu}
        menuButtonIcon={<ButtonMenuA isOpen={isMenuVisible} />}
        isMenuVisible={isMenuVisible}
        onMenuToggler={setIsMenuVisible}
      />

      <main>
        {/* Hero */}
        <HeroA
          contentElement={
            <div className="row">
              <div className="col-6">
                <h4>The best since 1980</h4>
                <h2 className={classNames("title-2", "mb-4")}>Clothing</h2>
                <div className="btn-group">
                  <a href="#">
                    <ButtonSolidA size="large">Explore collection</ButtonSolidA>
                  </a>
                </div>
              </div>
            </div>
          }
          imageSrc={"/img/img-1-landscape.jpg"}
        />
        {/* End of Hero */}

        {/* Expore section */}
        <SectionA
          contentElement={
            <div className="row">
              <div className="col-12 col-lg-6">
                <h3 className={classNames("title-3")}>Explore our selection</h3>
                <div className={classNames("text-medium")}>
                  <p className="">
                    This is a sample text describing something awesome. Just
                    replace it by your cool text or something else and it will
                    be displayed here.
                  </p>
                </div>
              </div>
            </div>
          }
        />
        {/* End of expore section */}
      </main>
    </div>
  );
};

export default HomeA;
