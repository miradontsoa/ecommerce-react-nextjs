import { ENDPOINT } from "config/constants";
import { Product } from "types/product";

/**
 * Get all products
 * @param filter : filter {category : string}
 * @returns
 */
const getProductsFetch = async (filter?: {
  category?: string | string[];
}): Promise<Product[]> => {
  let apiUri = `${ENDPOINT.API}/products?`;
  if (filter?.category) {
    apiUri = `${apiUri}&category=${filter.category}`;
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
}

/**
 * Get all products path for static page generation
 * @returns
 */
const getAllProductsPathsFetch = async (): Promise<
  {
    params: {
      productId: string;
    };
  }[]
> => {
  const products = await getProductsFetch();
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
const getProductFetch = async (productId: string): Promise<Product> => {
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
}


export {
  getProductsFetch,
  getAllProductsPathsFetch ,
  getProductFetch,
}