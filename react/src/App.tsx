import React from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Unauthorized from "./pages/Unauthorized";
import PrivateRoute from "./routes/PrivateRoute";
import { ToastContainer } from "react-toastify";
import Layout from "./components/layout/Layout";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Register from "./pages/auth/Register";

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Protected routes */}
        <Route element={<PrivateRoute />}>
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />

            {/* Role-specific route */}
            <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
              <Route path="/admin-only" element={<div>Admin Dashboard</div>} />
            </Route>

            {/* Add more routes here */}
          </Route>
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Login />} />
      </Routes>

      <ToastContainer aria-label="Notification messages" />
    </I18nextProvider>
  );
};

export default App;
