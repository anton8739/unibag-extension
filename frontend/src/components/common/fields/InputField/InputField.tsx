
import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import {Context, FC, useContext } from 'react';
import {FormContextType, UseFormReturn} from 'types';

interface Props {
  context: Context<UseFormReturn>;
  errorBorderColor?: string;
  focusBorderColor?: string;
  label: string;
  name: string;
  placeholder: string;
  size?: string;
  type: string;
}

const InputField: FC<Props> = ({
  name,
  label,
  placeholder,
  type,
  context,
  size = 'md',
  focusBorderColor = 'tertiary.500',
  errorBorderColor = 'errorColor',
}) => {
  const {
    register,
    formState: { errors },
  } = useContext(context);
  const currentError = errors[name]?.message?.toString();
  return (
    <FormControl isInvalid={Boolean(errors[name])}>
      <FormLabel fontWeight='500' lineHeight='19px' fontSize='14px'>
        {label}
      </FormLabel>
      <Input
        placeholder={placeholder}
        type={type}
        id={name}
        {...register(name)}
        size={size}
        fontWeight='500'
        fontSize='14px'
        lineHeight='18px'
        height='60px'
        letterSpacing='-0.02em'
        color='#B6ABAE'
        variant='flushed'
        focusBorderColor={focusBorderColor}
        errorBorderColor={errorBorderColor}
        _placeholder={{ color: 'textLightGray', fontSize: '14px' }}
      />
      <FormErrorMessage color={errorBorderColor}>{currentError}</FormErrorMessage>
    </FormControl>
  );
};

export default InputField;
