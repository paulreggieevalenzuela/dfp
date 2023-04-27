import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import designRequestSlice from '@/features/designRequestSlice';
import invoiceSlice from '@/features/invoiceSlice';
import modalReducer from '@/features/modalSlice';
import sideNavSlice from '@/features/sideNavSlice';
import subscriptionPlanSlice from '@/features/subscriptionPlanSlice';
import topNavSlice from '@/features/topNavSlice';
import userInfoSlice from '@/features/userInfoSlice';
import { clientInfoApi } from '@/services/clientInfo';
import { companySubscriptionsApi } from '@/services/subscriptions';
import { totalHoursApi } from '@/services/totalHours';

export const store = configureStore({
  reducer: {
    [clientInfoApi.reducerPath]: clientInfoApi.reducer,
    [totalHoursApi.reducerPath]: totalHoursApi.reducer,
    [companySubscriptionsApi.reducerPath]: companySubscriptionsApi.reducer,
    modal: modalReducer,
    invoice: invoiceSlice,
    userInfo: userInfoSlice,
    topNav: topNavSlice,
    sideNav: sideNavSlice,
    subscriptionPlan: subscriptionPlanSlice,
    designRequest: designRequestSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(
      clientInfoApi.middleware,
      totalHoursApi.middleware,
      companySubscriptionsApi.middleware
    ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
