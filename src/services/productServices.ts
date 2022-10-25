import { ENDPOINT } from "config/constants";
import { products } from "data/products";
import { Product } from "types/product";

/**
 * Get all products
 * @param filter : filter {category : string}
 * @returns
 */

const getProducts = (params?: {
  sort?: "random" | "featured" | "recents" | "trending" | "popular";
  maxCount?: number;
  categories?: string | string[];
}): Product[] => {
  let productsResult: Product[] = [];

  let categoryQuery = params?.categories;
  // console.log(typeof categoryQuery);
  if (categoryQuery) {
    productsResult = products.filter((product) => {
      if (product.categories === undefined || product.categories === null) {
        return false;
      }
      // category is made of on filter
      if (typeof categoryQuery === "string") {
        let categoryFound = product.categories.findIndex((category) => {
          return category.ref === categoryQuery;
        });
        return categoryFound > -1;
        /* return product.categories.some((productCategory) => {
            return productCategory.ref === categoryQuery;
          }); */
      }
      // category is made of several filters
      else if (
        typeof categoryQuery === "object" &&
        Array.isArray(categoryQuery)
      ) {
        // console.log(categoryQuery);
        // console.log(product.categories);

        const productCategories = product.categories?.map((productCategory) => {
          return productCategory.ref;
        });

        return categoryQuery.every((category) => {
          return productCategories.includes(category);
        });
        // return product.categories.every((productCategory) => {
        //   return categoryQuery.includes(productCategory.ref);
        // });
      }
      // unknown category value
      else {
        return false;
      }
    });
  } else {
    productsResult = products;
  }
  if (params) {
    if (params?.sort === "random") {
      return [...productsResult]
        .sort((a, b) => {
          return Math.floor(Math.random() * 2 - 1);
        })
        .slice(0, params?.maxCount || productsResult.length);
    }
    if (params?.sort === "featured") {
      return [...productsResult]
        .sort((a, b) => {
          return Math.floor(Math.random() * 2 - 1);
        })
        .slice(0, params?.maxCount || productsResult.length);
    }
    if (params.sort === "trending") {
      return [...productsResult]
        .sort((a, b) => {
          return Math.floor(Math.random() * 2 - 1);
        })
        .slice(0, params?.maxCount || productsResult.length);
    }
  }
  return productsResult;
};

/**
 * Get all products path for static page generation
 * @returns
 */
const getAllProductsPaths = async (): Promise<
  {
    params: {
      productId: string;
    };
  }[]
> => {
  const products = await getProducts();
  return products.map((product: Product) => {
    return {
      params: {
        productId: product.ref,
      },
    };
  });
};

/**
 * Get a product with `productId`
 * @param productId
 * @returns
 */
const getProduct = async (productId: string): Promise<Product | null> => {
  await new Promise((resolve) => setTimeout(resolve, 100));
  if (productId) {
    const product = products.find((product) => {
      return product.ref === productId;
    });
    if (!product) {
      return null;
    }
    return product;
  } else {
    return null;
  }
};

export default { getProducts, getAllProductsPaths, getProduct };
