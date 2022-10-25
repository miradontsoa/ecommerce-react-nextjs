// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { Product } from 'types/product';

import { Product } from "types/product";
import type { NextApiRequest, NextApiResponse } from "next";
import { products } from "data/products";
import productServices from "services/productServices";

type ErrorData = {
  message: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product | ErrorData>
) {
  // const { productId } = req.query;
  let productId = req.query?.productId;
  if (
    typeof productId === "object" &&
    Array.isArray(productId)
  )  {
    productId = productId[0];
  }
  const product = await productServices.getProduct(productId)
  if (product) {
    return res.status(200).json(product);
  } else {
    return res.status(404).json({
      message: "Not found",
    });
  }
}
