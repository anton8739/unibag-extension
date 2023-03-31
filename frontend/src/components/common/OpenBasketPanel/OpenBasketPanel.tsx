import React from 'react';
import {observer} from "mobx-react-lite";
import {Box, Button} from "@chakra-ui/react";
import {useAppStore} from "../../../core/stores";
import {Screens} from "../../../constants/parseProductTemplates";

const OpenBasketPanel = () => {
    const {switchScreen} = useAppStore();
    return (
        <Box cursor='pointer' display='flex' alignItems='center' padding='15px'>
            <Button width='100%' onClick={() => switchScreen(Screens.BASKET)}>Открыть корзину</Button>
        </Box>
    );
}

export default observer(OpenBasketPanel);