import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import Layout from "../../layout/Layout/Layout";
import AuthHeader from "../../layout/AuthHeader/AuthHeader";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import {Box} from "@chakra-ui/react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {registrationSchema} from "../../../utils/validationShema";
import {RegistrationFormContext} from "../../../context";
import {useUserStore} from "../../../core/stores";
const Registration = () => {
    const [loading, setLoading] = useState(false);
    const {registration} = useUserStore();
    const {register, handleSubmit, control, setValue, getValues, formState, ...rest} = useForm({
        mode: 'onBlur',
        resolver: yupResolver(registrationSchema),
    });
    const submitHandler = () => {
        const submit = async (data: any) => {
            setLoading(true)
            await registration(data)
            setLoading(false)
        }
        handleSubmit(submit)();
    }
    return (
        <Box display='flex' flexDirection='column' width='100%' height='100%' minH='80vh'>
            <AuthHeader/>
            <RegistrationFormContext.Provider
                value={{
                    register,
                    handleSubmit,
                    control,
                    setValue,
                    getValues,
                    formState,
                    ...rest,
                }}
            >
            <RegistrationForm onSubmit={submitHandler} loading={loading}/>
            </RegistrationFormContext.Provider>
        </Box>
    );
}

export default observer(Registration);