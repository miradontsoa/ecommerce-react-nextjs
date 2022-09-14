import LayoutDefault from "components/layout/layout-default";
import HeroCategory from "components/sections/hero/hero-category";
import SectionCategory from "components/sections/section-categories";
import SectionFeaturedProduct from "components/sections/section-featured-product";
import { products } from "data/products";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { Product, ProductCategory } from "types/product";
import { getProductsFetch } from "utils/productFetch";
import { getAllCategoriesPathsFetch, getCategoryFetch } from "utils/categoryFetch";
import SectionProductsA from "components/sections/section-products-a";

type Props = {
  category: ProductCategory,
  products?: Product[],
  featuredProduct?: Product,
}
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
    <LayoutDefault>
      <HeroCategory
        category={category}
        //   parentCategory={parentCategory}
      />
      {/* Featured products is JS generated */}
      <SectionFeaturedProduct marginTop="none" product={featuredProduct} />
      <SectionProductsA products={products} />
      <SectionCategory borderTop="medium" />
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
    getProductsFetch({
      category: params?.categoryId,
      // category: "shoes",
    }),
  ]);
  return {
    props : {
      category: category,
      products: products,
      featuredProduct: products[0] || null,
    },
  };
};
