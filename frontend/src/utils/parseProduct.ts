import {ProductI} from "../types";
export const parseProduct = (selectors:any, url: string) => {
    if (selectors) {
        let product:ProductI = {
            link: url,
            name: "",
            brand: "",
            price: "",
            images: [],
        };
        Object.keys(product).forEach(key => {
            if (key === 'images') {
                let el = document.querySelectorAll(`${selectors['image']}`)
                el.forEach(item => {
                    if (item.getAttribute('src')) {
                        // @ts-ignore
                        product[key] = [...product[key], item.getAttribute('src')];
                    }
                })
            } else if (key ==='price') {
                let el = document.querySelector(`${selectors['discount_price']}`)
                if (el?.innerHTML) {
                    // @ts-ignore
                    product['price'] = el?.innerHTML;
                } else {
                    el = document.querySelector(`${selectors['price']}`)
                    if (el?.innerHTML) {
                        // @ts-ignore
                        product['price'] = el?.innerHTML;
                    }
                }
            } else {
                const el = document.querySelector(`${selectors[key]}`)
                if (el?.innerHTML) {
                    // @ts-ignore
                    product[key] = el?.innerHTML;
                }
            }
        })
        if(product.name && product.price) {
            return product;
        } else {
            console.log("Продукт не найден. Причина:")
            if(!product.name) {
                console.log("Имя не найдено по сeлектору")
            }
            if (!product.price) {
                console.log("Цена не найдена по сeлектору")
            }
            return null;
        }
    } else {
        return null;
    }
}