// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Product } from "types/product";
import productServices from "services/productServices";

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
  let sort = req.query?.sort?.toString() as "random" | "featured" | "recents" | "trending" | "popular";
  let maxCountQuery = req.query?.maxCount;
  productsResult =  productServices.getProducts({
    categories: categoryQuery,
    sort: sort,
    maxCount: parseInt(maxCountQuery?.toString()),
  })
  res.status(200).json(productsResult);
}
