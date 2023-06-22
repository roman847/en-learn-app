import { createSlice } from '@reduxjs/toolkit';
import { getUserName, getToken, getUserId } from 'services/index';

interface IUser {
  userId: string | undefined;
  userName: string | undefined;
  userToken: string | undefined;
}
interface IInitialState {
  page: string;
  user: IUser;
}

const initialState: IInitialState = {
  page: 'Главная',
  user: { userId: getUserId(), userName: getUserName(), userToken: getToken() },
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
