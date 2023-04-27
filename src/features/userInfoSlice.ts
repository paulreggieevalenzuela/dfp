import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '@/app/store';

type UserInfoProps = {
  avatar?: string;
  role?: 'client' | 'manager' | 'admin';
  companyName: string;
  companyLogo: string;
  firstName: string;
  lastName: string;
};

type UserInfoStateProps = {
  value: UserInfoProps;
  isLoading: boolean;
  error: string | null;
};

const initialState: UserInfoStateProps = {
  value: {
    role: 'client',
    companyName: '',
    companyLogo: '',
    firstName: '',
    lastName: '',
  },
  isLoading: false,
  error: null,
};

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    updateUserInfo: (state, action: PayloadAction<UserInfoProps>) => {
      state.value = action.payload;
    },
  },
});

export const { updateUserInfo } = userInfoSlice.actions;

export const selectUserInfo = (state: RootState) => state.userInfo;

export default userInfoSlice.reducer;
