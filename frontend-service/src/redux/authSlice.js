import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    isAdminAuthenticated: false,
  },
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    adminLogin: (state) => {
      state.isAdminAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.isAdminAuthenticated = false;
    },
  },
});

export const { login, adminLogin, logout } = authSlice.actions;

export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectIsAdminAuthenticated = (state) => state.auth.isAdminAuthenticated;

export default authSlice.reducer;