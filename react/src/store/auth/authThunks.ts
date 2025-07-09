import { createAsyncThunk } from '@reduxjs/toolkit';
import { login, register, forgotPassword, resetPassword } from '../../services/api';
import { LoginResponse, RegisterResponse, ForgotPasswordResponse, ResetPasswordResponse, User } from './interfaces';

export const loginUser = createAsyncThunk<
  LoginResponse, // Return type of the payload creator
  { email: string; password: string }, // First argument to the payload creator
  { rejectValue: string } // Types for ThunkAPI
>(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await login(credentials);
      localStorage.setItem('token', response.access_token);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message || error.message);
    }
  }
);

export const registerUser = createAsyncThunk<
  RegisterResponse, // Return type of the payload creator
  { username: string; email: string; password: string; confirmPassword: string }, // First argument to the payload creator
  { rejectValue: string } // Types for ThunkAPI
>(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await register(userData);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message || error.message);
    }
  }
);

export const forgotPasswordRequest = createAsyncThunk<
  ForgotPasswordResponse, // Return type of the payload creator
  string, // First argument to the payload creator (email)
  { rejectValue: string } // Types for ThunkAPI
>(
  'auth/forgotPassword',
  async (email, { rejectWithValue }) => {
    try {
      const response = await forgotPassword(email);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message || error.message);
    }
  }
);

export const resetPasswordRequest = createAsyncThunk<
  ResetPasswordResponse, // Return type of the payload creator
  { token: string; password: string }, // First argument to the payload creator
  { rejectValue: string } // Types for ThunkAPI
>(
  'auth/resetPassword',
  async ({ token, password }, { rejectWithValue }) => {
    try {
      const response = await resetPassword(token, password);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message || error.message);
    }
  }
);
