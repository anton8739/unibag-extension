import React, {FC} from 'react';
import {Box} from "@chakra-ui/react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Content from "./Content/Content";
interface Props {
    closeApp: Function
}
const Layout:FC<Props> = ({closeApp}) => {
    return (
        <Box display='flex' flexDirection='column' width='100%' height='100%' minH='80vh'>
            <Header closeApp={closeApp}/>
            <Content/>
            <Footer/>
        </Box>
    );
}

export default Layout;