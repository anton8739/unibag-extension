import React from 'react';
import {observer} from "mobx-react-lite";
import {Box, Button,Text} from "@chakra-ui/react";
import {useAppStore, useBasketStore} from "../../../core/stores";
import {Screens} from "../../../constants/screens";

const NewProductDetectedPanel = () => {
    const {switchScreen} = useAppStore();
    const {isDetectedProductInBasket} = useBasketStore();
    return (
        <Box cursor='pointer' display='flex' alignItems='center' justifyContent='space-between'  padding='15px'  borderBottom='1px solid #F2F2F2'>
            {isDetectedProductInBasket ? <>
                <Text>Найденный товар добавлен в вашу корзину</Text>
            </> : <>
                <Text>Найден доступный товар. Перейти к добавлению</Text>
                <Button width='150px' onClick={() => switchScreen(Screens.DETECTED_PRODUCT)}>Просмотр</Button>
            </>}

        </Box>
    );
}

export default observer(NewProductDetectedPanel);