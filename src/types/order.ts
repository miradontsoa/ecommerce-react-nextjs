import { Product } from "./product"

export type Order = {
    // products : Product[],
    items? : OrderItem[],
    shipping?: OrderShipping,
    shippingAddress?: Address
}

export type OrderItem = {
    product: Product,
    // productRef: string,
    quantity: number,
    colorRef?: string, // color ref
    sizeRef?: string,

}
export type OrderShipping = {
    name: string,
    ref: string,
}
export type Address = {
    ref: string,
    name?: string, // primary
    line1: string,
    line2?: string,
    postcode?:string,
    city?: string,
}

