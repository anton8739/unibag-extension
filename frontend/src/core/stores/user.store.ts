/* eslint-disable max-len */
import {makeAutoObservable, runInAction} from 'mobx';
import {Screens} from "../../constants/screens";
import {useState} from "react";
import userApi from "../api/userApi";
import Cookies from "universal-cookie";
import {UserI} from "../../types";
import {errorNotification, successNotification} from "../../utils/toastify";

const cookies = new Cookies();
export default class UserStore {
    rootStore;
    user: UserI | null = null;
    isAuth = false;

    constructor(rootStore: any) {
        makeAutoObservable(this, {rootStore: false});
        this.rootStore = rootStore;
    }

    login = async (data: { password: string, username: string }) => {
        const response = await userApi.login(data)
        if (response.isError) {
            console.log("++++++++++")
            errorNotification('Ошибка входа')
        } else {
            await chrome.storage.local.set({ 'token': response.data.token })
            const auth = await this.me()
            if (auth) {
                this.rootStore.appStore.switchScreen(Screens.BASKET)
            }
            successNotification('Успешно вошли')
        }
    }
    registration = async (data: { password: string, username: string }) => {
        const response = await userApi.registration(data)
        if (response.isError) {
            errorNotification('Ошибка регистрации')
        } else {
            await chrome.storage.local.set({ 'token': response.data.token })
            const auth = await this.me()
            if (auth) {
                this.rootStore.appStore.switchScreen(Screens.BASKET)
            }
            successNotification('Регистрация прогла успешно')
        }
    }
    me = async () => {
        const response = await userApi.me()
        if (response.isError) {
            console.log("error")
            await this.logout()
            return false;
        } else {
            runInAction(() => {
                this.user = {
                    username: response.data.username
                }
                this.isAuth = true;
            })
            return true;
        }
    }
    logout = async () => {
        await chrome.storage.local.set({ 'token': '' })
        runInAction(() => {
            this.user = null;
            this.isAuth = false;
        })
    }
}