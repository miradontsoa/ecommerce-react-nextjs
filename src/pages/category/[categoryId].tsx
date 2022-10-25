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

type Props = {
  category: ProductCategory;
  products?: Product[];
  featuredProduct?: Product;
};
const CategoryPage = ({ category, products, featuredProduct }: Props) => {
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
      heroElement={category && <HeroCategory category={category} />}
    >
      {/* Featured products is JS generated */}
      <>
        {featuredProduct && (
          <SectionFeaturedProduct marginTop="none" product={featuredProduct} />
        )}
        {products?.length > 0 ? (
          <SectionProductsA products={products} />
        ) : (
          <p className="h2 mb-5">No product founds</p>
        )}
        <SectionCategory borderTop="medium" />
      </>
    </LayoutDefault>
  );
};

export default CategoryPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllCategoriesPathsFetch();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // const category = await getCategorytFetch(params?.categoryId as string);
  // const products = await getProductsFetch({
  //   category: params?.categoryId
  // })
  const [category, products] = await Promise.all([
    getCategoryFetch(params?.categoryId as string),
    // []
    getProducts({
      categories: params?.categoryId,
      // category: "shoes",
    }),
  ]);
  return {
    props: {
      category: category,
      products: products,
      featuredProduct: products[0] || null,
    },
  };
};
