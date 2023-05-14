import * as yup from 'yup';

const RegistrationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min('6', 'Password must be at least 6 characters')
    .max('12', 'Password must be at most 12 characters'),
  confirmPassword: yup
    .string()
    .required('Confirm Password is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
  username: yup.string().required('First Name is required'),
});

export default RegistrationSchema;
