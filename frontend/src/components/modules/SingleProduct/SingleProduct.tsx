import React from 'react';
import {Box, Button, Image} from "@chakra-ui/react";
import {useBasketStore} from "../../../core/stores";
import {Carousel} from "react-responsive-carousel";
import ProductHeader from "../../layout/ProductHeader/ProductHeader";

const SingleProduct = () => {
    const {openedProduct} = useBasketStore();
    const openInShop = () => {
        window.open(openedProduct?.link, '_blank');
    }
    return (
        <Box display='flex' flexDirection='column'>
            {openedProduct && <>
                <ProductHeader brand={openedProduct.brand}/>
                <Box display='flex' flexDirection='column'>
                    <Carousel showArrows={true} swipeable showThumbs={false}>
                        {
                            openedProduct.images.map((item: string) => <Box>
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
                                <Box>{openedProduct.brand}</Box>
                                <Box>{openedProduct.title}</Box>
                            </Box>
                            <Box fontWeight='510'
                                 fontSize='21px'
                                 lineHeight='30px'
                                 letterSpacing='-0.02em'
                                 color='#453939'
                            >{openedProduct.price}</Box>
                        </Box>
                    </Box>
                    <Box display='flex' justifyContent='center' padding='20px 18px 20px 18px'>
                        <Button width='100%' onClick={openInShop}>В магазин</Button> :
                    </Box>
                </Box>
            </>}
        </Box>
    );
}

export default SingleProduct;