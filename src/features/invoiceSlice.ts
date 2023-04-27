import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '@/app/store';

type InvoiceStateProps = {
  invoiceId: string | null;
  invoicePopUpMenu: React.ReactNode | null;
};

const initialState: InvoiceStateProps = {
  invoiceId: null,
  invoicePopUpMenu: null,
};

const invoiceSlice = createSlice({
  name: 'invoice',
  initialState,
  reducers: {
    setInvoiceId: (state, action) => {
      state.invoiceId = action.payload;
    },
    setInvoicePopUpMenu: (state, action) => {
      state.invoicePopUpMenu = action.payload;
    },
  },
});

export const { setInvoiceId, setInvoicePopUpMenu } = invoiceSlice.actions;

export const selectInvoice = (state: RootState) => state.invoice;

export default invoiceSlice.reducer;
