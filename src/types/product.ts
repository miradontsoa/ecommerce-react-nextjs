export interface Product {
  name: string;
  ref: string;
  description?: string;
  price?: string;
  image?: string;
  categories?: ProductCategory[];
}

export type ProductCategory = {
  name: string;
  ref: string;
};

export type ProductColor = {
  name: string;
  ref: string;
  value: string;
};
