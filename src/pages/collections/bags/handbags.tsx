import LayoutDefault from "components/layout/layout-default";
import HeroCategory from "components/sections/hero/hero-category";
import SectionCategory from "components/sections/section-categories";
import React from "react";
import { Product, ProductCategory } from "types/product";
import SectionProductsA from "components/sections/section-products-a";
import SidebarCollection from "components/navigation/sidebar/sidebar-collection";

type Props = {
  category: ProductCategory;
  products?: Product[];
  featuredProduct?: Product;
};
const HandbagsPage = ({}: Props) => {
  //   const parentCategory = {
  //     name: "Women",
  //     ref: "wwomen",
  //   };
  const category = {
    name: "Accessories",
    ref: "accessories",
  };
  return (
    <LayoutDefault
      heroElement={<HeroCategory category={category} />}
      fullwidthElement={
        <div className="with-left-sidebar-layout">
          <div className="sidebar">
            <div className="sidebar-nav">
              <SidebarCollection />
              {/* <OrderSummary /> */}
            </div>
          </div>

          <div className="page-content">
            <h2>This is a sample customized collection page</h2>
            {/* Featured products is JS generated */}
            {/* <SectionProductsA products={products} /> */}
            <SectionCategory borderTop="medium" />
          </div>
        </div>
      }
    ></LayoutDefault>
  );
};

export default HandbagsPage;
