import React, { createContext, useEffect, useState } from "react";
import { Order } from "types/order";
import { Product } from "types/product";
type OrderContextType = {
  order: Order;
  setOrder?: (order: Order) => void;
  // addProduct?: (product: Product) => void;
};
const OrderContext = createContext({} as OrderContextType);
const OrderContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [order, setOrder] = useState({} as Order);

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

  return (
    <OrderContext.Provider
      value={{
        order,
        setOrder,
        // addProduct,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export { OrderContext, OrderContextProvider };
