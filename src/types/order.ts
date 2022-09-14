import { Product, ProductColor, ProductSize } from "./product";

export interface Order {
  // products : Product[],
  items?: OrderItem[];
//   shipping?: OrderShipping;
//   shippingAddress?: Address;
  shippingRef?: string;
  shippingAddressRef?: string;
}
export interface OrderDetail {
  items?: OrderItemDetail[];
  shipping?: OrderShipping;
  shippingAddress?: Address;
  sum?: OrderSum;
}

export type OrderItem = {
  product?: Product;
  productRef: string;
  quantity: number;
  colorRef?: string; // color ref
  sizeRef?: string;
};

export type OrderSum = {
  subTotal: number;
  total: number;
  shipping?: number;
  taxes?: number;
  discount?: number;
  priceUnit?: string;
};
export interface OrderItemDetail extends OrderItem {
  color?: ProductColor; // updated later
  size?: ProductSize;
}
export type OrderShipping = {
  name: string;
  ref: string;
};
export type Address = {
  ref: string;
  name?: string; // primary
  line1: string;
  line2?: string;
  postcode?: string;
  city?: string;
};
