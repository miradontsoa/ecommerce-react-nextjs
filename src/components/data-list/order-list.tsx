import classNames from "classnames";
import Image from "next/image";
import { OrderItem } from "types/order";
import styles from "./order-list.module.scss";
type Props = {
  orderItems: OrderItem[];
};
const OrderList = ({ orderItems }: Props) => {
  return (
    <>
    TODO: load product info from server, use product.ref (not full product info) only for orderItems state
      <div className={classNames(styles.listHead)}>
        <div className="cart-list-columns">
          <div className="product">Product</div>
          <div className="quantity">Quantity</div>
          <div className="price">Subtotal</div>
        </div>
      </div>

      <div className={classNames(styles.listContent)}>
        {orderItems?.map((orderItem, index) => (
          <div className="cart-list-columns" key={index}>
            <div className="product">
              <div className="row">
                <div className="col-auto">
                  <Image
                    src={orderItem?.product?.image}
                    alt={orderItem?.product?.name}
                    width={160}
                    height={160}
                  />
                </div>
                <div className="col">
                  <h4>{orderItem?.product?.name}</h4>
                  </div>
              </div>
            </div>
            <div className="quantity">{orderItem?.quantity}</div> 
            {/* <div className="price">{orderItem?.quantity * orderItem?.product?.price}</div> */}
            <div className="price">{orderItem?.quantity * orderItem?.product?.price}</div>
          </div>
        ))}
      </div>
    </>
  );
};
export default OrderList;
