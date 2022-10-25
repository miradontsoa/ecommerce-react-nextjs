import LayoutDefault from "components/layout/layout-default";
import HeroCategory from "components/sections/hero/hero-category";
import SectionCategory from "components/sections/section-categories";
import SectionFeaturedProduct from "components/sections/section-featured-product";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { Product, ProductCategory } from "types/product";
import { getProducts } from "services/productApiServices";
import {
  getAllCategoriesPathsFetch,
  getCategoryFetch,
} from "utils/categoryFetch";
import SectionProductsA from "components/sections/section-products-a";
import OrderSummary from "components/order/order-summary";
import SidebarCollection from "components/navigation/sidebar/sidebar-collection";
import { useRouter } from "next/router";
import SectionA from "components/sections/layout/section-a";

type Props = {
  category: ProductCategory;
  products?: Product[];
  featuredProduct?: Product;
};
const CollectionSlugPage = ({ category, products, featuredProduct }: Props) => {
  //   const parentCategory = {
  //     name: "Women",
  //     ref: "wwomen",
  //   };
  //   const category = {
  //     name: "Accessories",
  //     ref: "accessories",
  //   };
  return (
    <LayoutDefault
      heroElement={<HeroCategory category={category} />}
      fullwidthElement={
        <div className="with-left-sidebar-layout">
          <div className="sidebar">
            <div className="sidebar-nav">
              <SidebarCollection />
            </div>
          </div>

          <div className="page-content">
            {products.length > 0 ? (
              <>
                {featuredProduct && (
                  <SectionFeaturedProduct
                    className="px-0"
                    marginTop="none"
                    marginX="none"
                    product={featuredProduct}
                  />
                )}
                <SectionProductsA products={products} />
              </>
            ) : (
              <>
                <SectionA
                  marginX="none"
                  marginTop="none"
                  contentElement={<h2>No product found</h2>}
                />
              </>
            )}
            <SectionCategory borderTop="medium" />
          </div>
        </div>
      }
    ></LayoutDefault>
  );
};

export default CollectionSlugPage;

export async function getServerSideProps(context) {
  // const router = useRouter();
  let { slugs } = context?.query || [];
  if (typeof slugs === "string") {
    slugs = [slugs];
  }

  // Fetch data from external API
  const [category, products] = await Promise.all([
    (async () => {
      if (Array.isArray(slugs)) {
        return await getCategoryFetch(slugs[slugs?.length - 1]);
      } else {
        return undefined;
      }
    })(),
    (async () => {
      return await getProducts({
        categories: slugs,
        // category: "shoes",
      });
    })(),
    // []
    ,
  ]);
  return {
    props: {
      category: category,
      products: products,
      featuredProduct: products[0] || null,
    },
  };
}
