import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_PATH = 'https://random-greeting-dvc.herokuapp.com/api/v1/hello';
const initialState = '';

const headers = {
  'Content-Type': 'application/text',
};

const fetchGreetingFromAPI = async () => {
  const response = await axios.get(API_PATH, headers);
  return response;
};

const fetchGreeting = createAsyncThunk(
  'FETCH_GREETING',
  async () => {
    const response = await fetchGreetingFromAPI();
    return response;
  },
);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.fulfilled, (state, action) => action.payload);
  },
});

export { fetchGreeting, fetchGreetingFromAPI };

export default greetingSlice.reducer;
