import * as yup from 'yup';

let patternTwoDigisAfterComma = /^\d+(\.\d{0,2})?$/;

const TransactionSchema = yup.object().shape({
  amount: yup
    .number('Amount must be a number')
    .required('Amount is required')
    .positive('Amount must be positive')
    .test(
      'two-digits-after-comma',
      'Amount must have at most two digits after comma',
      value => {
        if (value) {
          return patternTwoDigisAfterComma.test(value.toString());
        }
        return true;
      }
    ),

  //date: yup.date().required('Date is required'),

  category: yup.string().optional(),

  comment: yup.string().optional(),

  owner: yup.string().required(),

  type: yup.string().required('Type is required').oneOf(['+', '-']),
});

export default TransactionSchema;
