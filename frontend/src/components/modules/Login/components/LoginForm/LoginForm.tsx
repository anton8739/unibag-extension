import React, {FC} from 'react';
import {Box, Button, Input} from "@chakra-ui/react";
import InputField from "../../../../common/fields/InputField/InputField";
import {LOGIN_FIELDS} from "../../../../../constants/formFields";
import {LoginFormContext} from '../../../../../context'
interface Props {
    onSubmit: Function;
    loading: boolean;
}
const LoginForm:FC<Props> = ({ onSubmit,loading }) => {
    return (
        <Box flex='1' display='flex' flexDirection='column'>
            <InputField name={LOGIN_FIELDS.USERNAME} label={''} placeholder='Password' type='email' context={LoginFormContext}/>
            <InputField name={LOGIN_FIELDS.PASSWORD} label={''} placeholder='Email' type='password' context={LoginFormContext}/>
            <Box padding='25px 18px 25px 18px' onClick={() => onSubmit()}>
                <Button width='100%' isLoading={loading}>Войти</Button>
            </Box>

        </Box>
    );
}

export default LoginForm;