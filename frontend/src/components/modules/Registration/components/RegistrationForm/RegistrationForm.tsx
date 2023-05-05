import React, {FC} from 'react';
import {Box, Button, Input} from "@chakra-ui/react";
import InputField from "../../../../common/fields/InputField/InputField";
import {LOGIN_FIELDS, REGISTRATION_FIELDS} from "../../../../../constants/formFields";
import {LoginFormContext, RegistrationFormContext} from "../../../../../context";
interface Props {
    onSubmit: Function;
    loading: boolean;
}
const RegistrationForm:FC<Props> = ({ onSubmit,loading }) => {
    return (
        <Box flex='1' display='flex' flexDirection='column' padding='0px 18px 0px 18px'>
            <InputField name={REGISTRATION_FIELDS.USERNAME} label={''} placeholder='Password' type='email' context={RegistrationFormContext}/>
            <InputField name={REGISTRATION_FIELDS.PASSWORD} label={''} placeholder='Email' type='password' context={RegistrationFormContext}/>
            <Box padding='25px 0px 25px 0px'>
                <Button width='100%' onClick={() => onSubmit()} isLoading={loading}>Создать аккаунт</Button>
            </Box>

        </Box>
    );
}

export default RegistrationForm;