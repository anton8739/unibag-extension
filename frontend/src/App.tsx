import React, {useEffect} from 'react';
import {Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay} from "@chakra-ui/react";
import BellIcon from "./components/common/Icons/BellIcon";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { observer } from 'mobx-react-lite';
import {Screens} from "./constants/parseProductTemplates";
import Home from './components/modules/Home/Home';
import Login from './components/modules/Login/Login';
import Basket from "./components/modules/Basket/Basket";
import Registration from "./components/modules/Registration/Registration";
import {useAppStore, useBasketStore} from "./core/stores";
import DetectedProduct from "./components/modules/DetectedProduct/DetectedProduct";
import {parseProduct} from "./utils/parseProduct";
import {useTab} from "./hooks/useTab";
import SingleProduct from "./components/modules/SingleProduct/SingleProduct";

function App() {
    const {activeScreen,appOpened,setAppOpened, switchScreen} = useAppStore();
    const {initBasket} = useBasketStore();
    const closeApp = () => {
        setAppOpened(false)
    }
    const appScreens = {
        [Screens.HOME] : <Home/>,
        [Screens.LOGIN]: <Login/>,
        [Screens.BASKET] : <Basket/>,
        [Screens.REGISTRATION] : <Registration/>,
        [Screens.DETECTED_PRODUCT] : <DetectedProduct/>,
        [Screens.SINGLE_PRODUCT] : <SingleProduct/>
    }
    const {setDetectedProduct} = useBasketStore();
    const {lastUrl} = useTab();
    useEffect(() => {
        if (lastUrl) {
            const product = parseProduct(lastUrl)
            setDetectedProduct(product)
            if (product) {
                switchScreen(Screens.DETECTED_PRODUCT)
            } else {
                switchScreen(Screens.BASKET)
            }
        }
    }, [lastUrl,appOpened])
    useEffect(() => {
        const basketJSON = localStorage.getItem('basket');
        const basket = basketJSON && JSON.parse(basketJSON);
        initBasket(basket)
    }, [])
    return (
        <>
            <Box display={appOpened ? "none" : "flex" } background='#FF77A0' height='45px' alignItems='center'
                 position='fixed'
                 right='0'
                 padding='10px 0px 10px 10px'
                 transition='1s'
                 borderRadius='8px 0 0 8px'
                 overflow='hidden'
                 top='calc(50% - 20px)'
                 cursor='pointer'
                 transform='translate(24px, 0px)'
                 _hover={{transform: 'translate(0px, 0px)'}}
                 onClick={() =>setAppOpened(!appOpened)}
            >
                <Box width='30px' display='flex' alignItems='center' justifyContent='center' color='#FFFFFF' fontSize='18px' fontWeight='600'>U</Box>
                <BellIcon style={{width: '24px',height: '24px'}}/>
            </Box>
            <Modal isOpen={appOpened} onClose={closeApp} size="sm" closeOnOverlayClick={false}>
                <ModalOverlay/>
                <ModalContent containerProps={{justifyContent: 'flex-end', paddingRight: '2rem', zIndex: 10000}}>
                    <ModalBody style={{padding: 0, borderRadius: 'unset'}}>
                            {appScreens[activeScreen]}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>

    );
}

export default observer(App);
