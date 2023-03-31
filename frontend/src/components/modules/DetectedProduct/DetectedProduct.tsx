import React, {FC, useEffect, useState} from 'react';
import {Box, Button, Image} from "@chakra-ui/react";
import {Carousel} from 'react-responsive-carousel'
import {observer} from "mobx-react-lite";
import {useAppStore, useBasketStore} from "../../../core/stores";
import Layout from "../../layout/Layout/Layout";
import OpenBasket from "../../common/OpenBasketPanel/OpenBasketPanel";
import {Screens} from "../../../constants/parseProductTemplates";

const DetectedProduct = () => {
    const {switchScreen} = useAppStore();
    const {detectedProduct, addProductToBasket, isDetectedProductInBasket} = useBasketStore();
    const addProduct = () => {
        detectedProduct && addProductToBasket(detectedProduct)
        switchScreen(Screens.BASKET)
    }
    const openInShop = () => {
        window.open(detectedProduct?.link, '_blank');
    }
    return (
        <Layout>
            <OpenBasket/>
            {detectedProduct ? <Box display='flex' flexDirection='column'>
                    <Carousel showArrows={true} swipeable showThumbs={false}>
                        {
                            detectedProduct.images.map((item: string) => <Box>
                                <Image src={item} alt='icon'/>
                            </Box>)
                        }
                    </Carousel>
                    <Box display='flex' justifyContent='space-between' padding='18px'>
                        <Box display='flex' flexDirection='column'>
                            <Box display='flex' alignItems='center' gap='10px' fontWeight='510'
                                 fontSize='14px'
                                 lineHeight='18px'
                                 letterSpacing='-0.02em'
                                 color='#B6ABAE'>
                                <Box>{detectedProduct.brand}</Box>
                                <Box>{detectedProduct.title}</Box>
                            </Box>
                            <Box fontWeight='510'
                                 fontSize='21px'
                                 lineHeight='30px'
                                 letterSpacing='-0.02em'
                                 color='#453939'
                            >{detectedProduct.price}</Box>
                        </Box>
                    </Box>
                    <Box display='flex' justifyContent='center' padding='20px 18px 20px 18px'>
                        {isDetectedProductInBasket ? <Button width='100%' onClick={openInShop}>В магазин</Button> :
                            <Button width='100%' onClick={addProduct}>В корзину</Button>}
                    </Box>
                </Box> :
                <Box padding='18px' textAlign='center'>
                    Товар не найден на данной странице
                </Box>
            }
        </Layout>
    )
        ;
}

export default observer(DetectedProduct);