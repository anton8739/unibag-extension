import {parseTemplates} from "../constants/parseProductTemplates";

export const parseProduct = (url:string) => {
    const template = url.split('/')[2]
    const foundedTemplate = parseTemplates[template];
    if (foundedTemplate) {
        let product: any = {};
        Object.keys(foundedTemplate).forEach((key:any) => {
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
                        product[key] = images;
                    }
                    break;
                default:
                    attr = foundedTemplate[key].attr;
                    value = foundedTemplate[key].value;
                    const el = document.querySelector(`[${attr}^="${value}"]`)
                    if (el?.innerHTML) {
                        product[key] = el?.innerHTML;
                    }
            }

        })
        if (Object.keys(product).length > 0) {
            return product;
        }
    }
    return null;
}