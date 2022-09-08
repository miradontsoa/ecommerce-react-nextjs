// Book detail page

import LayoutDefault from "components/layout/layout-default";
import HeroProductA from "components/sections/layout/hero-product-a";
import SectionCategory from "components/sections/section-categories";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { useEffect } from "react";
import { Product } from "types/product";
import { getAllProductsPaths, getProduct } from "utils/productUtils";

const ProductPage = ({ product }: { product: Product }) => {
  return (
    <LayoutDefault>
      <HeroProductA product={product} />

      <SectionCategory borderTop="medium" />
    </LayoutDefault>
  );
};
export default ProductPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllProductsPaths();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = await getProduct(params?.productId as string);

  return {
    props: {
      product: product,
    },
  };
};
