import React from 'react';
import {Box, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {Screens} from "../../../../../constants/screens";
import UserIcon from "../../../../common/Icons/UserIcon";
import { observer } from 'mobx-react-lite';
import {useAppStore, useUserStore} from "../../../../../core/stores";
const UserMenu = () => {
    const {user, logout} = useUserStore();
    const {switchScreen} = useAppStore();
    const handleLogout = async () => {
        await logout()
        switchScreen(Screens.LOGIN)
    }
    return (
        <Menu placement='bottom-end' variant='primary'>
            <MenuButton border='none' >
                    <UserIcon/>
            </MenuButton>
            <MenuList>
                <Box padding='6px 12px 6px 12px' display='flex' alignItems='center' gap='5px'>
                    <Box fontWeight='600'>
                        Аккаунт:
                    </Box>
                    <Box>
                        {user && user.username}
                    </Box>

                </Box>
                <MenuItem onClick={() => switchScreen(Screens.BASKET)}>
                    Корзина
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                    Выйти
                </MenuItem>
            </MenuList>
        </Menu>
    );
}

export default observer(UserMenu);