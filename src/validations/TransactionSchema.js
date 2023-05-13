import * as yup from 'yup';

const TransactionSchema = yup.object().shape({
  amount: yup.number('Amount must be a number').required('Amount is required'),

  category: yup.string().optional(),

  comment: yup.string().optional(),

  type: yup.string().required('Type is required').oneOf(['INCOME', 'EXPENSE']),
});

export default TransactionSchema;
