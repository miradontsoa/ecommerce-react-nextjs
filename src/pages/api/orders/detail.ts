// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Order, OrderDetail } from "types/order";
import orderServices from "pages/api/services/orderServices";

type ErrorMessage = {
  message?: string;
  code?: number;
};
/**
 * Return order details from order
 * To order object as request body (JSON)
 * */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<OrderDetail | ErrorMessage>
) {
  if (req.method !== 'PUT') {
    res.status(500).send({ message: 'Method not allowed' })
    return
  }

  let order: Order = req.body;
  let orderDetail: OrderDetail = {};
  // console.log(order)
  if (!order || Object.keys(order).length === 0) {
    // If object is null or is empty
    res.status(500).json({
      message: "Error, JSON body content required",
    });
    return;
  }
  // let shipping = await getShipping(order?.shippingRef);
  // let shippingAddress = await getAddress(order?.shippingAddressRef);
  // let shipping;
  // let shippingAddress;
  let [shipping, shippingAddress, items] = await Promise.all([
    orderServices.getShipping(order?.shippingRef),
    orderServices.getAddress(order?.shippingAddressRef),
    orderServices.getOrderItemsDetail(order?.items),
  ]);
  const sum = await orderServices.totalSumOrder(items);
  orderDetail = {
    sum : sum,
    shipping,
    shippingAddress,
    items,
  };

  res.status(200).json(orderDetail);
}
