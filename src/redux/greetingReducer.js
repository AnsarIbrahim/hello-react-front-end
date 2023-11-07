import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGreeting = createAsyncThunk('fetch/greeting', async () => {
  const response = await axios.get(
    'https://hello-react-vyzx.onrender.com/api/greetings',
  );
  return response.data;
});

const greetingSlice = createSlice({
  name: 'greetings',
  initialState: {
    greeting: '',
    loading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => ({
        ...state,
        loading: true,
      }))

      .addCase(fetchGreeting.fulfilled, (state, action) => ({
        ...state,
        greeting: action.payload,
        loading: false,
      }))

      .addCase(fetchGreeting.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default greetingSlice.reducer;
