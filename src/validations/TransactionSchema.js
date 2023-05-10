import * as yup from 'yup';

const TransactionSchema = yup.object().shape({
  amount: yup
    .number()
    .required('Amount is required')
    .positive('Amount must be positive')
    .integer('Amount must be an integer')
    .min(1, 'Amount must be at least 1'),

  date: yup.date().required('Date is required'),

  // typeOfTransaction: yup
  //   .string()
  //   .required('Type of transaction is required')
  //   .oneOf(
  //     ['income', 'expense'],
  //     'Type of transaction must be income or expense'
  //   ),

  // type: yup
  //   .string()
  //   .required('Type of transaction is required')
  //   .oneOf(['+', '-'], 'Type of transaction must be income or expense'),

  category: yup.string().optional(),

  comment: yup.string().optional(),
});

export default TransactionSchema;
