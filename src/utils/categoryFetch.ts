import { ENDPOINT } from "config/constants";
import { ProductCategory } from "types/product";

/**
 * Get a product with `productId`
 * @param categoryId
 * @returns
 */
const getCategoryFetch = async (
  categoryId: string
): Promise<ProductCategory> => {
  const apiUri = `${ENDPOINT.API}/categories/${categoryId}`;
  // const apiUri = `/api/products/${productId}`;
  const res = await fetch(apiUri, {
    method: "GET",
  });
  if (!res.ok) {
    throw Error(res.statusText);
  }
  const category: ProductCategory = await res.json();
  if (!category) {
    return null;
  }
  return category;
};

/**
 * Get all products path for static page generation
 * @returns
 */
 const getAllCategoriesPathsFetch = async (): Promise<
 {
   params: {
     categoryId: string;
   };
 }[]
> => {
 const categories = await getCategoriesFetch();
 if (!categories) {
    return []
 }
 return categories?.map((category: ProductCategory) => {
   return {
     params: {
        categoryId: category.ref,
     },
   };
 });
};

/**
 * Get all category
 * @param filter : filter {parentCategory : string}
 * @returns
 */
 const getCategoriesFetch = async (filter?: {
    parentCategoryId?: string | string[];
  }): Promise<ProductCategory[]> => {
    let apiUri = `${ENDPOINT.API}/categories?`;
    if (filter?.parentCategoryId) {
      apiUri = `${apiUri}&parent=${filter.parentCategoryId}`;
    }
    try {
      const res = await fetch(apiUri, {
        method: "GET",
      });
      if (!res.ok) {
        throw Error(res.statusText);
        // return [];
      }
      const categories: ProductCategory[] = await res.json();
      return categories;
    } catch (error) {
      throw Error(error);
    }
  }

export {
    getCategoryFetch,
    getCategoriesFetch,
    getAllCategoriesPathsFetch
}
