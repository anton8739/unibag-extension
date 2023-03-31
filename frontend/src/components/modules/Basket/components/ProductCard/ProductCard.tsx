import React, {FC} from 'react';
import {observer} from "mobx-react-lite";
import {Box, Image} from "@chakra-ui/react";
import {ProductI} from "../../../../../types";
import CloseIcon from "../../../../common/Icons/CloseIcon";
import {useAppStore, useBasketStore} from "../../../../../core/stores";
import {Screens} from "../../../../../constants/parseProductTemplates";

interface Props {
    product: ProductI
}

const ProductCard: FC<Props> = ({product}) => {
    const {removeProductFromBasket, setOpenedProduct} = useBasketStore();
    const {switchScreen} = useAppStore();
    const deleteProduct = (e:React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        removeProductFromBasket(product)
    }
    const openProduct = () => {
        setOpenedProduct(product)
        switchScreen(Screens.SINGLE_PRODUCT)
    }
    return (
        <Box display='flex' flexDirection='column' overflow='hidden' cursor='pointer' onClick={openProduct}>
            <Box position='relative'>
                <Image src={product.images[0]}/>
                <Box position='absolute' top='10px' right='10px' onClick={deleteProduct}>
                    <CloseIcon/>
                </Box>
            </Box>

            <Box display='flex' flexDirection='column' gap='10px' border='1px solid #F2F2F2' padding='10px'>
                <Box fontWeight='500'
                     font-size='14px'
                     line-height='18px'
                     letter-spacing='-0.02em'
                     color='#453939'>
                    {product.price}
                </Box>
                <Box font-weight='500'
                     font-size='14px'
                     line-height='18px'
                     letter-spacing='-0.02em'
                     color='#B6ABAE'
                     whiteSpace='nowrap'
                     overflow='hidden'
                     textOverflow='ellipsis'
                >
                    {product.brand}
                </Box>
                <Box font-weight='500'
                     font-size='14px'
                     line-height='18px'
                     letter-spacing='-0.02em'
                     color='#B6ABAE'
                     whiteSpace='nowrap'
                     overflow='hidden'
                     textOverflow='ellipsis'>
                    {product.title}
                </Box>
            </Box>

        </Box>
    );
}

export default observer(ProductCard);