export interface BasketI {
    products: ProductI[]
}
export interface ProductI {
    link: string;
    title: string;
    brand: string;
    price: string;
    images: string[];
}