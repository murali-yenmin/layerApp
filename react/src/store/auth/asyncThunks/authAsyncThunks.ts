import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../interfaces/User';
import { loginUserApi, registerUserApi } from '../../../helpers/backend_helper';

// Example async thunk for user login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials: { email: string; password: string }) => {
    const response = await loginUserApi(credentials);
    return response.data.user;
  }
);

// Async thunk for user registration
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData: { name: string; email: string; password: string }) => {
    const response = await registerUserApi(userData);
    return response.data.user;
  }
);
