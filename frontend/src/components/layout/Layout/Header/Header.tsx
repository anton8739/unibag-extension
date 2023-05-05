import React, {FC} from 'react';
import {Box, Image} from "@chakra-ui/react";
import BellIcon from "../../../common/Icons/BellIcon";
import CloseIcon from "../../../common/Icons/CloseIcon";
import UserIcon from "../../../common/Icons/UserIcon";
import {observer} from "mobx-react-lite";
import {useAppStore} from "../../../../core/stores";
import {Screens} from "../../../../constants/screens";
import UserMenu from "./UserMenu/UserMenu";
interface Props {
}
const Header:FC<Props> = () => {
    const {setAppOpened,switchScreen} = useAppStore();
    const closeApp = () => {
        setAppOpened(false)
    }
    const logo = chrome.runtime.getURL('asserts/images/UnibagLogo.png');
    return (
        <Box display='flex'
        padding='15px 18px 15px 18px'
             justifyContent='space-between'
             alignItems='center'
             background='#FFFFFF'
             borderBottom='1px solid #F2F2F2'
             height='60px'>
            <Box cursor='pointer' onClick={() => switchScreen(Screens.BASKET)}>
                <Image src={logo} alt='logo' width='97px' display='flex' alignItems='center'/>
            </Box>
            <Box display='flex' gap='15px' alignItems='center'>
                {/*  <Box cursor='pointer'>
                    <BellIcon/>
                </Box> */}
               <UserMenu/>
                <Box cursor='pointer' onClick={() => closeApp()}>
                    <CloseIcon/>
                </Box>
            </Box>
        </Box>
    );
}

export default observer(Header);