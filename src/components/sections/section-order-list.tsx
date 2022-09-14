import OrderList from "components/order/order-list";
import { useOrder } from "hooks/orderHooks";

const SectionOrderList = () => {
    
  const { countOrderItems } = useOrder();
  return (
    <>
      <div className="hero-text">
        {/* <h4>Autumn 1980</h4> */}
        <h2 className="title h-title display-2 mb-0">
          Shopping cart ({countOrderItems()})
        </h2>
      </div>
      <OrderList/>
    </>
  );
};
export default SectionOrderList