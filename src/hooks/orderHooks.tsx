import { OrderContext } from "contexts/order-context";
import React, { useContext, useEffect, useState } from "react";
import { OrderItem, OrderItemDetail } from "types/order";
import { getProduct } from "utils/productUtils";

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

  const getOrder = () => {
    return orderContext.order;
  };
  const getOrderItems = () => {
    return orderContext.order?.items || [];
  };

  const getDetailedOrderItems = (orderItems: OrderItem[]) => {
    const [_orderItems, setOrderItems] = useState(
      orderItems as OrderItemDetail[]
    );
    const updateOrderItemsInfo = async () => {
      if (orderItems) {
        let updatedOrderItems = await Promise.all(
          orderItems.map(async (orderItem) => {
            let orderItemDetail: OrderItemDetail = { ...orderItem };
            let product = await getProduct(orderItem.productRef);
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
        setOrderItems(updatedOrderItems);
      }
    };
    useEffect(() => {
      updateOrderItemsInfo();
    }, [orderItems]);
    return _orderItems;
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

  /**
   * Sum of the ordere items
   * TODO : load it from the server not from the frontend
   * @returns
   */
  const sumOfOrder = () => {
    // load latest product info from server
    // const [sumOfOrderValues, setSumOfOrderValues] = useState({
    //   subTotal: 0,
    //   shipping: 0,
    //   total: 0,
    // });
    // TODO : TODO : load it from the server not from the frontend
    // useEffect(() => {
    //   const sumOrderFromServer = await getSumOfOrder();
    //   setSumOfOrderValues(sumOrderFromServer)
    // }, order?.items)
    // return sumOfOrderValues;

    const _orderItems = getDetailedOrderItems(order?.items);
    let subTotal = 0;
    if (!_orderItems) {
      subTotal = 0;
    } else {
      let orderItemsPrices = _orderItems?.map((orderItem) => {
        return orderItem.quantity * orderItem.product?.price;
      });
      subTotal = orderItemsPrices.reduce((prevCount, currentCount) => {
        return prevCount + currentCount;
      });
    }

    let shipping = 0;
    let total = shipping + subTotal;

    // TODO : add taxes,
    return {
      subTotal,
      shipping,
      total,
    };
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
    getDetailedOrderItems,
    countOrderItems,
    sumOfOrder,
    setShipping,
  };
}
