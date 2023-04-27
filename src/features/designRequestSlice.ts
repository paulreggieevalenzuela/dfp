import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '@/app/store';

export interface FormDataProps {
  projectName: string;
  category: string;
  // TODO: add more actual design request data interface here
}

type DesignRequestProps = {
  formData?: FormDataProps;
  isFormValid: boolean;
  showDeliverables: boolean;
  showBrandAssets: boolean;
  openFormDeliverables: boolean;
};

type DesignRequestStateProps = {
  value: DesignRequestProps;
  isLoading: boolean;
  error: string | null;
};

const initialState: DesignRequestStateProps = {
  value: {
    formData: {
      projectName: '',
      category: 'Lorem category',
    },
    isFormValid: false,
    showDeliverables: false,
    showBrandAssets: false,
    openFormDeliverables: false,
  },
  isLoading: false,
  error: null,
};

const designRequestSlice = createSlice({
  name: 'designRequest',
  initialState,
  reducers: {
    updateDesignRequestFormData: (
      state,
      action: PayloadAction<FormDataProps>
    ) => {
      state.value.formData = action.payload;
    },
    setIsFormValid: (state, action: PayloadAction<boolean>) => {
      state.value.isFormValid = action.payload;
    },
    toggleShowDeliverables: (state, action: PayloadAction<boolean>) => {
      state.value.showDeliverables = action.payload;
    },
    toggleShowBrandAssets: (state, action: PayloadAction<boolean>) => {
      state.value.showBrandAssets = action.payload;
    },
    toggleOpenFormDeliverables: (state, action: PayloadAction<boolean>) => {
      state.value.openFormDeliverables = action.payload;
    },
  },
});

export const {
  updateDesignRequestFormData,
  toggleShowDeliverables,
  toggleShowBrandAssets,
  toggleOpenFormDeliverables,
  setIsFormValid,
} = designRequestSlice.actions;

export const selectDesignRequest = (state: RootState) => state.designRequest;

export default designRequestSlice.reducer;
