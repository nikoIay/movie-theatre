export interface Product {
    id: number;
    name: string;
    price: number;
}

export interface ProductDiscount {
    from: number;
    to: number;
}

export interface Discounts {
    [productId: number]: ProductDiscount;
}
