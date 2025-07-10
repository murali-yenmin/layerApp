import React from "react";
import { useTranslation } from "react-i18next";
import ForgotPasswordForm, {
  ForgotPasswordFormInputs,
} from "../../components/auth/ForgotPasswordForm";
import { toast } from "react-toastify";
import { forgotPasswordApi } from "../../helpers/backend_helper";
import styles from "../../styles/auth/Login.module.scss";

const ForgotPassword: React.FC = () => {
  const { t } = useTranslation();
  const handleSubmit = async (data: ForgotPasswordFormInputs) => {
    try {
      const response = await forgotPasswordApi(data);
      toast.success("Forgot password successful:", response.data);
      // Handle successful request
    } catch (error: any) {
      const apiError = error.response?.data || {
        message: "An unexpected error occurred",
      };
      toast.error(apiError.message);
      throw new Error(apiError.message);
    }
  };

  return (
    <div>
      <div>
        <ForgotPasswordForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default ForgotPassword;
