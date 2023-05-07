import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.nbp.pl/api/';

export const fetchCurrency = createAsyncThunk(
  'currency/fetch',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`exchangerates/tables/c`);
      return response.data[0].rates;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
