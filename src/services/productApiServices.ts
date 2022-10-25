import { ENDPOINT } from "config/constants";
import { Product } from "types/product";

/**
 * Get all products
 * @param filter : filter {category : string}
 * @returns
 */
const getProducts = async (filter?: {
  sort?: "random" | "featured" | "recents" | "trending" | "popular" | string;
  maxCount?: number;
  categories?: string | string[];

}): Promise<Product[]> => {
  let apiUri = `${ENDPOINT.API}/products?`;
  if (filter?.categories) {
    // console.log(filter?.category)
    if (Array.isArray(filter?.categories)) {
      filter.categories.forEach(category => {
        apiUri = `${apiUri}&category=${category}`;
      }); 
    } else {
      apiUri = `${apiUri}&category=${filter.categories}`;
    }
  }
  if (filter?.sort) {
    apiUri = `${apiUri}&sort=${filter.sort}`;
  }
  if (filter?.maxCount) {
    apiUri = `${apiUri}&maxCount=${filter.maxCount}`;
  }
  try {
    const res = await fetch(apiUri, {
      method: "GET",
    });
    if (!res.ok) {
      throw Error(res.statusText);
      // return [];
    }
    const products: Product[] = await res.json();
    return products;
  } catch (error) {
    throw Error(error);
  }
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
const getProduct = async (productId: string): Promise<Product> => {
  const apiUri = `${ENDPOINT.API}/products/${productId}`;
  // const apiUri = `/api/products/${productId}`;
  const res = await fetch(apiUri, {
    method: "GET",
  });
  if (!res.ok) {
    throw Error(res.statusText);
  }
  const product: Product = await res.json();
  if (!product) {
    return null;
  }
  return product;
};

export { getProducts, getAllProductsPaths, getProduct };
