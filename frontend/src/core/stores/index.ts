import React from 'react';
import BasketStore from "./basket.store";
import AppStore from "./app.store";





class RootStore {
    basketStore;
    appStore;
    constructor() {
        this.basketStore = new BasketStore(this);
        this.appStore = new AppStore(this);
    }
}


export const rootStore = new RootStore();
export const StoresContext = React.createContext(rootStore);

export const useStores = () => React.useContext(StoresContext);

export const useBasketStore = () => {
    const { basketStore } = useStores();
    return basketStore;
};
export const useAppStore = () => {
    const { appStore } = useStores();
    return appStore;
};