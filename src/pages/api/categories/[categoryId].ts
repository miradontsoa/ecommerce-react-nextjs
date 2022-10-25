// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { Product } from 'types/product';

import { Product, ProductCategory } from "types/product";
import type { NextApiRequest, NextApiResponse } from "next";
import categoryServices from "../services/categoryServices";

type ErrorData = {
  message: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductCategory | ErrorData>
) {
  // const { productId } = req.query;
  let categoryId = req.query?.categoryId;
  if (
    typeof categoryId === "object" &&
    Array.isArray(categoryId)
  )  {
    categoryId = categoryId[0];
  }
  const category = await categoryServices.getCategory(categoryId)
  if (category) {
    return res.status(200).json(category);
  } else {
    return res.status(404).json({
      message: "Not found",
    });
  }
}
