import OrderList from "components/data-list/order-list";
import LayoutDefault from "components/layout/layout-default";
import SectionOrderList from "components/sections/section-order-list";

const CartPage = ({}) => {
  return (
    <LayoutDefault>
      <div className="with-right-sidebar-layout">
        <div className="sidebar">
          <div className="sidebar-nav">Total</div>
        </div>

        <div className="page-content">
          <SectionOrderList />
        </div>
      </div>
    </LayoutDefault>
  );
};
export default CartPage;
