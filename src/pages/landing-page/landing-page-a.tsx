import React from "react";
import { useState } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import classNames from "classnames";
import styles from "./landing-page-a.module.scss";

import { MenuItem } from "@typescript/types";
import NavbarA from "@components/navigation/navbar/navbar-a";
import ButtonSolidA from "@components/general/button/button-solid-a";
import ButtonMenuA from "@components/general/button/button-menu-a";
import HeroA from "@components/sections/hero-a";
import ImageA from "@components/layout/images/image-a";
import SectionA from "@components/sections/section-a";
import ImageB from "@components/layout/images/image-b";
import FeatureA from "@components/layout/features/feature-a";
import IconA from "@components/general/icon/icon-a";
import FeatureB from "@components/layout/features/feature-b";
import IconB from "@components/general/icon/icon-b";
import PricingA from "@components/layout/pricings/pricing-a";
import ReviewA from "@components/layout/reviews/review-a";
import NewsletterFormA from "@components/form/newsletter-form-a";
import CardA from "@components/general/card/card-a";
import SignupFormA from "@components/form/signup-form-a";
import FooterA from "@components/footer/footer-a";

const LandingPageA: NextPage = () => {
  const [active, setActive] = useState("About");
  const [subscriptionEmail, setSubscriptionEmail] = useState("");
  const primaryMenu: MenuItem[] = [
    {
      title: "About",
      href: "#about",
      active: active === "About",
      onClick: () => {
        setActive("About");
      },
    },
    {
      title: "Features",
      href: "#features",
      active: active === "Features",
      onClick: () => {
        setActive("Features");
      },
    },
    {
      title: "Pricing",
      href: "#pricing",
      active: active === "Pricing",
      onClick: () => {
        setActive("Pricing");
      },
    },
  ];
  const callToActionMenu: MenuItem[] = [
    {
      title: "Try it now",
      href: "#download",
      color: "primary",
      size: "medium",
    },
  ];

  /*  const callToActionElements = [
    <Link href="#download">
      <ButtonSolidA text="Try for Free" size="medium" />
    </Link>,
  ]; */
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  // On scroll behaviors
  const [pageScrolled, setPageScrolled] = useState(false);
  React.useEffect(() => {
    const onScroll = () => {
        if (window.scrollY > 80) {
          setPageScrolled(true);
        } else {
          setPageScrolled(false)
        }
    };
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <div className={classNames(styles.landingPageA, pageScrolled && styles.scrolled)}>
      <Head>
        <title>Landing page A</title>
        <meta name="description" content="Landing page A - Cutekit Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarA
        className={styles.navbarTop}
        callToActionMenu={callToActionMenu}
        logo={
          <img
            className="light-logo"
            src="/img/logo-a-dark.svg"
            alt="Logo or Brand"
          />
        }
        logoPosition={"start"}
        logoText={"Softapp"}
        logoTextSubtitle={"A simple app"}
        primaryMenu={primaryMenu}
        primaryMenuPosition={"end"}
        menuButtonIcon={<ButtonMenuA isOpen={isMenuVisible} />}
        menuButtonPosition={"end"}
        menuButtonVisibility={"small"}
        isMenuVisible={isMenuVisible}
        onMenuToggler={setIsMenuVisible}
        // callToActionElements={callToActionElements}
      />

      <main>
        {/* Hero */}
        <HeroA
          contentElement={
            <div className="text-center">
              <h2 className={classNames(styles.title1, "mb-4")}>
                Build simple <br />
                Better thing
              </h2>
              <div className={classNames(styles.textXLarge)}>
                <p>Attract user attention with this description.</p>
              </div>
            </div>
          }
          imageElement={
            <ImageA shape="rounded-medium" src="/img/img-1-landscape.jpg" />
          }
        />
        {/* End of Hero */}

        {/* Main description section */}
        <SectionA
          marginTop={"medium"}
          contentElement={
            <div className="row">
              <div className="col-12 col-lg-8">
                <h3 className={classNames(styles.title2, "mb-4")}>
                  Main description
                </h3>
                <div className={classNames(styles.textXLarge)}>
                  <p className="">
                    Place here a description of the product. Ensure that it will
                    attract user attentions and retain them for some times.
                  </p>
                </div>
              </div>
            </div>
          }
        />
        {/* End of Main description section */}

        {/* Feature 1 section */}
        <SectionA
          marginBottom="none"
          marginTop="none"
          contentElement={
            <div className="row align-items-center gx-5 justify-content-between">
              <div className="col-12 col-md-6 order-md-1">
                <div className="pb-5 pb-md-0">
                  <h5
                    className={classNames(styles.textXLarge, "fw-bold", "mb-0")}
                  >
                    Feature
                  </h5>
                  <h3 className={classNames(styles.title2, "mb-4")}>
                    Easy to <span className="text-primary">install</span>
                  </h3>
                  <div className={classNames(styles.textLarge, "mb-4")}>
                    <p>
                      Place here a description of the product. Ensure that it
                      will attract user attentions and retaint them for some
                      times.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-5 order-md-2">
                <ImageB
                  src="/img/img-1-portrait.jpg"
                  rounded="medium"
                  scaleOnHover={true}
                />
              </div>
            </div>
          }
        />
        {/* End of Feature 1 section */}

        {/* Feature 2 section */}
        <SectionA
          marginTop="medium"
          marginBottom="none"
          contentElement={
            <div className="row align-items-center gx-5 justify-content-between">
              <div className="col-12 col-md-6 order-md-2">
                <div className="pb-5 pb-md-0">
                  <h5
                    className={classNames(styles.textXLarge, "fw-bold", "mb-0")}
                  >
                    Feature
                  </h5>
                  <h3 className={classNames(styles.title2, "mb-4")}>
                    Simple <span className="text-secondary">design</span>
                  </h3>
                  <div className={classNames(styles.textLarge, "mb-4")}>
                    <p>
                      Place here a description of the product. Ensure that it
                      will attract user attentions and retaint them for some
                      times.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-5 order-md-1">
                <ImageB
                  src="/img/img-1-portrait.jpg"
                  rounded="medium"
                  scaleOnHover={true}
                />
              </div>
            </div>
          }
        />
        {/* End of Feature 2 section */}

        {/* Feature list section */}
        <SectionA
          marginTop="medium"
          marginBottom="medium"
          contentElement={
            <>
              <div className="row">
                <div className="col-12 col-lg-8">
                  <h3 className={classNames(styles.title2, "mb-4")}>
                    Modern technology
                  </h3>
                  <div className={classNames(styles.textXLarge)}>
                    <p className="">
                      Place here a description of the product. Ensure that it
                      will attract user attentions and retain them for some
                      times.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-5 gy-4 mt-4">
                <div className="col">
                  <FeatureA
                    imageElement={
                      <IconA
                        size="large"
                        shape="rounded-medium"
                        className="text-primary"
                        imageElement={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                          >
                            <path
                              id="speedometer-outline"
                              d="M6.985,40.767c-.107-.108-.207-.227-.328-.359a22.5,22.5,0,1,1,33.687,0,.149.149,0,0,1-.015.016l-.3.333a3.861,3.861,0,0,1-5.683-.01,14.731,14.731,0,0,0-21.676,0,3.861,3.861,0,0,1-5.679.024ZM23.5,6A19.494,19.494,0,0,1,38.1,38.416c.014-.016-.286.312-.286.312a.861.861,0,0,1-1.263-.009,17.732,17.732,0,0,0-26.1,0,.861.861,0,0,1-1.273.007l-.041-.042c-.089-.089-.166-.186-.255-.282A19.493,19.493,0,0,1,23.5,6Zm6.571,14.241-4.453,7.077a2.868,2.868,0,0,1-.656.657A2.823,2.823,0,0,1,21.68,23.38l7.078-4.452a.962.962,0,0,1,1.1,0,.948.948,0,0,1,.214,1.313ZM11.5,24h-3a1.5,1.5,0,0,0,0,3h3a1.5,1.5,0,1,0,0-3Zm27,0h-3a1.5,1.5,0,1,0,0,3h3a1.5,1.5,0,1,0,0-3ZM16.075,15.954l-2.121-2.121a1.5,1.5,0,0,0-2.121,2.121l2.121,2.121a1.5,1.5,0,0,0,2.121-2.121Zm16.971,2.121,2.121-2.121a1.5,1.5,0,0,0-2.121-2.121l-2.121,2.121a1.5,1.5,0,0,0,2.121,2.121ZM22,10.5v3a1.5,1.5,0,1,0,3,0v-3a1.5,1.5,0,1,0-3,0Z"
                              fill="currentColor"
                              fillRule="evenodd"
                            ></path>
                          </svg>
                        }
                      />
                    }
                    titleElement={
                      <h4
                        className={classNames(
                          styles.textXLarge,
                          "text-primary",
                          "fw-bold"
                        )}
                      >
                        High-end option
                      </h4>
                    }
                    contentElement={
                      <div className={classNames(styles.textLarge)}>
                        <p className={classNames("mb-0", "opacity-7")}>
                          A simple description of the awesome feature.
                        </p>
                      </div>
                    }
                  />
                </div>

                <div className="col">
                  <FeatureA
                    imageElement={
                      <IconA
                        size="large"
                        shape="rounded-medium"
                        className="text-secondary"
                        imageElement={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="42"
                            height="43.126"
                            viewBox="0 0 42 43.126"
                          >
                            <path
                              id="settings-outline"
                              d="M15.874,8.264l.63-4.488c0-.016,0-.033.007-.05a2.547,2.547,0,0,1,2.448-2.1h8.076a2.55,2.55,0,0,1,2.447,2.03c.006.032.012.062.017.093,0,0,.63,4.484.629,4.479s0,0,.01.007a15.962,15.962,0,0,1,2.217,1.3l4.209-1.7.026-.011a2.524,2.524,0,0,1,3.056,1.065l.009.017s4.01,6.938,4.008,6.933a2.522,2.522,0,0,1-.57,3.2l-.03.024-3.581,2.811a.006.006,0,0,0,0,0c0,.006,0,.012,0,.018.035.428.056.858.056,1.289V23.2q0,.639-.059,1.277l3.581,2.808c.011.007.021.017.032.026a2.519,2.519,0,0,1,.57,3.194l-4.019,6.953a2.521,2.521,0,0,1-3.054,1.068l-.027-.012-4.2-1.692s-.007,0-.016.006a17.045,17.045,0,0,1-2.213,1.289L29.5,42.6c0,.017,0,.033-.007.05a2.547,2.547,0,0,1-2.448,2.1H18.965a2.55,2.55,0,0,1-2.447-2.03c-.006-.032-.012-.062-.017-.093,0,0-.63-4.484-.629-4.479s0,0-.01-.007a15.962,15.962,0,0,1-2.217-1.3l-4.209,1.7-.026.011a2.524,2.524,0,0,1-3.056-1.065l-.009-.017s-4.01-6.938-4.008-6.933a2.522,2.522,0,0,1,.57-3.2l.03-.024L6.515,24.5s0,0,0-.017c-.038-.434-.06-.867-.06-1.3s.021-.866.059-1.284L2.934,19.087c-.015-.01-.029-.023-.042-.033a2.52,2.52,0,0,1-.552-3.179L6.359,8.923A2.521,2.521,0,0,1,9.413,7.855l.027.012,4.2,1.692s.008,0,.017-.006a17.046,17.046,0,0,1,2.213-1.289Zm3.54-3.639-.57,4.056a2.994,2.994,0,0,1-1.658,2.282,13.887,13.887,0,0,0-1.817,1.056,3.015,3.015,0,0,1-2.835.327l0,0-3.8-1.53-3.582,6.2L8.367,19.54A3.013,3.013,0,0,1,9.5,22.164c-.032.338-.048.677-.048,1.022s.018.695.047,1.031a3.008,3.008,0,0,1-1.122,2.637l-.008,0L5.145,29.392l3.581,6.2,3.8-1.529a3.006,3.006,0,0,1,2.837.323,12.963,12.963,0,0,0,1.8,1.053,3.012,3.012,0,0,1,1.685,2.286v.006l.566,4.023h7.178l.57-4.056a2.994,2.994,0,0,1,1.658-2.282,13.887,13.887,0,0,0,1.817-1.056,3.015,3.015,0,0,1,2.835-.327h0l3.8,1.53,3.582-6.2-3.884-3.047a1.5,1.5,0,0,1-.56-1.391,13.025,13.025,0,0,0,.128-1.742c0-.351-.018-.7-.045-1.029a3.011,3.011,0,0,1,1.133-2.636l3.231-2.537-3.581-6.2-3.8,1.529a3.006,3.006,0,0,1-2.837-.323,12.963,12.963,0,0,0-1.8-1.053,3.012,3.012,0,0,1-1.685-2.286V8.648l-.566-4.023H19.414Zm4.323,11.1c-.245-.024-.491-.036-.737-.036a7.5,7.5,0,1,0,7.5,7.5c0-.246-.012-.492-.036-.737a7.539,7.539,0,0,0-6.725-6.728Z"
                              transform="translate(-2 -1.625)"
                              fill="currentColor"
                              fillRule="evenodd"
                            ></path>
                          </svg>
                        }
                      />
                    }
                    titleElement={
                      <h4
                        className={classNames(
                          styles.textXLarge,
                          "text-secondary",
                          "fw-bold"
                        )}
                      >
                        Modern layout
                      </h4>
                    }
                    contentElement={
                      <div className={classNames(styles.textLarge)}>
                        <p className={classNames("mb-0", "opacity-7")}>
                          A simple description of the awesome feature.
                        </p>
                      </div>
                    }
                  />
                </div>

                <div className="col">
                  <FeatureA
                    imageElement={
                      <IconA
                        size="large"
                        shape="rounded-medium"
                        className="text-success"
                        imageElement={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="45"
                            height="36.565"
                            viewBox="0 0 45 36.565"
                          >
                            <path
                              id="sync"
                              d="M5.2,21.516l-1.64,1.64a1.5,1.5,0,0,1-2.121-2.121l4.125-4.125a1.5,1.5,0,0,1,2.1-.024l4.313,4.125A1.5,1.5,0,0,1,9.9,23.179L8.2,21.552v.558a15.322,15.322,0,0,0,27.26,9.549,1.5,1.5,0,0,1,2.331,1.887A18.321,18.321,0,0,1,5.2,22.11v-.594ZM38.752,22.59v-.515a15.308,15.308,0,0,0-27.266-9.512,1.5,1.5,0,0,1-2.346-1.871A18.309,18.309,0,0,1,41.752,22.075v.648l1.689-1.689a1.5,1.5,0,1,1,2.121,2.121L41.437,27.28a1.5,1.5,0,0,1-2.1.024l-4.313-4.125A1.5,1.5,0,0,1,37.1,21.01l1.652,1.58Z"
                              transform="translate(-1 -3.812)"
                              fill="currentColor"
                              fillRule="evenodd"
                            ></path>
                          </svg>
                        }
                      />
                    }
                    titleElement={
                      <h4
                        className={classNames(
                          styles.textXLarge,
                          "text-success",
                          "fw-bold"
                        )}
                      >
                        Mobile sync
                      </h4>
                    }
                    contentElement={
                      <div className={classNames(styles.textLarge)}>
                        <p className={classNames("mb-0", "opacity-7")}>
                          A simple description of the awesome feature.
                        </p>
                      </div>
                    }
                  />
                </div>
              </div>
            </>
          }
        />
        {/* End of Feature list section */}

        {/* Text with image Section */}
        <SectionA
          backgroundImage={"/img/img-2-landscape.jpg"}
          backgroundColor={"rgba(0,0,0,0.4)"}
          contentElement={
            <div className="row text-white">
              <div className="col-12 col-lg-8">
                <h3 className={classNames(styles.title2, "mb-4")}>
                  Awesome{" "}
                  <span className={classNames("opacity-7")}>option</span>
                </h3>
                <div className={classNames(styles.textXLarge)}>
                  <p className="">
                    Place here a description of the product. Ensure that it will
                    attract user attentions and retain them for some times.
                  </p>
                </div>
              </div>
            </div>
          }
        />
        {/* End of Text with image section */}

        {/* How it works section */}
        <SectionA
          marginTop="medium"
          marginBottom="none"
          contentElement={
            <>
              <div className="row">
                <div className="col-12 col-lg-8">
                  <h3 className={classNames(styles.title2, "mb-4")}>
                    <span className={classNames(styles.textMuted1)}>
                      How it
                    </span>{" "}
                    works
                  </h3>
                  <div className={classNames(styles.textXLarge)}>
                    <p className="">
                      Place here a description of the product. Ensure that it
                      will attract user attentions and retain them for some
                      times.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-5 gy-4 mt-4">
                <div className="col">
                  <FeatureB
                    className="text-primary"
                    imageElement={
                      <IconB
                        size="large"
                        shape="circle"
                        imageElement={<h2>01</h2>}
                      />
                    }
                    titleElement={
                      <h4 className={classNames(classNames(styles.fwSemiBold))}>
                        Start the app
                      </h4>
                    }
                    contentElement={
                      <div className={classNames(styles.textMedium)}>
                        <p className={classNames("mb-0", "opacity-7")}>
                          A simple description of the awesome feature.
                        </p>
                      </div>
                    }
                  />
                </div>

                <div className="col">
                  <FeatureB
                    className={styles.colorSecondary}
                    imageElement={
                      <IconB
                        size="large"
                        shape="circle"
                        imageElement={<h2>02</h2>}
                      />
                    }
                    titleElement={
                      <h4 className={classNames(styles.fwSemiBold)}>
                        Edit content
                      </h4>
                    }
                    contentElement={
                      <div className={classNames(styles.textMedium)}>
                        <p className={classNames("mb-0", "opacity-7")}>
                          A simple description of the awesome feature.
                        </p>
                      </div>
                    }
                  />
                </div>

                <div className="col">
                  <FeatureB
                    className={styles.colorSuccess}
                    imageElement={
                      <IconB
                        size="large"
                        shape="circle"
                        imageElement={<h2>02</h2>}
                      />
                    }
                    titleElement={
                      <h4 className={classNames(classNames(styles.fwSemiBold))}>
                        Save result
                      </h4>
                    }
                    contentElement={
                      <div className={classNames(styles.textMedium)}>
                        <p className={classNames("mb-0", "opacity-7")}>
                          A simple description of the awesome feature.
                        </p>
                      </div>
                    }
                  />
                </div>
              </div>
            </>
          }
        />
        {/* End of How it works section */}

        {/* Screenshot section */}
        <SectionA
          marginTop="medium"
          marginBottom="none"
          contentElement={
            <div className="row align-items-center gx-5 justify-content-between">
              <div className="col-12 col-md-5 col-lg-5 col-lg-7 order-md-1">
                <ImageB
                  src="/img/img-2-landscape.jpg"
                  rounded="medium"
                  scaleOnHover={true}
                />
              </div>
              <div className="col-12 col-md-6 col-lg-5 order-md-2">
                <div className="pb-5 pb-md-0 ps-lg-4">
                  <h5
                    className={classNames(styles.textXLarge, "fw-bold", "mb-0")}
                  >
                    Screenshot
                  </h5>
                  <h3 className={classNames(styles.title3, "mb-4")}>
                    Landing Page
                  </h3>
                  <div className={classNames(styles.textLarge, "mb-4")}>
                    <p>
                      Place here a description of the product to show what it
                      does.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          }
        />
        {/* End of Screenshot section */}

        {/* Pricing section */}
        <SectionA
          marginTop="medium"
          marginBottom="medium"
          contentElement={
            <>
              <div className="row">
                <div className="col-12 col-lg-8">
                  <h3 className={classNames(styles.title2, "mb-4")}>
                    <span className={styles.textMuted1}>Pricing</span> &amp;
                    plan
                  </h3>
                  <div className={classNames(styles.textXLarge)}>
                    <p className="">
                      Place here a description of the product. Ensure that it
                      will attract user attentions and retain them for some
                      times.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-5 gy-4 mt-4">
                <div className="col">
                  <PricingA
                    titleElement={<span className="h2 mb-0 strong">Free</span>}
                    priceElement={
                      <h5 className="mb-3 strong ">
                        <span className={styles.title3}>$0</span> per month
                      </h5>
                    }
                    footerElement={
                      <a href="#">
                        <ButtonSolidA
                          text="Choose plan"
                          size="large"
                          width="full"
                        />
                      </a>
                    }
                    featureList={[
                      {
                        title: "1 Team members",
                        enabled: true,
                      },
                      {
                        title: "1 Projects per month",
                        enabled: true,
                      },
                      {
                        title: "Use it forever",
                        enabled: true,
                      },
                      {
                        title: "Free Support",
                        enabled: true,
                      },
                      {
                        title: "Future Updates",
                        enabled: false,
                      },
                      {
                        title: "Advanced Feature",
                        enabled: false,
                      },
                    ]}
                  />
                </div>
                <div className="col">
                  <PricingA
                    titleElement={
                      <span className="h2 mb-0 strong">Standard</span>
                    }
                    priceElement={
                      <h5 className="mb-3 strong ">
                        <span className={styles.title3}>$29</span> per month
                      </h5>
                    }
                    footerElement={
                      <a href="#">
                        <ButtonSolidA
                          text="Choose plan"
                          size="large"
                          width="full"
                        />
                      </a>
                    }
                    featureList={[
                      {
                        title: "1 Team members",
                        enabled: true,
                      },
                      {
                        title: "1 Projects per month",
                        enabled: true,
                      },
                      {
                        title: "Use it forever",
                        enabled: true,
                      },
                      {
                        title: "Free Support",
                        enabled: true,
                      },
                      {
                        title: "Future Updates",
                        enabled: false,
                      },
                      {
                        title: "Advanced Feature",
                        enabled: false,
                      },
                    ]}
                  />
                </div>
                <div className="col">
                  <PricingA
                    titleElement={<span className="h2 mb-0 strong">Pro</span>}
                    priceElement={
                      <h5 className="mb-3 strong ">
                        <span className={styles.title3}>49</span> per month
                      </h5>
                    }
                    footerElement={
                      <a href="#">
                        <ButtonSolidA
                          text="Choose plan"
                          size="large"
                          width="full"
                        />
                      </a>
                    }
                    featureList={[
                      {
                        title: "1 Team members",
                        enabled: true,
                      },
                      {
                        title: "1 Projects per month",
                        enabled: true,
                      },
                      {
                        title: "Use it forever",
                        enabled: true,
                      },
                      {
                        title: "Free Support",
                        enabled: true,
                      },
                      {
                        title: "Future Updates",
                        enabled: false,
                      },
                      {
                        title: "Advanced Feature",
                        enabled: false,
                      },
                    ]}
                  />
                </div>
              </div>
            </>
          }
        />
        {/* End of Pricing section */}

        {/* Testimony section */}
        <SectionA
          marginTop="none"
          contentElement={
            <>
              <div className="row">
                <div className="col-12 col-lg-12">
                  <h3 className={classNames(styles.title2, "mb-4")}>
                    What people are saying
                  </h3>

                  <div className="sliders mt-5">
                    <ReviewA
                      imageElement={
                        <ImageB
                          src="/img/img-2-square.jpg"
                          rounded="medium"
                          scaleOnHover={true}
                        />
                      }
                      contentElement={
                        <p className={styles.textXLarge}>
                          This product is something that we really trusted since
                          the first time we had it. We encourage you to choose
                          it also.
                        </p>
                      }
                      authorElement={
                        <p className={classNames(styles.textXLarge)}>
                          JP Morgan - Copywriter
                        </p>
                      }
                    />
                  </div>
                </div>
              </div>
            </>
          }
        />
        {/* End of Testimony section */}

        {/* CTA Download section */}
        <SectionA
          marginTop={"none"}
          contentElement={
            <div className="row">
              <div className="col-12 col-lg-8">
                <h3 className={classNames(styles.title2, "mb-4")}>
                  Convinced?{" "}
                  <span className={classNames("text-primary")}>Get it now</span>
                </h3>
                <div className={classNames(styles.textXLarge)}>
                  <p className="">
                    Place here a description of the product. Ensure that it will
                    attract user attentions and retain them for some times.
                  </p>
                </div>
                <div className="mt-4">
                  <a href="#">
                    <ButtonSolidA size="large">Get Started</ButtonSolidA>
                  </a>
                </div>
              </div>
            </div>
          }
        />
        {/* End of CTA Download */}

        {/* Newsletter section */}
        <SectionA
          marginTop={"none"}
          contentElement={
            <CardA
              className={classNames(styles.colorWhite)}
              backgroundColor="rgb(55, 44, 66, 1)"
              paddingTop="medium"
              paddingBottom="medium"
              paddingLeft="small"
              paddingRight="small"
            >
              <div className={classNames("row", styles.alignCenter)}>
                <div
                  className={classNames("col-12 col-lg-8", styles.alignCenter)}
                >
                  <h3 className={classNames(styles.title2, "mb-4")}>
                    Join our{" "}
                    <span className={classNames("text-primary")}>
                      newsletter
                    </span>
                  </h3>
                  <div className={classNames(styles.textXLarge)}>
                    <p className="">
                      Get all the latest updates, news and events.
                    </p>
                  </div>

                  <NewsletterFormA
                    /* buttonElement={
                    <ButtonSolidA size="medium">Subscribess</ButtonSolidA>
                  } */
                    className={classNames(styles.wSmall, styles.alignCenter)}
                    direction="vertical"
                    subscribeText={"Subscribe"}
                    email={subscriptionEmail}
                    onChangeEmail={setSubscriptionEmail}
                  />
                </div>
                <div className="mt-3">
                  <p>
                    By submitting this form you consent to us emailing you
                    occasionally about our products and services. You can
                    unsubscribe from emails at any time, and we will never pass
                    your email to third parties.
                  </p>
                </div>
              </div>
            </CardA>
          }
        />
        {/* End of Newsletter section */}

        {/* Signup section */}
        <SectionA
          marginTop={"none"}
          contentElement={
            <div className="row">
              <div className="col-12 col-lg-7">
                <h3 className={classNames(styles.title2, "mb-4")}>
                  Try it for free. <br />
                  <span className={classNames("text-primary")}>
                    Sign up now.
                  </span>
                </h3>
                <div className={classNames(styles.textXLarge)}>
                  <p className="">
                    Place here a description of the product. Ensure that it will
                    attract user attentions and retain them for some times.
                  </p>
                </div>
              </div>

              <div className="col-12 col-lg-5">
                <SignupFormA
                  buttonText="Sign up now"
                  buttonSize="large"
                  className={styles.bgColorWhitePrimary}
                  padding={"large"}
                />
              </div>
            </div>
          }
        />
        {/* End of Signup section */}
      </main>

      {/* Footer */}
      <FooterA
        navingationLinks={[
          {
            name: "Products",
            url: "#",
          },
          {
            name: "Terms and Conditions",
            url: "#",
          },
          {
            name: "Contact",
            url: "#contact",
          },
          // {
          //   name: "My web",
          //   url: "#contact",
          // },
        ]}
        socialLinks={[
          // {
          //   name: "Facebook",
          //   url: "#",
          // },
          {
            name: "Twitter",
            url: "#",
          },
          {
            name: "Instagram",
            url: "#contact",
          } 
        ]}
        socialInviteText={"Follow me on"}
        notePrimaryElement={
          <p className="fs-regular text-muted">
            Copyright © 2000 Company. All Rights Reserved.
          </p>
        }
        noteSecondaryElement={
          <p className="fs-regular text-muted">
            Website made by <a href="//cutekit.net">cutekit.net</a>
          </p>
        }
      />
    </div>
  );
};

export default LandingPageA;
