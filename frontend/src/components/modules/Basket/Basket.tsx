import React from 'react';
import {observer} from "mobx-react-lite";
import Layout from "../../layout/Layout/Layout";
import NewProductDetectedPanel from "../../common/NewProductDetectedPanel/NewProductDetectedPanel";
import {Box} from "@chakra-ui/react";
import {useBasketStore} from "../../../core/stores";
import ProductCard from "./components/ProductCard/ProductCard";

const Basket = () => {
    const {detectedProduct, basket} = useBasketStore();
    return (
        <Layout>
            {detectedProduct && <NewProductDetectedPanel/>}
            {basket.products.length > 0 ? <div className='unibag-basket' style={{
                display:'grid', gridTemplateColumns:'1fr 1fr 1fr', maxHeight:'65vh', overflow:'auto'
            }} >
                {basket.products.map(product => <ProductCard product={product}/>)}
            </div> : <Box display='flex' flex='1' justifyContent='center' alignItems='center'>Корзина пуста</Box>}
        </Layout>
    );
}

export default observer(Basket);