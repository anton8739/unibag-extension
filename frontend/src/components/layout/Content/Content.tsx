import React from 'react';
import {Box} from "@chakra-ui/react";
import DetectedProduct from "../../common/DetectedProduct/DetectedProduct";

const Content = () => {
    return (
        <Box flex='1' background='#FFFFFF' display='flex' flexDirection='column'>
            <DetectedProduct/>
        </Box>
    );
}

export default Content;