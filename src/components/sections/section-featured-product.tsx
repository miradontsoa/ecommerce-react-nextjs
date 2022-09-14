import ButtonSolidA from "components/general/button/button-solid-a";
import { useOrder } from "hooks/orderHooks";
import Link from "next/link";
import { OrderItem } from "types/order";
import { Product } from "types/product";
import SectionA from "./layout/section-a";

type Props = {
  product: Product;
  marginTop?: "large" | "medium" | "small" | "none";
  marginBottom?: "large" | "medium" | "small" | "none";
  borderBottom?: "medium" | "none";
  borderTop?: "medium" | "none";
};
const SectionFeaturedProduct = ({
  product,
  marginTop,
  marginBottom,
  borderBottom,
  borderTop,
}: Props) => {
  const { addToOrder } = useOrder();

  const _addToOrder = () => {
    const orderItem: OrderItem = {
      productRef: product.ref,
      quantity: 1,
      //   colorRef: color.ref,
      //   sizeRef: size.ref,
    };
    addToOrder(orderItem);
  };
  return (
    <SectionA
      marginTop={marginTop}
      marginBottom={marginBottom}
      borderBottom={borderBottom}
      borderTop={borderTop}
      contentElement={
        <div className="card card-product-b bg-light">
          <div className="row gx-0 gy-0">
            <div className="col-12 col-lg-6 order-lg-1">
              <div className="card-img">
                <img
                  className="img-4x3"
                  alt={product?.name}
                  src={product?.image}
                />
              </div>
            </div>
            <div className="col-12 col-lg-6 order-lg-2">
              <div className="card-body ps-lg-5">
                <div className="row ">
                  <div className="col">
                    <h4 className="h3 fw-light">
                      {product?.priceUnit}
                      {product?.price}
                    </h4>
                  </div>
                </div>

                <div className="row mt-0">
                  <div className="col">
                    <h3 className="fw-bolder display-6">{product?.name}</h3>
                  </div>
                </div>

                <div className="row">
                  <div className="col col-lg-9">
                    <p className="text-lg">{product?.description}</p>
                  </div>
                </div>

                <div className="btn-group-a mt-5">
                  <Link href={`/products/${product?.ref}`}>
                    <ButtonSolidA
                        className="me-1"
                      onClick={() => {
                        _addToOrder();
                      }}
                      color="light"
                      text="View item"
                    />
                  </Link>
                  <ButtonSolidA
                    onClick={() => {
                      _addToOrder();
                    }}
                    color="primary"
                    text="Add to order"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};
export default SectionFeaturedProduct;
