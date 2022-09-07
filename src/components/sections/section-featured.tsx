import CardProductB from "components/general/card/card-product-b";
import ImageA from "components/media-text/images/image-a";
import classNames from "classnames";
import Link from "next/link";
import SectionA from "./layout/section-a";
import styles from "./section.module.scss";

type Props = {
  borderTop?: "medium" | "none";
  borderBottom?: "medium" | "none";
  marginTop?: "large" | "medium" | "small" | "none";
  marginBottom?: "large" | "medium" | "small" | "none";
};
const SectionFeatured = ({
  borderTop,
  borderBottom,
  marginTop,
  marginBottom,
}: Props) => {
  return (
    <SectionA
      borderTop={borderTop}
      borderBottom={borderBottom}
      marginTop={marginTop}
      marginBottom={marginBottom}
      contentElement={
        <>
          <div className={styles.sectionTitle}>
            <div className="row">
              <div className="col-12 col-lg-6">
                <h3 className={classNames("title-3")}>Featured</h3>
                <div className={classNames("text-medium")}>
                  <p className="">
                    These items are very popular. This is a sample text
                    describing something awesome. Just replace it by your cool
                    text or something else and it will be displayed here.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={classNames(styles.sectionContent, "mt-5")}>
            {/* Grid of products */}
            <div className="row row-cols-lg-2 gx-5 gy-5">
              <div className="col">
                <Link href={"/products/basket"}>
                  <a>
                    <CardProductB
                      titleElement={<h4 className="mb-0">Versonic Basket</h4>}
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
                <Link href={"/products/basket"}>
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
              <div className="col">
                <Link href={"/products/basket"}>
                  <a>
                    <CardProductB
                      imagePosition={"right"}
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
              <div className="col">
                <Link href={"/products/basket"}>
                  <a>
                    <CardProductB
                      imagePosition={"right"}
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
  );
};

export default SectionFeatured;
