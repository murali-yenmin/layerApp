import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import LoginForm, { LoginFormInputs } from "../../components/auth/LoginForm";
import { toast } from "react-toastify";
import { loginUser } from "../../store/auth/asyncThunks/authAsyncThunks";
import { useAuth } from "../../hooks/react-hooks";
const Login: React.FC = () => {
  const { dispatch } = useAuth();
  const { t } = useTranslation();

  const handleSubmit = async (data: LoginFormInputs) => {
    try {
      await dispatch(loginUser(data)).unwrap();
      toast.success(t("messages.loginSuccess"));
    } catch (error: any) {
      toast.error(error.message || t("messages.unexpectedError"));
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-10 bg-white rounded-lg shadow-md">
        <LoginForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Login;
