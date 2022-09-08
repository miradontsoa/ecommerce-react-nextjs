import OrderList from "components/data-list/order-list";
import { useOrder } from "hooks/order";

const SectionOrderList = () => {
    
  const { getOrderItems, countOrderItems } = useOrder();
  return (
    <>
      <div className="hero-text">
        {/* <h4>Autumn 1980</h4> */}
        <h2 className="title h-title display-2 mb-0">
          Shopping cart ({countOrderItems()})
        </h2>
      </div>
      <OrderList orderItems={getOrderItems()} />
    </>
  );
};
export default SectionOrderList