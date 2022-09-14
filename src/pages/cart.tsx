import OrderList from "components/order/order-list";
import LayoutDefault from "components/layout/layout-default";
import SectionOrderList from "components/sections/section-order-list";
import OrderSummary from "components/order/order-summary";
import { useOrder } from "hooks/orderHooks";

const CartPage = ({}) => {
  return (
    <LayoutDefault>
      <div className="with-right-sidebar-layout">
        <div className="sidebar">
          <div className="sidebar-nav">
            <OrderSummary />
          </div>
        </div>

        <div className="page-content">
          <SectionOrderList />
        </div>
      </div>
    </LayoutDefault>
  );
};
export default CartPage;
