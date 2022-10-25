// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { categories } from "data/categories";
import { Product, ProductCategory } from "types/product";

/**
 * Get all products, accept several categories as filter
 * /api/products?category=women&category=shoes
 * @param req 
 * @param res 
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductCategory[]>
) {
  let categoriesResult: ProductCategory[] = [];
  let parentCategoryRef = req.query?.parent;
  // console.log(typeof parentCategoryRef);
  if (parentCategoryRef) {
    categoriesResult = categories.filter((category) => {
      if (category.parentRef === undefined || category.parentRef === null) {
        return false;
      }
      return category.ref === parentCategoryRef;
    });
  } else {
    categoriesResult = categories;
  }
  res.status(200).json(categoriesResult);
}
