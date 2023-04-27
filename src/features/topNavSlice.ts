import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '@/app/store';

type TopNavProps = {
  pageTitle: string;
  subscriptionHoursLeft: number;
  subscriptionId: string;
}

type TopNavStateProps = {
  value: TopNavProps;
}

const initialState: TopNavStateProps = {
  value: {
    pageTitle: 'Projects',
    subscriptionHoursLeft: 32,
    subscriptionId: Math.random().toString(36).slice(2).toUpperCase()
  }
}

const topNavSlice = createSlice({
  name: 'topNav',
  initialState,
  reducers: {
    setTopNav: (state, action: PayloadAction<TopNavProps>) => {
      state.value = action.payload;
    },
  }
});

export const { setTopNav } = topNavSlice.actions;

export const selectTopNav = (state: RootState) => state.topNav;

export default topNavSlice.reducer;