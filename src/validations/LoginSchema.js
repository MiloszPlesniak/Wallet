import * as yup from 'yup';

const LoginSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min('6', 'Password must be at least 6 characters')
    .max('12', 'Password must be at most 12 characters'),
});

export default LoginSchema;
