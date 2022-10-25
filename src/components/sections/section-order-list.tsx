import OrderList from "components/order/order-list";
import { useOrder } from "hooks/orderHooks";

const SectionOrderList = () => {
    
  const { countOrderItems } = useOrder();
  const count = countOrderItems();
  return (
    <>
      <div className="hero-text">
        {/* <h4>Autumn 1980</h4> */}
        <h2 className="title h-title display-2 mb-0 font-title">
          Cart {count> 0 && <span className="fw-light">({count})</span>}
        </h2>
      </div>
      <OrderList/>
    </>
  );
};
export default SectionOrderList