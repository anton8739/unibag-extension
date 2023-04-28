/* eslint-disable max-len */
import {makeAutoObservable, runInAction} from 'mobx';
import {Screens} from "../../constants/parseProductTemplates";
import {useState} from "react";
import userApi from "../api/userApi";

export default class UserStore {
    rootStore;
    constructor(rootStore:any) {
        makeAutoObservable(this, {rootStore: false});
        this.rootStore = rootStore;
    }
    login = async (data:{password:string, username: string}) => {
        await userApi.login(data)
        console.log(data)
    }
    registration = async (password:string, username: string) => {
        console.log(username)
        console.log(password)
    }
}