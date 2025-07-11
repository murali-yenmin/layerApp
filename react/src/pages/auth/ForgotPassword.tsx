import React from "react";
import { useTranslation } from "react-i18next";
import ForgotPasswordForm, {
  ForgotPasswordFormInputs,
} from "../../components/auth/ForgotPasswordForm";
import { toast } from "react-toastify";
import { forgotPasswordApi } from "../../helpers/backend_helper";
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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-10 bg-white rounded-lg shadow-md">
        <ForgotPasswordForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default ForgotPassword;
