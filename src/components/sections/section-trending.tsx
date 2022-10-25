import ButtonInlineA from "components/general/button/button-inline-a";
import CardProductA from "components/general/card/card-product-a";
import IconC from "components/general/icon/icon-c";
import ImageA from "components/media-text/images/image-a";
import classNames from "classnames";
import Link from "next/link";
import SectionA from "./layout/section-a";
import styles from "./section.module.scss";
import React from "react";
import { Product } from "types/product";
import productServices from "services/productServices";

type Props = {
  borderTop?: "medium" | "none";
  borderBottom?: "medium" | "none";
  marginTop?: "large" | "medium" | "small" | "none";
  marginBottom?: "large" | "medium" | "small" | "none";
};
const SectionTrending = ({
  borderTop,
  borderBottom,
  marginTop,
  marginBottom,
}: Props) => {
  const [products, setProducts] = React.useState([] as Product[]);
  const loadProducts = async () => {
    const products = productServices.getProducts({
      sort: "trending",
      maxCount: 3,
    });
    setProducts(products);
  };
  // Load products
  React.useEffect(() => {
    loadProducts()
  }, []);
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
                <h3 className={classNames("title-3 font-title")}>
                  Trending &amp; Popular
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
          </div>

          <div className={styles.sectionContent}>
            {/* navigation */}
            <div className="row mt-3">
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
                                    d="M455.189,396.5l18,18-18,18m15.5-18h-36.5"
                                    fill="none"
                                    stroke="#000"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="6"
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
              {products?.map((product) => {
                return (
                  <div key={product.ref} className="col">
                    <Link href={`products/${product.ref}`}>
                      <a>
                        <CardProductA
                          title={product.name}
                          price="$150"
                          tags={product.categories?.map((cat) => {
                            return {
                              title: cat.name,
                            };
                          })}
                          imageElement={
                            <ImageA src={product.image} scaleOnHover={true} />
                          }
                        />
                      </a>
                    </Link>
                  </div>
                );
              })}
              {/* <div className="col">
                <Link href={"/products/basket-b"}>
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
              </div> */}

               
            </div>
          </div>
        </>
      }
    />
  );
};

export default SectionTrending;
