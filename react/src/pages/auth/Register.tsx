import React from "react";
import { useTranslation } from "react-i18next";
import RegisterForm, {
  RegisterFormInputs,
} from "../../components/auth/RegisterForm";
import { toast } from "react-toastify";
import { registerUser } from "../../store/auth/asyncThunks/authAsyncThunks";
import { useAuth } from "../../hooks/react-hooks";
const Register: React.FC = () => {
  const { dispatch } = useAuth();
  const { t } = useTranslation();

  const handleSubmit = async (data: RegisterFormInputs) => {
    try {
      await dispatch(registerUser(data)).unwrap();
      toast.success(t("messages.registrationSuccess"));
    } catch (error: any) {
      toast.error(error.message || t("messages.unexpectedError"));
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-10 bg-white rounded-lg shadow-md">
        <RegisterForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Register;
