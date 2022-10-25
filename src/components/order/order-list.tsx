import classNames from "classnames";
import ButtonInlineA from "components/general/button/button-inline-a";
import ButtonSolidA from "components/general/button/button-solid-a";
import IconA from "components/general/icon/icon-a";
import { useOrder } from "hooks/orderHooks";
import Link from "next/link";
import React from "react";
import styles from "./order-list.module.scss";
type Props = {};
const OrderList = ({}: Props) => {
  const { getOrderItemsDetailed, addOrderItemQuantity, removeOrderItem } =
    useOrder();
  const orderItems = getOrderItemsDetailed();

  return (
    <>
      {/* List display head */}
      <div className={classNames(styles.listHead)}>
        <div className="cart-list-columns">
          <div className="product">
            <h5>Product</h5>
          </div>
          <div className="quantity">
            <h5>Quantity</h5>
          </div>
          <div className="price text-end">
            <h5>Subtotal</h5>
          </div>
        </div>
      </div>
      {/* List content */}
      <div className={classNames(styles.listContent)}>
        {orderItems?.map((orderItem, index) => (
          <div
            className={classNames("cart-list-columns", styles.orderLine)}
            key={`${orderItem.productRef}${orderItem.colorRef}${orderItem.sizeRef}`}
          >
            <div className="product">
              <div className="row">
                <div className="col-auto">
                  {orderItem?.product && (
                    <img
                      className={styles.image}
                      src={orderItem?.product?.image}
                      alt={orderItem?.product?.name}
                      // width={160}
                      // height={160}
                    />
                  )}
                </div>
                <div className="col">
                  <div className={styles.cell}>
                    <h4 className={styles.title}>{orderItem?.product?.name}</h4>
                    {orderItem?.product && (
                      <p className={classNames(styles.unitPrice, "mb-0")}>
                        {orderItem?.product?.priceUnit || "$"}
                        {orderItem?.product?.price}
                      </p>
                    )}
                    {orderItem?.sizeRef && (
                      <p className={classNames(styles.variant, "mb-0")}>
                        Size: {orderItem?.size?.name}
                      </p>
                    )}
                    {orderItem?.colorRef && (
                      <p className={classNames(styles.variant, "mb-0")}>
                        Color: {orderItem?.color?.name}
                      </p>
                    )}
                    <Link href={`products/${orderItem?.product?.ref}`}>
                      <a>
                        <ButtonInlineA text="Details"  />
                      </a>
                    </Link>
                    {/* <ButtonSolidA text="Modify" color="primary" /> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="quantity">
              <div className={styles.cell}>
                <div className={styles.qtyGroup}>
                  <ButtonSolidA
                    onClick={() => {
                      if (orderItem?.quantity > 1) {
                        addOrderItemQuantity(orderItem, -1);
                      }
                    }}
                    color="primary"
                    size="x-small"
                    iconOnly={true}
                    icon={
                      <IconA
                        size="xx-small"
                        imageElement={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="2"
                            viewBox="0 0 20 2"
                          >
                            <path
                              fill="currentColor"
                              id="remove"
                              d="M25,15H7a1,1,0,0,0,0,2H25a1,1,0,0,0,0-2Z"
                              transform="translate(-6 -15)"
                              fillRule="evenodd"
                            />
                          </svg>
                        }
                      />
                    }
                  />
                  <span className={classNames(styles.qty)}>
                    {orderItem?.quantity}
                  </span>

                  <ButtonSolidA
                    onClick={() => {
                      if (orderItem?.quantity >= 0) {
                        addOrderItemQuantity(orderItem, 1);
                      }
                    }}
                    color="primary"
                    size="x-small"
                    iconOnly={true}
                    icon={
                      <IconA
                        size="xx-small"
                        imageElement={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fill="currentColor"
                              id="add"
                              d="M15,15V7a1,1,0,0,1,2,0v8h8a1,1,0,0,1,0,2H17v8a1,1,0,0,1-2,0V17H7a1,1,0,0,1,0-2Z"
                              transform="translate(-6 -6)"
                              fillRule="evenodd"
                            />
                          </svg>
                        }
                      />
                    }
                  />
                </div>
              </div>
            </div>
            {/* <div className="price">{orderItem?.quantity * orderItem?.product?.price}</div> */}
            <div className="price text-end">
              <div className={styles.cell}>
                <p className={classNames(styles.price)}>
                  {orderItem?.product?.priceUnit || "$"}
                  {orderItem?.quantity * orderItem?.product?.price}
                </p>
                <div className="mt-3">
                  <ButtonSolidA
                    onClick={() => {
                      removeOrderItem(orderItem);
                    }}
                    text="Remove"
                    size="small"
                    color="alert"
                    iconPosition="left"
                    buttonStyle="outlined"
                    borderWidth="thin"
                    icon={
                      <IconA
                        size="xx-small"
                        imageElement={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="49"
                            height="49"
                            viewBox="0 0 49 49"
                          >
                            <path
                              fill="currentColor"
                              id="close"
                              d="M150.571,144.458l17.109-17.109a4.326,4.326,0,0,0-6.112-6.123l-17.109,17.109L127.35,121.227a4.33,4.33,0,0,0-6.123,6.123l17.109,17.109-17.109,17.109a4.33,4.33,0,0,0,6.123,6.123l17.109-17.109,17.109,17.109a4.33,4.33,0,1,0,6.123-6.123Z"
                              transform="translate(-119.958 -119.958)"
                            />
                          </svg>
                        }
                      />
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default OrderList;
