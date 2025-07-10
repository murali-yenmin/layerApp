import api from "../services/api";
import * as url from "./url_helper";

// Auth
export const loginUserApi = (data: any) => api.post(url.LOGIN, data);
export const registerUserApi = (data: any) => api.post(url.REGISTER, data);
export const forgotPasswordApi = (data: any) => api.post(url.FORGOT_PASSWORD, data);

// Add other API functions here
