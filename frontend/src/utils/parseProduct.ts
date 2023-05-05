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
                const el = document.querySelectorAll(`${selectors['image']}`)
                el.forEach(item => {
                    console.log(item)
                    if (item.getAttribute('src')) {
                        // @ts-ignore
                        product[key] = [...product[key], item.getAttribute('src')];
                    }
                })
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
            return null;
        }
    } else {
        return null;
    }
}