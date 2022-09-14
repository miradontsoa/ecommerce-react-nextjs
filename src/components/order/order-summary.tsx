import React, {useContext} from "react";
import classNames from "classnames";
import ButtonInlineA from "components/general/button/button-inline-a";
import ButtonSolidA from "components/general/button/button-solid-a";
import { OrderContext } from "contexts/order-context";
import { useOrder } from "hooks/orderHooks";
import { OrderDetail } from "types/order";
import styles from "./order-summary.module.scss";

type Props = {
  orderDetail?: OrderDetail;
};
const OrderSummary = ({
  //  orderDetail 
}: Props) => {
  // const { getOrderDetail } = useOrder();
  // const orderDetail = getOrderDetail();

  const orderContext = useContext(OrderContext);
  const orderDetail = orderContext.orderDetail;

  return (
    <div className="">
      <div className={classNames(styles.head)}>
        <h4 className="fw-bold mb-0">Summary</h4>
      </div>
      <div className={classNames(styles.body)}>
        <div className={classNames(styles.line)}>
          <div className={"row"}>
            <div className="col">Subtotal</div>
            <div className="col-auto">{orderDetail?.sum?.subTotal}</div>
          </div>
        </div>
        <div className={classNames(styles.line)}>
          <div className={"row"}>
            <div className="col">Delivery (Free shipping)</div>
            <div className="col-auto">{orderDetail?.sum?.shipping}</div>
          </div>
        </div>

        <div className={classNames(styles.line, styles.total)}>
          <div className={"row"}>
            <div className="col">Total</div>
            <div className="col-auto">{orderDetail?.sum?.total}</div>
          </div>
        </div>
      </div>
      <div className={classNames(styles.footer)}>
        <ButtonSolidA width="full" color="primary" text="Pay now" />
      </div>

      <div>
        <div className={classNames(styles.line, "mt-4")}>
          <div className={styles.deliveryInfo}>
            <h5>Delivery information</h5>
            <div className="text-md">
              <span className="me-2">Free shipping</span>
              <ButtonInlineA text="Edit" />
            </div>

            <div className="h6 mt-2">
              <span className="me-2">Address:</span>
            </div>
            <address className="m-0">
              <p className="text-md mb-0">
                M. Julien Bertrand
                <b />
                12 Street, South Antartica
              </p>

              <ButtonInlineA className="text-md" text="Modify address" />
            </address>
            {/* <ButtonSolidA
              buttonStyle="solid"
              size="small"
              color="primary"
              text="Change address"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
