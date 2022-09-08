import { OrderShipping } from "types/order";

type Props = {
  selectedShipping: OrderShipping;
  shippings: OrderShipping[];
  onShippingSelected: (shipment: OrderShipping) => void;
};
const SelectShipping = ({
  selectedShipping,
  onShippingSelected: onShippingSelected,
  shippings,
}: Props) => {
  return (
    <select
      className="form-select form-select-a mt-3"
      value={selectedShipping.ref}
      name="shipment"
      onChange={(e) => {
        // setShipment(e.target.value);
        let _selectedShipping = shippings.find((_shipping) => {
          return _shipping.ref === e.target.value
        }) 
        onShippingSelected(_selectedShipping);
      }}
    >
      {shippings.map((shipping) => (
        <option value={shipping.ref} key={shipping.ref}>{shipping.name}</option>
      ))}
      {/* <option value="free">Free shipping</option>
      <option value="premium">Fast delivery</option> */}
    </select>
  );
};

export default SelectShipping;
