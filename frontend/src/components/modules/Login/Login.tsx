import React from 'react';
import {observer} from "mobx-react-lite";
import {Box} from "@chakra-ui/react";
import AuthHeader from "../../layout/AuthHeader/AuthHeader";
import LoginForm from "./components/LoginForm/LoginForm";

const Login = () => {
    return (
        <Box display='flex' flexDirection='column' width='100%' height='100%' minH='80vh'>
            <AuthHeader/>
            <LoginForm/>
        </Box>
    );
}

export default observer(Login);