import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useFormState } from "../../hooks/auth/useFormState";
interface LoginFormProps {
  onSubmit: (data: LoginFormInputs) => void;
}

export interface LoginFormInputs {
  email: string;
  password: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const { isLoading, error, setIsLoading, setError } = useFormState();
  const { t } = useTranslation();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email(t("validation.emailInvalid"))
      .required(t("validation.emailRequired")),
    password: yup
      .string()
      .min(6, t("validation.passwordMinLength"))
      .required(t("validation.passwordRequired")),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = async (data: LoginFormInputs) => {
    setIsLoading(true);
    setError(null);
    try {
      await onSubmit(data);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h2 className="text-center text-2xl font-semibold mb-6 text-gray-800">
        {t("login.signIn")}
      </h2>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
            {t("login.email")}
          </label>
          <input
            {...register("email")}
            id="email"
            type="email"
            className="w-full p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 font-medium text-gray-700">
            {t("login.password")}
          </label>
          <input
            {...register("password")}
            id="password"
            type="password"
            className="w-full p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white rounded-md text-base font-semibold cursor-pointer transition duration-300 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? t("login.loading") : t("login.button")}
        </button>
        <div className="text-right mt-3">
          <Link to="/forgot-password" className="text-blue-600 hover:underline">
            {t("login.forgotPassword")}
          </Link>
        </div>
        <div className="text-center mt-5">
          <p>
            {t("login.noAccount")}{" "}
            <Link to="/register" className="text-blue-600 font-semibold hover:underline">
              {t("register.createAccount")}
            </Link>
          </p>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
