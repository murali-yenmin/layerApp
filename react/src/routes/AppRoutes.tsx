import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";

import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import ProfileViewPage from "../pages/ProfileViewPage";
import ProfileEditPage from "../pages/ProfileEditPage";
import HomePage from "../pages/HomePage";
import Layout from "../components/Layout";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import StaffListPage from "../pages/staff/StaffListPage";
import CreateStaffPage from "../pages/staff/CreateStaffPage";
import EditStaffPage from "../pages/staff/EditStaffPage";

const PrivateRoute: React.FC<{ children: any }> = ({ children }) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const AppRoutes: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password/:token" element={<ResetPasswordPage />} />

      <Route
        path="/"
        element={
          isAuthenticated ? (
            <Layout>
              <HomePage />
            </Layout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Layout>
              <ProfileViewPage />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/profile/edit"
        element={
          <PrivateRoute>
            <Layout>
              <ProfileEditPage />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/staff"
        element={
          <PrivateRoute>
            <Layout>
              <StaffListPage />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/staff/create"
        element={
          <PrivateRoute>
            <Layout>
              <CreateStaffPage />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/staff/edit/:id"
        element={
          <PrivateRoute>
            <Layout>
              <EditStaffPage />
            </Layout>
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
