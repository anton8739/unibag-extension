import React from 'react';
import {Box,Text} from "@chakra-ui/react";
import BackIcon from "../../common/Icons/BackIcon";
import {useAppStore} from "../../../core/stores";
import {Screens} from "../../../constants/screens";
import CloseIcon from "../../common/Icons/CloseIcon";

const AuthHeader = () => {
    const {setAppOpened,switchScreen,activeScreen} = useAppStore();
    return (
        <Box display='flex'
             padding='15px 18px 15px 18px'

             alignItems='center'
             background='#FFFFFF'
             borderBottom='1px solid #F2F2F2'
             height='60px'>
            <Box onClick={() => setAppOpened(false)} cursor='pointer'>
                <CloseIcon/>
            </Box>
            <Box flex='1' display='flex' gap='5px' justifyContent='center'>
                <Text cursor='pointer' onClick={() => switchScreen(Screens.LOGIN)} color={activeScreen ===Screens.LOGIN ? "#453939" : "#B6ABAE"}>Войти</Text>
                <Text cursor='pointer' onClick={() => switchScreen(Screens.REGISTRATION)} color={activeScreen ===Screens.REGISTRATION ?  "#453939" : "#B6ABAE"}>Регистрация</Text>
            </Box>
        </Box>
    );
}

export default AuthHeader;