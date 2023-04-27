import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '@/app/store';

type PageProps = {
  id: string;
  label: string;
  icon: React.ReactNode | string;
  counter?: number;
  link?: string;
};

type SideNavItemsProps = {
  topPages?: PageProps[];
  bottomPages?: PageProps[];
  companyName: string;
  companyLogo?: string;
  companyUrl?: string;
  fullName?: string;
  firstName: string;
  lastName: string;
  userAvatar?: string;
  isCollapsed?: boolean;
  isFixed?: boolean;
  canToggle?: boolean;
  role?: 'client' | 'manager' | 'admin' | null;
  designRequestEnabled?: boolean;
  navPopUp?: any[];
  userPopUp?: any[];
};

type SideNavStateProps = {
  data: SideNavItemsProps;
  isLoading: boolean;
  error: string | null;
};

const initialState: SideNavStateProps = {
  data: {
    topPages: [
      {
        id: '',
        label: '',
        icon: '',
        counter: 0,
        link: '',
      },
    ],
    bottomPages: [
      {
        id: '',
        label: '',
        icon: '',
        counter: 0,
        link: '',
      },
    ],
    companyName: '',
    companyLogo: '',
    companyUrl: '',
    isCollapsed: true,
    canToggle: true,
    fullName: '',
    firstName: '',
    lastName: '',
    userAvatar: '',
    isFixed: true,
    role: 'client',
    designRequestEnabled: true,
    navPopUp: [],
    userPopUp: [],
  },
  isLoading: false,
  error: null,
};

const sideNavSlice = createSlice({
  name: 'sideNav',
  initialState,
  reducers: {
    setSideNav: (state, action: PayloadAction<SideNavItemsProps>) => {
      state.data = action.payload;
    },
  },
});

export const { setSideNav } = sideNavSlice.actions;

export const selectSideNav = (state: RootState) => state.sideNav;

export default sideNavSlice.reducer;
