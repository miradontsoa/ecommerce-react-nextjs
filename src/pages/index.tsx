import ButtonSolidA from "components/general/button/button-solid-a";
import HeroA from "components/sections/layout/hero-a";
import SectionA from "components/sections/layout/section-a";
import classNames from "classnames";
import { NextPage } from "next";
import React, { useState } from "react";
import styles from "./home-a.module.scss";
import ImageB from "components/media-text/images/image-b";
import SectionFeatured from "components/sections/section-featured";
import SectionTrending from "components/sections/section-trending";
import SectionCategory from "components/sections/section-categories";
import LayoutDefault from "components/layout/layout-default";
import Link from "next/link";

const HomePage: NextPage = () => {
  const [active, setActive] = useState("About");
  const [subscriptionEmail, setSubscriptionEmail] = useState("");

  return (
    <LayoutDefault
      className={classNames(styles.homeA)}
      heroElement={
        <HeroA
          contentElement={
            <div className="row">
              <div className="col-6">
                <h4>The best since 1980</h4>
                <h2 className={classNames("title-2 font-title", "mb-4")}>Clothing</h2>
                <div className="btn-group">
                  <Link href="/collections" >
                    <a >
                      <ButtonSolidA size="large">
                        Explore collection
                      </ButtonSolidA>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          }
          imageSrc={"/img/img-1-landscape.jpg"}
        />
      }
    >
      <main>
        {/* Hero */}

        <div className={styles.sections}>
          {/* End of Hero */}

          {/* Trending section */}
          <SectionTrending borderBottom="medium" />
          {/* End of Trending section */}

          {/* Featured section */}
          <SectionFeatured borderBottom="medium" />
          {/* End of Featured section */}

          {/* Categories selection section */}
          <SectionCategory borderBottom="medium" />
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
                  <h3 className={classNames("title-3 font-title")}>
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
        </div>
      </main>
    </LayoutDefault>
  );
};

export default HomePage;
