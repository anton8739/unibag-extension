import React, {FC, useEffect, useState} from 'react';
import {Box, Button, Image} from "@chakra-ui/react";
import {useTab} from "../../../hooks/useTab";
import {parseProduct} from "../../../utils/parseProduct";
import {Carousel} from 'react-responsive-carousel'

const DetectedProduct = () => {
    const {lastUrl} = useTab();
    const [detectedProduct, setDetectedProduct] = useState<any>(null);
    useEffect(() => {
        if (lastUrl) {
            const product = parseProduct(lastUrl)
            console.log(product)
            setDetectedProduct(product)
            console.log(lastUrl)
        }
    }, [lastUrl])
    return (
        <Box>
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
                    <Box display='flex' justifyContent='center' padding='0px 18px 0px 18px'>
                        <Button width='100%'>В корзину</Button>
                    </Box>
                </Box> :
                <Box padding='18px' textAlign='center'>
                    Товар не найден на данной странице
                </Box>
            }
        </Box>
    )
        ;
}

export default DetectedProduct;