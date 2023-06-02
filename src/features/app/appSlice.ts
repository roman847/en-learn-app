import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  page: 'Главная',
};

const appSlice = createSlice({
  name: 'App',
  initialState,
  reducers: {
    setPage: (state, { payload }) => {
      state.page = payload;
    },
  },
});

export const { setPage } = appSlice.actions;
export default appSlice.reducer;
