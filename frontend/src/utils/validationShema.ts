import * as yup from 'yup';
import {LOGIN_FIELDS, REGISTRATION_FIELDS} from "../constants/formFields";


export const loginSchema = yup.object().shape({
  [LOGIN_FIELDS.USERNAME]: yup.string().trim().email('format').required('required'),
  [LOGIN_FIELDS.PASSWORD]: yup
    .string()
    .trim()
    .required('required')
    .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/, 'format'),
});
export const registrationSchema = yup.object().shape({
  [REGISTRATION_FIELDS.USERNAME]: yup.string().trim().email('format').required('required'),
  [REGISTRATION_FIELDS.PASSWORD]: yup
      .string()
      .trim()
      .required('required')
      .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/, 'format'),
});
