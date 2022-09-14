import { ProductCategory } from "types/product";
import SectionA from "../layout/section-a";

type Props = {
    category: ProductCategory,
    parentCategory?: ProductCategory
}
const HeroCategory = ({category, parentCategory}: Props) => {
  return (
    <SectionA
      borderTop={"none"}
      borderBottom={"none"}
      marginTop={"none"}
      marginBottom={"none"}
      contentElement={
        <div className="hero-text">
          {parentCategory?.name && <h4>{parentCategory.name}</h4>}
          <h2 className="title h-title display-2 mb-0">{category?.name}</h2>
        </div>
      }
    />
  );
};
export default HeroCategory;
