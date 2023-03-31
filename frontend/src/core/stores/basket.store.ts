/* eslint-disable max-len */
import {makeAutoObservable, runInAction} from 'mobx';
import {BasketI, ProductI} from "../../types";

export default class BasketStore {
    rootStore;
    basket: BasketI = {
        products: []
    };
    detectedProduct: ProductI | null = null;
    openedProduct: ProductI | null = null;
    constructor(rootStore: any) {
        makeAutoObservable(this, {rootStore: false});
        this.rootStore = rootStore;
    }
    //Computed
    get isDetectedProductInBasket() {
        return !!this.basket.products.find(product => product.link === this.detectedProduct?.link)
    }
    addProductToBasket = async (product: ProductI) => {
        runInAction(() => {
            this.basket.products.push(product)
            localStorage.setItem('basket', JSON.stringify(this.basket));
        })
    }
    setDetectedProduct = async (product: ProductI | null) => {

        runInAction(() => {
            this.detectedProduct = product;
        })
    }
    setOpenedProduct = async (product: ProductI | null) => {
        runInAction(() => {
            this.openedProduct = product;
        })
    }
    removeProductFromBasket = async (product: ProductI) => {
        runInAction(() => {
            this.basket = {...this.basket, products: this.basket.products.filter(item => item.link !== product.link)}
            localStorage.setItem('basket', JSON.stringify(this.basket));
        })
    }
    initBasket = async  (basket: BasketI | undefined) => {
        runInAction(() => {
            if (basket) {
                this.basket = basket
            }
        })
    }
}
