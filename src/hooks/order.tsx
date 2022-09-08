import { OrderContext } from "contexts/order-context";
import React, { useContext } from "react";
import { OrderItem } from "types/order";

/**
 * Add order item to orders
 * @param orderItem
 */
export function useOrder() {
	const orderContext = useContext(OrderContext);
	const order = orderContext.order;
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
				const sameRef = item.product?.ref === orderItem?.product?.ref;
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
		const newOrder = { ...order, items: _items }
		console.warn("TODO : send orders temp cart to backend via API or to localStorage if user is not logged in")
		localStorage.setItem("order", JSON.stringify(newOrder));
		orderContext.setOrder(newOrder);
	};

	const getOrder = () => {
		return orderContext.order;
	};
	const getOrderItems = () => {
		return orderContext.order?.items || [];
	};

	/**
	 * Count items quantity
	 * @returns 
	 */
	const countOrderItems = () => {
		if (! orderContext.order?.items) {
			return 0;
		}
		let counts = orderContext.order?.items?.map(orderItem => {
			return orderItem.quantity;
		})
		return counts.reduce((prevCount, currentCount) => {
			return prevCount + currentCount;
		})
		// return orderContext.order?.items?.length || 0;
	};
	const setShipping = () => {
		// TODO : set shipping info
	};
	return {
		addToOrder,
		getOrder,
		getOrderItems,
		countOrderItems,
		setShipping,
	};
}
