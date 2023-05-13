export const selectBalance = state => state.finances.balance;
export const selectTransactions = state => state.finances.transactions;

export const selectTransactionsCategories = state =>
  state.finances.transactionsCategories;
export const selectSingleTransaction = state =>
  state.finances.selectedTransaction;

