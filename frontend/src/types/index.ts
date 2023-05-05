import { Context } from 'react';
import {
    Control,
    FieldValues,
    FormState,
    UseFormClearErrors,
    UseFormGetFieldState,
    UseFormGetValues,
    UseFormHandleSubmit,
    UseFormRegister,
    UseFormReset,
    UseFormResetField,
    UseFormSetError,
    UseFormSetFocus,
    UseFormSetValue,
    UseFormTrigger,
    UseFormUnregister,
    UseFormWatch,
} from 'react-hook-form/dist/types';
export interface BasketI {
    products: ProductI[]
}
export interface ProductI {
    id?: number;
    link: string;
    name: string;
    brand: string;
    price: string;
    images: string[];
}
export interface UserI {
    username:string;
}
export type FormContextType = Context<UseFormReturn | null>;
export type UseFormReturn<TFieldValues extends FieldValues = FieldValues, TContext = any> = {
    watch: UseFormWatch<TFieldValues>;
    getValues: UseFormGetValues<TFieldValues>;
    getFieldState: UseFormGetFieldState<TFieldValues>;
    setError: UseFormSetError<TFieldValues>;
    clearErrors: UseFormClearErrors<TFieldValues>;
    setValue: UseFormSetValue<TFieldValues>;
    trigger: UseFormTrigger<TFieldValues>;
    formState: FormState<TFieldValues>;
    resetField: UseFormResetField<TFieldValues>;
    reset: UseFormReset<TFieldValues>;
    handleSubmit: UseFormHandleSubmit<TFieldValues>;
    unregister: UseFormUnregister<TFieldValues>;
    control: Control<TFieldValues, TContext>;
    register: UseFormRegister<TFieldValues>;
    setFocus: UseFormSetFocus<TFieldValues>;
};