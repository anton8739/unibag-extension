/* eslint-disable max-len */
import {makeAutoObservable, runInAction} from 'mobx';
import {BasketI, ProductI} from "../../types";
import {BasketApi} from "../api";
import {Screens} from "../../constants/screens";
import basketApi from "../api/basketApi";

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
        console.log(product)
        const response = await BasketApi.removeProduct(product);
        if (response.isError) {
            console.log("error")
        } else {
            runInAction(() => {
                this.basket = {...this.basket, products: this.basket.products.filter(item => item.link !== product.link)}
            })
        }
    }
    getParseSelectors = async (origin: string) => {
        const response = await BasketApi.getSelectors({origin});
        if (response.isError) {
            console.log("error")
            return null;
        } else {
            return response.data
        }
    }
    initBasket = async  () => {
        const response = await BasketApi.getAllProducts();
        if (response.isError) {
            console.log("error")
        } else {
            runInAction(() => {
                this.basket = {
                    products: response.data
                }
            })

        }
    }
    addProductToBasket = async (product: ProductI) => {
        const response = await basketApi.addProduct(product);
        if (response.isError) {
            console.log("error")
        } else {
            const productList = [...this.basket.products]
            productList.push(response.data)
            runInAction(() => {
                this.basket = {...this.basket, products: productList}
            })
        }
    }
}
