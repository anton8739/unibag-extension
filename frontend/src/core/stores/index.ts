import React from 'react';
import BasketStore from "./basket.store";
import AppStore from "./app.store";
import UserStore from "./user.store";





class RootStore {
    basketStore;
    appStore;
    userStore;
    constructor() {
        this.basketStore = new BasketStore(this);
        this.appStore = new AppStore(this);
        this.userStore = new UserStore(this);
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
export const useUserStore = () => {
    const { userStore } = useStores();
    return userStore;
};