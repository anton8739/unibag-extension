import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import {Box} from "@chakra-ui/react";
import AuthHeader from "../../layout/AuthHeader/AuthHeader";
import LoginForm from "./components/LoginForm/LoginForm";
import {LoginFormContext} from "../../../context";
import {useForm} from "react-hook-form";
import {loginSchema} from "../../../utils/validationShema";
import {yupResolver} from '@hookform/resolvers/yup/dist/yup';
import {useUserStore} from "../../../core/stores";

const Login = () => {
    const {login} = useUserStore();
    const [loading, setLoading] = useState(false);
    const {register, handleSubmit, control, setValue, getValues, formState, ...rest} = useForm({
        mode: 'onBlur',
        resolver: yupResolver(loginSchema),
    });
    const submitHandler = () => {
        const submit = async (data: any) => {
            setLoading(true)
            await login(data)
            setLoading(false)
        }
        handleSubmit(submit)();
    }
    return (
        <Box display='flex' flexDirection='column' width='100%' height='100%' minH='80vh'>
            <AuthHeader/>
            <LoginFormContext.Provider
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
                <LoginForm onSubmit={submitHandler} loading={loading}/>
            </LoginFormContext.Provider>
        </Box>
    );
}

export default observer(Login);