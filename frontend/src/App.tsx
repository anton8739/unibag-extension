import React, {useEffect} from 'react';
import {Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay} from "@chakra-ui/react";
import BellIcon from "./components/common/Icons/BellIcon";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {observer} from 'mobx-react-lite';
import {Screens} from "./constants/screens";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useAppStore, useBasketStore, useUserStore} from "./core/stores";
import Login from './components/modules/Login/Login';
import Basket from "./components/modules/Basket/Basket";
import Registration from "./components/modules/Registration/Registration";
import DetectedProduct from "./components/modules/DetectedProduct/DetectedProduct";
import {parseProduct} from "./utils/parseProduct";
import {useTab} from "./hooks/useTab";
import SingleProduct from "./components/modules/SingleProduct/SingleProduct";
import './index.scss'

function App() {
    const {activeScreen, appOpened, setAppOpened, switchScreen} = useAppStore();
    const {me, isAuth} = useUserStore();
    const {initBasket,getParseSelectors} = useBasketStore();
    const closeApp = () => {
        setAppOpened(false)
    }
    const appScreens = {
        [Screens.LOGIN]: <Login/>,
        [Screens.BASKET]: <Basket/>,
        [Screens.REGISTRATION]: <Registration/>,
        [Screens.DETECTED_PRODUCT]: <DetectedProduct/>,
        [Screens.SINGLE_PRODUCT]: <SingleProduct/>
    }
    const {setDetectedProduct} = useBasketStore();
    const {lastUrl} = useTab();
    useEffect(() => {
        const searchProduct = async () => {

            if (lastUrl && isAuth) {
                const origin = lastUrl.split('/')[2]
                const selectors = await getParseSelectors(origin);
                if (selectors) {
                    const product = parseProduct(selectors, lastUrl)
                    setDetectedProduct(product)
                    if (product) {
                        switchScreen(Screens.DETECTED_PRODUCT)
                    } else {
                        switchScreen(Screens.BASKET)
                    }
                }
            }
        }
        searchProduct()
    }, [lastUrl, appOpened])
    useEffect(() => {
        const initApp = async () => {
            const auth = await me();
            if (!auth) {
                switchScreen(Screens.LOGIN)
            } else {
                initBasket()
            }

        }
        initApp()
        chrome.runtime.onMessage.addListener(
            function(request, sender, sendResponse) {
                console.log("recieved")
                if (request.message === 'open-app') {
                    setAppOpened(!appOpened)
                }
            });
    }, [])
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
            />
            <Box display={appOpened ? "none" : "flex"} background='#FF77A0' height='45px' alignItems='center'
                 position='fixed'
                 right='0'
                 zIndex='10000'
                 padding='10px 0px 10px 10px'
                 transition='1s'
                 borderRadius='8px 0 0 8px'
                 overflow='hidden'
                 top='calc(50% - 20px)'
                 cursor='pointer'
                 transform='translate(24px, 0px)'
                 _hover={{transform: 'translate(0px, 0px)'}}
                 onClick={() => setAppOpened(!appOpened)}
            >
                <Box width='30px' display='flex' alignItems='center' justifyContent='center' color='#FFFFFF'
                     fontSize='18px' fontWeight='600'>U</Box>
                <BellIcon style={{width: '24px', height: '24px'}}/>
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
