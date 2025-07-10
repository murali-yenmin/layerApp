import React from "react";
import { useTranslation } from "react-i18next";
import RegisterForm, {
  RegisterFormInputs,
} from "../../components/auth/RegisterForm";
import { toast } from "react-toastify";
import { registerUser } from "../../store/auth/asyncThunks/authAsyncThunks";
import { useAuth } from "../../hooks/react-hooks";
import styles from "../../styles/auth/Login.module.scss";

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
    <div>
      <div>
        <RegisterForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Register;
