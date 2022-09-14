import React, { createContext, useEffect, useState } from "react";
import { Order, OrderDetail } from "types/order";
import { Product } from "types/product";
import { updateOrderDetailFetch } from "utils/orderFetch";
type OrderContextType = {
  order: Order;
  setOrder?: (order: Order) => void;
  orderDetail: OrderDetail,
  setOrderDetail: (orderDetail: OrderDetail) => void;
  // addProduct?: (product: Product) => void;
};
const OrderContext = createContext({} as OrderContextType);
const OrderContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [order, setOrder] = useState({} as Order);
  const [orderDetail, setOrderDetail] = useState({} as OrderDetail);

  useEffect(() => {
    // TODO : load order data from web API or localStorage if user is not logged in
    console.warn(
      "TODO : load order data from web API or localStorage if user is not logged in"
    );
    let localOrder: Order = order
    try {
      localOrder = JSON.parse(localStorage.getItem("order"))
    } catch (error) {
      console.log("Bad value of localStorage order")
    }
    setOrder(localOrder);
  }, []);

  const loadOrderDetail = async () => {
    let _orderDetail = await updateOrderDetailFetch(
      order
    );
    if (_orderDetail) {
      setOrderDetail(_orderDetail);
    }
  };
  useEffect(() => {
    loadOrderDetail()
  }, [order])

  return (
    <OrderContext.Provider
      value={{
        order,
        setOrder,
        orderDetail,
        setOrderDetail,
        // addProduct,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export { OrderContext, OrderContextProvider };
