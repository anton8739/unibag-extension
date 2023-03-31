import React, {FC, ReactNode} from 'react';
import {Box} from "@chakra-ui/react";
import DetectedProduct from "../../../modules/DetectedProduct/DetectedProduct";
import {observer} from "mobx-react-lite";
interface Props {
    children: ReactNode
}
const Content:FC<Props> = ({children}) => {
    return (
        <Box flex='1' background='#FFFFFF' display='flex' flexDirection='column'>
            {children}
        </Box>
    );
}

export default observer(Content);