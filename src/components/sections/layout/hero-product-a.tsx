import ReactionA from "components/feedback/reaction-a";
import SelectColor from "components/form/input/select-color";
import SelectShipping from "components/form/input/select-shipment";
import SelectSize from "components/form/input/select-size";
import ButtonFavorite from "components/general/button/button-favorite";
import ButtonInlineA from "components/general/button/button-inline-a";
import ButtonShare from "components/general/button/button-share";
import IconA from "components/general/icon/icon-a";
import { useOrder } from "hooks/order";
import { useState } from "react";
import { OrderItem, OrderShipping } from "types/order";
import { Product, ProductColor, ProductSize } from "types/product";

type Props = {
  product: Product;
};
const HeroProductA = ({ product }: Props): React.ReactElement => {
  const { addToOrder, getOrder, getOrderItems, countOrderItems } = useOrder();

  // TODO : load it from api, context state or directly from product
  const shippings = [
    {
      name: "Free shipping",
      ref: "free",
    },
    {
      name: "Express delivery",
      ref: "express",
    },
    {
      name: "Premium delivery",
      ref: "premium",
    },
  ];

  const [color, setColor] = useState(
    product.colors ? product.colors[0] : ({} as ProductColor)
  );
  const [size, setSize] = useState(
    product.sizes ? product.sizes[0] : ({} as ProductSize)
  );
  /* const [shipping, setShipping] = useState({
    ref: "free",
    name: "cool",
  } as OrderShipping); */

  const _addToOrder = () => {
    const orderItem: OrderItem = {
      product: product,
      quantity: 1,
      colorRef: color.ref,
      sizeRef: size.ref,
    };
    addToOrder(orderItem);
  };
  return (
    <>
      <span style={{
        position: "fixed",
        backgroundColor: "#f0f",
        zIndex: "10"
      }}>
        Count : {countOrderItems()}{" "}
        {getOrderItems()?.map((orderItem, index) => (
          <div key={index}>
            <p>{orderItem.product?.ref} {orderItem.sizeRef}  {orderItem.colorRef}</p>
            <p>{orderItem.quantity}</p>
          </div>
        ))}
      </span>
      <section id="top" className="section hero hero-b hero-fit-height">
        <div className="hero-body">
          <div className="hero-content ">
            <div className="container-fluid px-0">
              <div className="row g-feature align-items-center">
                <div className="col col-12 col-lg-6">
                  <figure className="figure-slide-a">
                    <div className="img-1">
                      <img
                        className="img rounded-4"
                        src={product.image}
                        alt={product.name}
                      />
                    </div>
                  </figure>
                </div>
                <div className="col col-12 col-lg-4">
                  <article className="">
                    <h5 className="">
                      {product.categories?.map((category) => {
                        return (
                          <span className={"tag-item"} key={category.ref}>
                            {category.name}
                          </span>
                        );
                      })}
                    </h5>
                    <h2 className="title h-title h1 fw-bold mb-3">
                      {product.name}
                    </h2>
                    {product.description && (
                      <div className="text-mm mt-3">
                        <p>{product.description}</p>
                      </div>
                    )}
                    {product.price && (
                      <p className="price mb-0 h2 fw-light">{product.price}</p>
                    )}

                    <form
                      className="form-product-order"
                      onSubmit={(e) => {
                        _addToOrder();
                        e.preventDefault();
                      }}
                    >
                      <div className="row mt-4">
                        {product.colors && (
                          <div className="col-12 col-md-6">
                            <h5 className="label">Select color</h5>
                            <div className="color-chooser mt-4 mb-4">
                              <SelectColor
                                selectedColor={color}
                                onColorSelected={setColor}
                                colors={product.colors}
                              />
                            </div>
                          </div>
                        )}
                        {product.sizes && (
                          <div className="col-12 col-md-6">
                            <h5 className="label">Select size</h5>
                            <div className="size-chooser mt-4 mb-4">
                              <SelectSize
                                selectedSize={size}
                                onSizeSelected={setSize}
                                sizes={product.sizes}
                              />
                            </div>
                          </div>
                        )}
                        {/* <div className="col-12 col-md-6">
                          <h5 className="label">Shipment {shipping.ref}</h5>
                          <SelectShipping
                            selectedShipping={shipping}
                            onShippingSelected={setShipping}
                            shippings={shippings}
                          />
                        </div> */}
                      </div>

                      <div className="row mt-4">
                        <div className="col-12">
                          <button
                            type="submit"
                            className="btn btn-solid-a btn-dark btn-lg btn-full"
                          >
                            <span className="text">Add to order</span>
                            <span className="icon">
                              <i className="ion ion-md-basket"></i>
                            </span>
                          </button>
                        </div>
                      </div>

                      <div className="row mt-4">
                        <div className="col-12">
                          <div className="btn-group-b">
                            <div>
                              <ButtonFavorite productRef={product.ref}/>
                            </div>

                            <div>
                              <ButtonShare  productRef={product.ref}/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroProductA;
