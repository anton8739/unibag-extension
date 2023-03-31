import React, {FC, ReactNode, useEffect} from 'react';
import {Box} from "@chakra-ui/react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Content from "./Content/Content";
import { observer } from 'mobx-react-lite';
interface Props {
    children: ReactNode,
}
const Layout:FC<Props> = ({children}) => {
    return (
        <Box display='flex' flexDirection='column' width='100%' height='100%' minH='80vh'>
            <Header/>
            <Content>
                {children}
            </Content>
            <Footer/>
        </Box>
    );
}

export default observer(Layout);