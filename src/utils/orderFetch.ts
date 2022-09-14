import { ENDPOINT } from "config/constants";
import { Order, OrderDetail, OrderItem } from "types/order";

const updateOrderDetailFetch = async (order: Order): Promise<OrderDetail> => {
  const apiUri = `${ENDPOINT.API}/orders/detail`;
  // const apiUri = `/api/products/${productId}`;
  const body = JSON.stringify(order);
//   console.log(body);
  if (!body || Object.keys(order).length == 0) {
    return order;
  }
  const res = await fetch(apiUri, {
    method: "PUT",
    headers: {
        'Content-Type': 'application/json'
      },
    body: body || '{}',
  });
  if (!res.ok) {
    console.log(body);
    console.log(res);
    // throw Error(res.statusText);
  }
  const orderDetail: OrderDetail = await res.json();
  if (!orderDetail) {
    return null;
  }
  return orderDetail;
};

export {
  updateOrderDetailFetch ,
};
