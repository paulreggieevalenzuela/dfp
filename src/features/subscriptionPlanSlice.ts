import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '@/app/store';

enum Status {
  ongoing,
  paused,
  cancelled,
  consumed,
  overhours,
}

type SubscriptionPlanProps = {
  title?: string;
  subTitle?: string;
  status?: 'ongoing' | 'paused' | 'cancelled' | 'consumed' | 'overhours';
  availableHours: number;
  totalHours?: number;
  date?: string;
  price?: string;
};

type SubscriptionPlanStateProps = {
  value: SubscriptionPlanProps;
  isLoading: boolean;
  error: string | null;
};

const initialState: SubscriptionPlanStateProps = {
  value: {
    status: 'paused',
    title: 'Marketing Force',
    subTitle: 'MARKETING FORCE CAPABILITIES',
    availableHours: 45,
    totalHours: 32,
    date: 'Jun 3, 2022',
    price: '1,950',
  },
  isLoading: false,
  error: null,
};

const subscriptionPlanSlice = createSlice({
  name: 'subscriptionPlan',
  initialState,
  reducers: {
    updateSubscriptionPlan: (
      state,
      action: PayloadAction<SubscriptionPlanProps>
    ) => {
      state.value = action.payload;
    },
  },
});

export const { updateSubscriptionPlan } = subscriptionPlanSlice.actions;

export const selectSubscriptionPlan = (state: RootState) =>
  state.subscriptionPlan;

export default subscriptionPlanSlice.reducer;
