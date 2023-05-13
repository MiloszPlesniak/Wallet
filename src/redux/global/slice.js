import { createSlice } from '@reduxjs/toolkit';

export const globalSlice = createSlice({
  name: 'global',
  initialState: {
    isLoading: false,
    isModalAddTransactionOpen: false,
    isModalLogoutOpen: false,
    isModalEditTransactionOpen: {
      open: false,
      type: '-',
    },
  },
  reducers: {
    changeIsLoading: state => {
      state.isLoading = !state.isLoading;
    },
    changeIsModalAddTransactionOpen: state => {
      state.isModalAddTransactionOpen = !state.isModalAddTransactionOpen;
    },
    changeIsModalLogoutOpen: state => {
      state.isModalLogoutOpen = !state.isModalLogoutOpen;
    },
    changeIsModalEditTransactionOpen: (state, { payload }) => {
      state.isModalEditTransactionOpen.open =
        !state.isModalEditTransactionOpen.open;
      state.isModalEditTransactionOpen.type = payload;
    },
  },
});

export const {
  changeIsLoading,
  changeIsModalAddTransactionOpen,
  changeIsModalLogoutOpen,
  changeIsModalEditTransactionOpen,
} = globalSlice.actions;

export default globalSlice.reducer;
