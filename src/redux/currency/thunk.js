import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import CurrencySchema from 'validations/CurrencySchema';

export const fetchCurrency = createAsyncThunk(
  'currency/fetch',
  async (_, thunkAPI) => {
    try {
      axios.defaults.baseURL = 'https://api.nbp.pl/api/';
      const response = await axios.get(`exchangerates/tables/c`);
      try {
        await CurrencySchema.validate(response.data[0].rates);
        return response.data[0].rates;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.errors);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
