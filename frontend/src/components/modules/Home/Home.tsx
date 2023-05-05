import React from 'react';
import {observer} from "mobx-react-lite";
import Layout from "../../layout/Layout/Layout";
import NewProductDetectedPanel from "../../common/NewProductDetectedPanel/NewProductDetectedPanel";
import {Box} from "@chakra-ui/react";
import {useBasketStore} from "../../../core/stores";

const Home = () => {
    const {detectedProduct} = useBasketStore();
    return (
        <Layout>
            {detectedProduct && <NewProductDetectedPanel/>}
            <Box>
                Home
            </Box>
        </Layout>
    );
}

export default observer(Home);