import React  from "react";
import { ProductColor } from "types/product";

type Props = {
  selectedColor?: ProductColor;
  colors: ProductColor[];
  onColorSelected?: (color: ProductColor) => void;
};
const SelectColor = ({ selectedColor, colors, onColorSelected }: Props) => {
  return (
    <>
      <fieldset className="radio-group radio-group-inline">
        {colors?.map((colorItem) => {
          return (
            <div className="form-check-color" key={colorItem.ref}>
              <input
                className="form-check-input"
                //   id="color-3"
                type="radio"
                name="color"
                value={colorItem.ref}
                defaultChecked={colorItem.ref === selectedColor.ref}
                onChange={(e) => {
                  let _selectedColor = colors.find((_color) => {
                    return _color.ref === e.target.value;
                  });
                  onColorSelected(_selectedColor);
                }}
              />
              <div
                className="form-check-color-icon"
                style={{ backgroundColor: colorItem.color }}
              >
                {" "}
              </div>
            </div>
          );
        })}
      </fieldset>
    </>
  );
};
export default SelectColor;
