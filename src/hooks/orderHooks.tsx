import { OrderContext } from "contexts/order-context";
import { useContext } from "react";
import { OrderItem } from "types/order";

/**
 * Add order item to orders
 * @param orderItem
 */
export function useOrder() {
  // TODO : replace it useContext with recoil or redux???
  const orderContext = useContext(OrderContext);
  const order = orderContext.order;
  /**
   * add an item to orederItem
   */
  const addToOrder = (orderItem: OrderItem) => {
    if (!orderItem) {
      console.error("No oreder Item");
      return;
    }
    let _items = [];
    if (order?.items) {
      // There are elements in order
      // if item already exist, combine it and add quantity
      let itemExist = false;
      order.items.forEach((item) => {
        const sameRef = item.productRef === orderItem?.productRef;
        const sameColor = item.colorRef === orderItem?.colorRef;
        const sameSize = item.sizeRef === orderItem?.sizeRef;
        if (sameRef && sameColor && sameSize) {
          item.quantity += orderItem.quantity;
          itemExist = true;
        }
      });

      if (itemExist) {
        // Update current order item
        _items = [...order?.items];
      } else {
        // Add orderItem as new element
        _items = [...order?.items, orderItem];
      }
    } else {
      // No elements in order so set orderItem as first element
      _items = [orderItem];
    }
    // TODO : send orders temp cart to backend via API
    const newOrder = { ...order, items: _items };
    console.warn(
      "TODO : send orders temp cart to backend via API or to localStorage if user is not logged in"
    );
    localStorage.setItem("order", JSON.stringify(newOrder));
    orderContext.setOrder(newOrder);
  };

  const removeOrderItem = (orderItem: OrderItem) => {
    const _items = order?.items?.filter((item) => {
      const sameRef = item.productRef === orderItem?.productRef;
      const sameColor = item.colorRef === orderItem?.colorRef;
      const sameSize = item.sizeRef === orderItem?.sizeRef;
      return !(sameRef && sameColor && sameSize);
    });
    const newOrder = { ...order, items: _items };
    console.warn(
      "TODO : send orders temp cart to backend via API or to localStorage if user is not logged in"
    );
    localStorage.setItem("order", JSON.stringify(newOrder));
    orderContext.setOrder(newOrder);
  };

  const addOrderItemQuantity = (orderItem: OrderItem, value = 1) => {
    let _items = [];
    let itemExist = false;
    order.items.forEach((item) => {
      const sameRef = item.productRef === orderItem?.productRef;
      const sameColor = item.colorRef === orderItem?.colorRef;
      const sameSize = item.sizeRef === orderItem?.sizeRef;
      if (sameRef && sameColor && sameSize) {
        item.quantity += value;
        itemExist = true;
      }
    });

    if (itemExist) {
      // Update current order item
      _items = [...order?.items];
    }
    const newOrder = { ...order, items: _items };
    console.warn(
      "TODO : send orders temp cart to backend via API or to localStorage if user is not logged in"
    );
    localStorage.setItem("order", JSON.stringify(newOrder));
    orderContext.setOrder(newOrder);
  };

  /**
   * Get a specific order
   * @returns
   */
  const getOrder = () => {
    return orderContext.order;
  };

  /**
   * Get all order items
   * @returns
   */
  const getOrderItems = () => {
    return orderContext.order?.items || [];
  };

  const getOrderItemsDetailed = () => {
    const orderContext = useContext(OrderContext);
    return orderContext.orderDetail?.items;
  };

  /**
   * Count items quantity
   * @returns
   */
  const countOrderItems = () => {
    if (!orderContext.order?.items) {
      return 0;
    }
    let counts = orderContext.order?.items?.map((orderItem) => {
      return orderItem.quantity;
    });
    return counts.reduce((prevCount, currentCount) => {
      return prevCount + currentCount;
    });
    // return orderContext.order?.items?.length || 0;
  };

  const setShipping = () => {
    // TODO : set shipping info
  };
  return {
    addToOrder,
    removeOrderItem,
    addOrderItemQuantity,
    getOrder,
    getOrderItems,
    getOrderItemsDetailed,
    countOrderItems,
    setShipping,
  };
}
