import {parseTemplates} from "../constants/parseProductTemplates";
import {ProductI} from "../types";
export const parseProduct = (url:string) => {
    const template = url.split('/')[2]
    const foundedTemplate = parseTemplates[template];
    if (foundedTemplate) {
        let product:ProductI = {
            link: url,
            title: "",
            brand: "",
            price: "",
            images: [],
        };
        Object.keys(foundedTemplate).forEach((key:string) => {
            let attr;
            let value;
            switch (key) {
                case 'images':
                    attr = foundedTemplate[key].attr;
                    value = foundedTemplate[key].value;
                    const els = document.querySelectorAll(`[${attr}^="${value}"]`)
                    const images:any[] = []
                    els.forEach(el => {
                        images.push(el.getAttribute('src'))
                    })
                    if (images.length > 0) {
                        // @ts-ignore
                        product[key] = images;
                    }
                    break;
                default:
                    attr = foundedTemplate[key].attr;
                    value = foundedTemplate[key].value;
                    const el = document.querySelector(`[${attr}^="${value}"]`)
                    console.log(el)
                    console.log(document.querySelector(`body`))
                    if (el?.innerHTML) {
                        // @ts-ignore
                        product[key] = el?.innerHTML;
                    }
            }

        })
        if (product.title && product.price) {
            return product;
        }
    }
    return null;
}