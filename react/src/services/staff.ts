import api from "./api";
import { ICreateStaff, IUpdateStaff } from "../types/staff";

const BASE_URL = "/staff";

export const fetchStaff = async () => {
  try {
    const response = await api.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching staff:", error);
    throw error;
  }
};

export const fetchStaffById = async (id: string) => {
  try {
    const response = await api.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching staff with ID ${id}:`, error);
    throw error;
  }
};

export const createStaff = async (staffData: ICreateStaff) => {
  try {
    const response = await api.post(BASE_URL, staffData);
    return response.data;
  } catch (error) {
    console.error("Error creating staff:", error);
    throw error;
  }
};

export const updateStaff = async (id: string, staffData: IUpdateStaff) => {
  try {
    const response = await api.patch(`${BASE_URL}/${id}`, staffData);
    return response.data;
  } catch (error) {
    console.error(`Error updating staff with ID ${id}:`, error);
    throw error;
  }
};

export const deleteStaff = async (id: string) => {
  try {
    await api.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    console.error(`Error deleting staff with ID ${id}:`, error);
    throw error;
  }
};
