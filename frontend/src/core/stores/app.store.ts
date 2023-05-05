/* eslint-disable max-len */
import {makeAutoObservable, runInAction} from 'mobx';
import {Screens} from "../../constants/screens";
import {useState} from "react";

export default class AppStore {
    rootStore;
    activeScreen = Screens.DETECTED_PRODUCT;

    appOpened = false;
    constructor(rootStore:any) {
        makeAutoObservable(this, {rootStore: false});
        this.rootStore = rootStore;
    }
    switchScreen = async (tab:any) => {
        runInAction(() => {
            this.activeScreen = tab;
        })
    }
    setAppOpened = async (value:boolean) => {
        runInAction(() => {
            this.appOpened= value;
        })
    }
}
