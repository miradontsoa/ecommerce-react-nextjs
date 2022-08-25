import SearchbarA from "@components/form/searchbar-a";
import ButtonInlineA from "@components/general/button/button-inline-a";
import ButtonMenuA from "@components/general/button/button-menu-a";
import ButtonSolidA from "@components/general/button/button-solid-a";
import IconE from "@components/general/icon/icon-e";
import IconA from "@components/general/icon/icon-a";
import NavbarA from "@components/navigation/navbar/navbar-a";
import NavtabsA from "@components/navigation/navtabs/navtabs-a";
import HeroA from "@components/sections/hero-a";
import SectionA from "@components/sections/section-a";
import { MenuItem } from "@typescript/types";
import classNames from "classnames";
import { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import styles from "./home-a.module.scss";
import IconC from "@components/general/icon/icon-c";
import Link from "next/link";
import CardProductA from "@components/general/card/card-product-a";
import ImageA from "@components/layout/images/image-a";
import CardProductB from "@components/general/card/card-product-b";
import CardCategoryA from "@components/general/card/card-category-a";
import CardCategoryB from "@components/general/card/card-category-b";
import ImageB from "@components/layout/images/image-b";
import FooterB from "@components/footer/footer-b";
import FooterA from "@components/footer/footer-a";

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
        <a href="#order">
          <ButtonInlineA
            text="Order"
            iconPosition="right"
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
      ),
    },
  ];

  const footerMenu: MenuItem[] = [
    {
      title: "Contact",
    },
    {
      title: "Support",
    },
  ];
  const socialMenu: MenuItem[] = [
    {
      title: "Facebook",
      href: "facebook.com/ourpage",
      element: (
        <IconA
          imageElement={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56.002"
              height="55.656"
              viewBox="0 0 56.002 55.656"
            >
              <g id="logo-facebook" transform="translate(-295.239 -1077.675)">
                <g id="Group_132" data-name="Group 132">
                  <path
                    id="Path_208"
                    data-name="Path 208"
                    d="M351.241,1105.67a28,28,0,1,0-32.375,27.661v-19.565h-7.112v-8.1h7.112V1099.5c0-7.016,4.181-10.9,10.576-10.9a43.1,43.1,0,0,1,6.269.547v6.892h-3.533c-3.476,0-4.564,2.157-4.564,4.375v5.25h7.765l-1.24,8.1h-6.523v19.567a28.008,28.008,0,0,0,23.625-27.663Z"
                    fill-rule="evenodd"
                  />
                </g>
              </g>
            </svg>
          }
        />
      ),
    },
    {
      title: "Twitter",
      href: "twitter.com.ourpage",
      element: (
        <IconA
          imageElement={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60.002"
              height="48.001"
              viewBox="0 0 60.002 48.001"
            >
              <g id="logo-twitter" transform="translate(-162.79 -1409.501)">
                <g id="Group_183" data-name="Group 183">
                  <path
                    id="Path_276"
                    data-name="Path 276"
                    d="M222.792,1415.19a25.25,25.25,0,0,1-7.069,1.912,12.192,12.192,0,0,0,5.416-6.7,24.718,24.718,0,0,1-7.82,2.938,12.4,12.4,0,0,0-8.988-3.838,12.209,12.209,0,0,0-12.308,12.112,11.629,11.629,0,0,0,.318,2.763,35.1,35.1,0,0,1-25.375-12.663,11.959,11.959,0,0,0-1.674,6.088,12.081,12.081,0,0,0,5.5,10.087,12.184,12.184,0,0,1-5.6-1.512v.15a12.171,12.171,0,0,0,9.875,11.875,12.579,12.579,0,0,1-3.242.425,11.838,11.838,0,0,1-2.314-.225,12.3,12.3,0,0,0,11.506,8.412,24.952,24.952,0,0,1-15.29,5.188,25.5,25.5,0,0,1-2.937-.175,34.841,34.841,0,0,0,18.842,5.475c22.67,0,35.055-18.463,35.055-34.475,0-.525-.013-1.05-.038-1.563a24.782,24.782,0,0,0,6.141-6.275Z"
                  />
                </g>
              </g>
            </svg>
          }
        />
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

        {/* Explore products section */}
        <SectionA
          contentElement={
            <>
              <div className={styles.sectionTitle}>
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <h3 className={classNames("title-3")}>
                      Explore our selection
                    </h3>
                    <div className={classNames("text-medium")}>
                      <p className="">
                        This is a sample text describing something awesome. Just
                        replace it by your cool text or something else and it
                        will be displayed here.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.sectionContent}>
                {/* navigation */}
                <div className="row mt-5">
                  <div className="col">
                    <NavtabsA
                      className={styles.textLarge}
                      menuItems={[
                        {
                          title: "New Arrivals",
                        },
                        {
                          title: "Best Sellers",
                        },
                      ]}
                    />
                  </div>
                  <div className="col-auto">
                    <div className="btns">
                      <a href="#">
                        <ButtonInlineA
                          text="View all products"
                          iconPosition="right"
                          iconElement={
                            <IconC
                              size="x-small"
                              imageElement={
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="45"
                                  height="44.485"
                                  viewBox="0 0 45 44.485"
                                >
                                  <g
                                    id="arrow-forward"
                                    transform="translate(-431.189 -392.257)"
                                  >
                                    <g id="Group_67" data-name="Group 67">
                                      <path
                                        id="Path_85"
                                        data-name="Path 85"
                                        d="M455.189,396.5l18,18-18,18m15.5-18h-36.5"
                                        fill="none"
                                        stroke="#000"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="6"
                                      />
                                    </g>
                                  </g>
                                </svg>
                              }
                            />
                          }
                        />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Grid of products */}
                <div className="row mt-5 row-cols-md-3 gx-5">
                  <div className="col">
                    <Link href={"#"}>
                      <a>
                        <CardProductA
                          title="Running Basket"
                          price="$150"
                          tags={[
                            {
                              title: "Shoes",
                            },
                            {
                              title: "Leather",
                            },
                          ]}
                          imageElement={
                            <ImageA
                              src="/img/img-2-square.jpg"
                              scaleOnHover={true}
                            />
                          }
                        />
                      </a>
                    </Link>
                  </div>

                  <div className="col">
                    <Link href={"#"}>
                      <a>
                        <CardProductA
                          title="Coolverse"
                          price="$150"
                          rating={4.7}
                          ratingElement={
                            <span className="text-muted-1">4 Reviews</span>
                          }
                          aspect="3-lines"
                          like={false}
                          colors={[
                            {
                              rgb: "#d2d2d2",
                            },
                            {
                              rgb: "#222234",
                            },
                            {
                              rgb: "#c4af86",
                            },
                          ]}
                          tags={[
                            {
                              title: "Shoes",
                            },
                            {
                              title: "Leather",
                            },
                          ]}
                          quantityElement={<span>In stock</span>}
                          imageElement={
                            <ImageA
                              src="/img/img-4-square.jpg"
                              scaleOnHover={true}
                            />
                          }
                        />
                      </a>
                    </Link>
                  </div>

                  <div className="col">
                    <Link href={"#"}>
                      <a>
                        <CardProductA
                          title="Liore Basket"
                          price="$150"
                          rating={4.7}
                          ratingElement={
                            <span className="text-muted-1">4 Reviews</span>
                          }
                          aspect="4-lines"
                          like={false}
                          colors={[
                            {
                              rgb: "#d2d2d2",
                            },
                            {
                              rgb: "#222234",
                            },
                          ]}
                          tags={[
                            {
                              title: "Shoes",
                            },
                            {
                              title: "Leather",
                            },
                          ]}
                          quantityElement={<span>In stock</span>}
                          imageElement={
                            <ImageA
                              src="/img/img-3-square.jpg"
                              scaleOnHover={true}
                            />
                          }
                        />
                      </a>
                    </Link>
                  </div>
                </div>

                {/* Grid of products */}
                <div className="row mt-5 row-cols-lg-2 gx-5">
                  <div className="col">
                    <Link href={"#"}>
                      <a>
                        <CardProductB
                          titleElement={
                            <h4 className="mb-0">Versonic Basket</h4>
                          }
                          description="The best cloth made by famous brand for every person"
                          price="$150"
                          colors={[
                            {
                              rgb: "rgb(77 130 148)",
                            },
                            {
                              rgb: "rgb(239 184 56)",
                            },
                          ]}
                          tags={[
                            {
                              title: "Shoes",
                            },
                            {
                              title: "Leather",
                            },
                          ]}
                          imageElement={
                            <ImageA
                              src="/img/img-6-square.jpg"
                              scaleOnHover={true}
                            />
                          }
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="col">
                    <Link href={"#"}>
                      <a>
                        <CardProductB
                          titleElement={<h4 className="mb-0">Blank T-shirt</h4>}
                          description="The best cloth made by famous brand for every person"
                          price="$150"
                          colors={[
                            {
                              rgb: "#ffffff",
                            },
                            {
                              rgb: "#222234",
                            },
                          ]}
                          tags={[
                            {
                              title: "Shoes",
                            },
                            {
                              title: "Leather",
                            },
                          ]}
                          imageElement={
                            <ImageA
                              src="/img/img-5-square.jpg"
                              scaleOnHover={true}
                            />
                          }
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          }
        />
        {/* End of explore procucts section */}

        {/* Categories selection section */}
        <SectionA
          contentElement={
            <>
              <div className={styles.sectionTitle}>
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <h3 className={classNames("title-3")}>Categories</h3>
                  </div>
                </div>
              </div>

              <div className={styles.sectionContent}>
                <div className="row row-cols-md-2 row-cols-lg-4 g-5">
                  <div className="col">
                    <Link href={"#"}>
                      <a>
                        <CardCategoryA
                          textAlign="center"
                          imageElement={
                            <ImageA
                              src="/img/img-5-square.jpg"
                              scaleOnHover={true}
                            />
                          }
                          title="Clothing"
                          viewText="Discover"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="col">
                    <Link href={"#"}>
                      <a>
                        <CardCategoryB
                          backgroundColor="#fee900"
                          className="text-white text-shadow"
                          textAlign="left"
                          verticalAlign="bottom"
                          imageElement={
                            <ImageA
                              src="/img/img-8-square.jpg"
                              scaleOnHover={true}
                            />
                          }
                          title="Fruits"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="col">
                    <Link href={"#"}>
                      <a>
                        <CardCategoryB
                          backgroundColor="#feaae9"
                          className="text-white text-shadow"
                          textAlign="center"
                          verticalAlign="bottom"
                          title="Furnitures"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="col">
                    <Link href={"#"}>
                      <a>
                        <CardCategoryB
                          backgroundColor="#aafe99"
                          className="text-white text-shadow"
                          textAlign="left"
                          verticalAlign="bottom"
                          title="Foods and Drinks"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          }
        />
        {/* End of categories selection section */}

        {/* Feature section */}
        <SectionA
          contentElement={
            <div className="row align-items-center g-5">
              <div className="col-12 col-lg-6">
                <ImageB
                  image1Src="/img/img-1-square.jpg"
                  image2Src="/img/img-2-landscape.jpg"
                />
              </div>
              <div className="col-12 col-lg-4">
                <h3 className={classNames("title-3")}>
                  Autumn dress collection
                </h3>
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
        {/* End of Feature section */}
      </main>

      <FooterA footerMenu={footerMenu} socialMenu={socialMenu} />
    </div>
  );
};

export default HomeA;
