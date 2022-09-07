// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { products } from "data/products";
import { Product } from "types/product";

/**
 * Get all products, accept several categories as filter
 * /api/products?category=women&category=shoes
 * @param req 
 * @param res 
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  let productsResult: Product[] = [];
  let categoryQuery = req.query?.category;
  console.log(typeof categoryQuery);
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
        return product.categories.every((productCategory) => {
          return categoryQuery.includes(productCategory.ref);
        });
      }
      // unknown category value
      else {
        return false;
      }
    });
  } else {
    productsResult = products;
  }
  res.status(200).json(productsResult);
}
