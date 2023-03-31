import React from 'react';
import {observer} from "mobx-react-lite";
import Layout from "../../layout/Layout/Layout";
import AuthHeader from "../../layout/AuthHeader/AuthHeader";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import {Box} from "@chakra-ui/react";

const Registration = () => {
    return (
        <Box display='flex' flexDirection='column' width='100%' height='100%' minH='80vh'>
            <AuthHeader/>
            <RegistrationForm/>
        </Box>
    );
}

export default observer(Registration);