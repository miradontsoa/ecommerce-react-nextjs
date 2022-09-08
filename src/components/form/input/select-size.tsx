import React from "react";
import { ProductSize } from "types/product";

type Props = {
  selectedSize?: ProductSize;
  sizes: ProductSize[];
  onSizeSelected?: (size: ProductSize) => void;
};

const SelectSize = ({ selectedSize, sizes, onSizeSelected }: Props) => {
  return (
    <fieldset className="radio-group radio-group-inline">
      {sizes?.map((size) => {
        return (
          <div className="form-check-size" key={size.ref}>
            <input
              className="form-check-input"
            //   id={size.ref}
              type="radio"
              name="size"
              value={size.ref}
              defaultChecked={size.ref === selectedSize.ref}
              onChange={(e) => {
                let _selectedSize = sizes.find((_size) => {
                  return _size.ref === e.target.value;
                });
                onSizeSelected(_selectedSize);
              }}
            />
            <span className="form-check-size-icon">{size.name}</span>
          </div>
        );
      })}
    </fieldset>
  );
};

export default SelectSize;
