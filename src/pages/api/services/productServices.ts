import { products } from "data/products";
import { Product } from "types/product";

const getProduct = async (productId: string) : Promise<Product | null> => {
    await new Promise(resolve => setTimeout(resolve, 100));
    if (productId) {
        const product = products.find((product) => {
          return product.ref === productId;
        });
        if (!product) {
          return null;
        }
        return product;
      } else {
        return null;
      }
}

export default {
    getProduct
}