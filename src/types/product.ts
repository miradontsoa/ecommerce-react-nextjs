export interface Product {
  name: string;
  ref: string;
  description?: string;
  price?: number;
  priceUnit?: string;
  image?: string;
  categories?: ProductCategory[];
  colors?: ProductColor[];
  sizes?: ProductSize[];
}

export type ProductCategory = {
  name: string;
  ref: string;
};

/**
 * ProductColor
 * 
 * name: readable name 
 * ref: ref, slug
 * color: rga, or hex color value
 */
export type ProductColor = {
  name: string;
  ref: string;
  // value: string;
  color: string;
};

/**
 * Product size
 */
export type ProductSize = {
  name: string;
  ref: string;
};

 