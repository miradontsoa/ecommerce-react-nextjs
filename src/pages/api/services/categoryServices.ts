import { categories } from "data/categories";
import { ProductCategory } from "types/product";

const getCategory = async (categoryId: string) : Promise<ProductCategory | null> => {
    await new Promise(resolve => setTimeout(resolve, 100));
    if (categoryId) {
        const category = categories.find((category) => {
          return category.ref === categoryId;
        });
        if (!category) {
          return null;
        }
        return category;
      } else {
        return null;
      }
}

export default {
  getCategory
}