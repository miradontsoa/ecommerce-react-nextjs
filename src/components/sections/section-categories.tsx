import CardCategoryA from "components/general/card/card-category-a";
import CardCategoryB from "components/general/card/card-category-b";
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
const SectionCategory = ({
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
                <h3 className={classNames("title-3 font-title")}>Categories</h3>
              </div>
            </div>
          </div>

          <div className={classNames(styles.sectionContent, "mt-3")}>
            <div className="row row-cols-md-2 row-cols-lg-4 g-5">
              <div className="col">
                <Link href={"/category/cloth"}>
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
                <Link href={"/category/pant"}>
                  <a>
                    <CardCategoryA
                      textAlign="center"
                      imageElement={
                        <ImageA
                          src="/img/img-6-square.jpg"
                          scaleOnHover={true}
                        />
                      }
                      title="Pant"
                      viewText="Discover"
                    />
                  </a>
                </Link>
              </div>
              <div className="col">
                <Link href={"/category/women"}>
                  <a>
                    <CardCategoryA
                      textAlign="center"
                      imageElement={
                        <ImageA
                          src="/img/img-7-square.jpg"
                          scaleOnHover={true}
                        />
                      }
                      title="Women"
                      viewText="Discover"
                    />
                  </a>
                </Link>
              </div>
              <div className="col">
                <Link href={"/category/fruits"}>
                  <a>
                    <CardCategoryA
                      textAlign="center"
                      imageElement={
                        <ImageA
                          src="/img/img-8-square.jpg"
                          scaleOnHover={true}
                        />
                      }
                      title="Fruits"
                      viewText="Discover"
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

export default SectionCategory;
