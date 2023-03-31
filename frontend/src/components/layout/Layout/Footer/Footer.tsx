import React from 'react';
import {Box, Link, Text} from "@chakra-ui/react";
import {observer} from "mobx-react-lite";

const Footer = () => {
    return (
        <Box display='flex'
             padding='15px 18px 15px 18px'
             justifyContent='center'
             alignItems='center'
             background='#FFFFFF'
             borderTop='1px solid #F2F2F2'
             height='60px'>
            <Text textAlign='center' display='flex' alignItems='center' color='#B6ABAE'
                  fontWeight='510'
                  fontSize='14px'
                  lineHeight='18px'
                  gap='5px'
            >
                <Text>Есть вопросы? Пишите нам в</Text>
                <Link href='#' textDecoration='none' color='#FF77A0'>телеграм</Link>
            </Text>
        </Box>
    );
}

export default observer(Footer);