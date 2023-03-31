import React from 'react';
import {Box, Button, Input} from "@chakra-ui/react";
import {Screens} from "../../../../../constants/parseProductTemplates";

const LoginForm = () => {
    return (
        <Box flex='1' display='flex' flexDirection='column'>
            <Input variant='flushed' placeholder='Email' padding='21px 18px 21px 18px' type='email'
                   fontWeight='500'
                   fontSize='14px'
                   lineHeight='18px'
                   height='60px'
                   letterSpacing='-0.02em'
                   color='#B6ABAE'/>
            <Input variant='flushed' placeholder='Password' padding='21px 18px 21px 18px' type='password'
                   fontWeight='500'
                   fontSize='14px'
                   lineHeight='18px'
                   letterSpacing='-0.02em'
                   height='60px'
                   color='#B6ABAE'/>
            <Box padding='25px 18px 25px 18px'>
                <Button width='100%'>Войти</Button>
            </Box>

        </Box>
    );
}

export default LoginForm;