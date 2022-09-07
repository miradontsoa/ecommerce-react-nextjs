// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { Product } from 'types/product';

import { Product } from "types/product";
import type { NextApiRequest, NextApiResponse } from "next";
import { products } from "data/products";

type ErrorData = {
  message: string;
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product | ErrorData>
) {
  // const { productId } = req.query;
  const productId = req.query?.productId;
  if (productId) {
    const product = products.find((product) => {
      return product.ref === productId;
    });
    if (!product) {
      return res.status(404).json({
        message: "Not found",
      });
    }
    return res.status(200).json(product);
  } else {
    return res.status(404).json({
      message: "Not found",
    });
  }
}
