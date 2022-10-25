import CardProductB from "components/general/card/card-product-b";
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
const SectionFeatured = ({
  borderTop,
  borderBottom,
  marginTop,
  marginBottom,
}: Props) => {
  const [products, setProducts] = React.useState([] as Product[]);
  const loadProducts = async () => {
    const products = productServices.getProducts({
      sort: "featured",
      maxCount: 4,
    });
    setProducts(products);
  };
  // Load products
  React.useEffect(() => {
    loadProducts();
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
                <h3 className={classNames("title-3 font-title")}>Featured</h3>
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
              {products?.map((product, index) => {
                return (
                  <div key={product.ref} className="col">
                    <Link href={`products/${product.ref}`}>
                      <a>
                        <CardProductB
                          imagePosition={((index) % 4 == 0 || (index) % 4 == 1) ? "left" : "right"}
                          titleElement={
                            <h4 className="mb-0">{product.name}</h4>
                          }
                          description={product.description}
                          price={`${product.priceUnit || "$"}${product.price}`}
                          /* colors={[
                        {
                          rgb: "rgb(77 130 148)",
                        },
                        {
                          rgb: "rgb(239 184 56)",
                        },
                      ]} */
                          colors={product.colors?.map((color) => {
                            return {
                              rgb: color.color,
                            };
                          })}
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
 
            </div>
          </div>
        </>
      }
    />
  );
};

export default SectionFeatured;
