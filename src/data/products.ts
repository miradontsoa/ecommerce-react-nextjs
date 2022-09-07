import { Product } from "types/product";

export const shoes: Product[] = [
  {
    name: "Basket Neki",
    ref: "basket-a",
    description:
      "A very special paire de basket made of leather and selected cotton material.",
    price: "$150",
    image: "/img/img-3-square.jpg",
    categories: [
      {
        name: "Shoes",
        ref: "shoes",
      },
      {
        name: "Men",
        ref: "men",
      },
    ],
  },
  {
    name: "Versonic Basket",
    ref: "basket-b",
    description:
      "A very special paire de basket made of leather and selected cotton material.",
    price: "$150",
    image: "/img/img-6-square.jpg",
    categories: [
      {
        name: "Shoes",
        ref: "shoes",
      },
      {
        name: "Women",
        ref: "women",
      },
    ],
  },
  {
    name: "Running Basket",
    ref: "basket-c",
    description:
      "A very special paire de basket made of leather and selected cotton material.",
    price: "$150",
    image: "/img/img-2-square.jpg",
    categories: [
      {
        name: "Shoes",
        ref: "shoes",
      },
      {
        name: "Leather",
        ref: "leather",
      },
    ],
  },
  {
    name: "Coolverse",
    ref: "basket-d",
    description:
      "A very special paire de basket made of leather and selected cotton material.",
    price: "$150",
    image: "/img/img-5-square.jpg",
    categories: [
      {
        name: "Shoes",
        ref: "shoes",
      },
      {
        name: "Women",
        ref: "women",
      },
    ],
  },
];

export const shirts: Product[] = [
  {
    name: "Cool Shirt",
    ref: "shirt-a",
    description:
      "A very special T shirt made of cotton from green and responsible cotton fields.",
    price: "$150",
    image: "/img/img-5-square.jpg",
    categories: [
      {
        name: "Cloth",
        ref: "cloth",
      },
      {
        name: "T-shirt",
        ref: "tshirt",
      },
    ],
  },
  {
    name: "Blank T-shirt",
    ref: "shirt-b",
    description:
      "A very special T shirt made of cotton from green and responsible cotton fields.",
    price: "$150",
    image: "/img/img-7-square.jpg",
    categories: [
      {
        name: "Cloth",
        ref: "cloth",
      },
      {
        name: "T-shirt",
        ref: "tshirt",
      },
    ],
  },
];

export const pants: Product[] = [
  {
    name: "Green Pants",
    ref: "pant-a",
    description:
      "A very special pant made of cotton from green and responsible cotton fields.",
    price: "$150",
    image: "/img/img-6-square.jpg",
    categories: [
      {
        name: "Pant",
        ref: "pant",
      },
      {
        name: "Women",
        ref: "women",
      },
    ],
  },
  {
    name: "Paire de Jean",
    ref: "pant-b",
    description:
      "A very special paire de jean made of cotton from green and responsible cotton fields.",
    price: "$150",
    image: "/img/img-7-square.jpg",
    categories: [
      {
        name: "Cloth",
        ref: "cloth",
      },
      {
        name: "T-shirt",
        ref: "tshirt",
      },
    ],
  },
];

export const products = [...shoes, ...shirts, ...pants];

/* export default {
  products,
  shirts,
  shoes,
  pants,
}; */

