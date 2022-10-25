import CardProductB from "components/general/card/card-product-b";
import ImageA from "components/media-text/images/image-a";
import classNames from "classnames";
import Link from "next/link";
import SectionA from "./layout/section-a";
import styles from "./section.module.scss";
import React from "react";
import { Product } from "types/product";

type Props = {
  products: Product[];
  borderTop?: "medium" | "none";
  borderBottom?: "medium" | "none";
  marginTop?: "large" | "medium" | "small" | "none";
  marginBottom?: "large" | "medium" | "small" | "none";
  headerElement?: React.ReactElement;
};
const SectionProductsA = ({
  products,
  borderTop,
  borderBottom,
  marginTop,
  marginBottom,
  headerElement,
}: Props) => {
  return (
    <SectionA
      borderTop={borderTop}
      borderBottom={borderBottom}
      marginTop={marginTop}
      marginBottom={marginBottom}
      contentElement={
        <>
          {/* <div className={styles.sectionTitle}>
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
          </div> */}

          {headerElement && (
            <div className={classNames(styles.sectionTitle, "mb-5")}>
              {headerElement}
            </div>
          )}

          <div className={classNames(styles.sectionContent)}>
            {/* Grid of products */}
            <div className="row row-cols-lg-2 gx-5 gy-5">
              {products?.map((product, index) => (
                <div className="col" key={product.ref}>
                  <Link href={`/products/${product.ref}`}>
                    <a>
                      <CardProductB
                        titleElement={<h4 className="mb-0">{product.name}</h4>}
                        description={product.description}
                        price={`${product.price}`}
                        colors={[
                          {
                            rgb: "rgb(77 130 148)",
                          },
                          {
                            rgb: "rgb(239 184 56)",
                          },
                        ]}
                        tags={product?.categories?.map(category => {
                          return {
                            title: category.name
                          }
                        })}
                        imageElement={
                          <ImageA
                            src={product.image}
                            scaleOnHover={true}
                          />
                        }
                      />
                    </a>
                  </Link>
                </div>
              ))}
               
            </div>
          </div>
        </>
      }
    />
  );
};

export default SectionProductsA;
