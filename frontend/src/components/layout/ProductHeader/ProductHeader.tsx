import React, {FC} from 'react';
import {Box,Text} from "@chakra-ui/react";
import BackIcon from "../../common/Icons/BackIcon";
import {useAppStore} from "../../../core/stores";
import {Screens} from "../../../constants/parseProductTemplates";
import MenuIcon from "../../common/Icons/MenuIcon";
interface Props {
    brand: string;
}
const ProductHeader:FC<Props> = ({brand}) => {
    const {setAppOpened,switchScreen,activeScreen} = useAppStore();
    return (
        <Box display='flex'
             padding='15px 18px 15px 18px'
             alignItems='center'
             background='#FFFFFF'
             borderBottom='1px solid #F2F2F2'
             height='60px'>
            <Box onClick={() => switchScreen(Screens.BASKET)} cursor='pointer'>
                <BackIcon/>
            </Box>
            <Box flex='1' display='flex' gap='5px' justifyContent='center'>
                <Text cursor='pointer' color='#B6ABAE'>{brand}</Text>
            </Box>
            <Box>
                <MenuIcon/>
            </Box>
        </Box>
    );
}
export default ProductHeader;