import {
  Address,
  OrderItem,
  OrderItemDetail,
  OrderShipping,
  OrderSum,
} from "types/order";
import productsServices from "./productServices";

const getShipping = async (ref: string) => {
  // await new Promise(resolve => setTimeout(resolve, 100));
  let orderShipping: OrderShipping = {
    name: "Free shipping",
    ref,
  };
  return orderShipping;
};
const getAddress = async (ref: string) => {
  // await new Promise(resolve => setTimeout(resolve, 100));
  let orderShippingAddress: Address = {
    name: "Main address",
    line1: "12 Street left right",
    ref,
  };
  return orderShippingAddress;
};

const getOrderItemsDetail = async (orderItems: OrderItem[]) : Promise<OrderItemDetail[]>=> {
  let items: OrderItemDetail[] = [];
  if (orderItems) {
    let updatedOrderItems = await Promise.all(
      orderItems.map(async (orderItem) => {
        let orderItemDetail: OrderItemDetail = { ...orderItem };
        let product = await productsServices.getProduct(orderItem.productRef);
        if (product) {
          orderItemDetail.product = product;
        }
        if (orderItem.sizeRef) {
          let size = product.sizes.find((size) => {
            return size.ref === orderItem.sizeRef;
          });
          orderItemDetail.size = size;
        }
        if (orderItem.colorRef) {
          let color = product.colors.find((color) => {
            return color.ref === orderItem.colorRef;
          });
          orderItemDetail.color = color;
        }
        return orderItemDetail;
        // return { ...orderItem, product: product } as OrderItem;
      })
    );
    items = updatedOrderItems;
  }
  return items;
};

/**
 * Compute order sum, total, delivery fees
 * @param items 
 * @returns 
 */
const totalSumOrder = async (items: OrderItemDetail[]) => {
    let subTotal = 0;
    if (!items) {
      subTotal = 0;
    } else {
      let orderItemsPrices = items?.map((orderItem) => {
        return orderItem.quantity * orderItem.product?.price;
      });
      subTotal = orderItemsPrices.reduce((prevCount, currentCount) => {
        return prevCount + currentCount;
      });
    }
  
    let totalShipping = 0;
    let total = totalShipping + subTotal;
  
    // TODO : add taxes, discount, coupon : AWAIT FOR TAXES, COUPON, DISCOUNT here from API or ,
    const sum : OrderSum= {
      subTotal: subTotal,
      shipping: totalShipping,
      total : total,
    };
    return sum;
}

export default {
  getShipping,
  getAddress,
  getOrderItemsDetail,
  totalSumOrder,
};
