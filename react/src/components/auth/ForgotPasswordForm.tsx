import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useFormState } from "../../hooks/auth/useFormState";
interface ForgotPasswordFormProps {
  onSubmit: (data: ForgotPasswordFormInputs) => void;
}

export interface ForgotPasswordFormInputs {
  email: string;
}

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({
  onSubmit,
}) => {
  const { isLoading, error, success, setIsLoading, setError, setSuccess } =
    useFormState();
  const { t } = useTranslation();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email(t("validation.emailInvalid"))
      .required(t("validation.emailRequired")),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormInputs>({
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = async (data: ForgotPasswordFormInputs) => {
    setIsLoading(true);
    setError(null);
    setSuccess(null);
    try {
      await onSubmit(data);
      setSuccess("Password reset link sent to your email.");
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h2 className="text-center text-2xl font-semibold mb-6 text-gray-800">
        {t("forgotPassword.title")}
      </h2>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
            {t("forgotPassword.email")}
          </label>
          <input
            {...register("email")}
            id="email"
            type="email"
            className="w-full p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
        {success && <p className="text-green-600 text-center mb-4">{success}</p>}
        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white rounded-md text-base font-semibold cursor-pointer transition duration-300 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading
            ? t("forgotPassword.loading")
            : t("forgotPassword.button")}
        </button>
        <div className="text-center mt-5">
          <p>
            {t("forgotPassword.remembered")}{" "}
            <Link to="/login" className="text-blue-600 font-semibold hover:underline">
              {t("login.signIn")}
            </Link>
          </p>
        </div>
      </form>
    </>
  );
};

export default ForgotPasswordForm;
