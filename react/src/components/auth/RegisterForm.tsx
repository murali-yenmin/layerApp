import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useFormState } from "../../hooks/auth/useFormState";
interface RegisterFormProps {
  onSubmit: (data: RegisterFormInputs) => void;
}

export interface RegisterFormInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
  const { isLoading, error, setIsLoading, setError } = useFormState();
  const { t } = useTranslation();

  const schema = yup.object().shape({
    name: yup.string().required(t("validation.nameRequired")),
    email: yup
      .string()
      .email(t("validation.emailInvalid"))
      .required(t("validation.emailRequired")),
    password: yup
      .string()
      .min(6, t("validation.passwordMinLength"))
      .required(t("validation.passwordRequired")),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], t("validation.passwordsMatch"))
      .required(t("validation.confirmPasswordRequired")),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = async (data: RegisterFormInputs) => {
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
        {t("register.createAccount")}
      </h2>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="mb-5">
          <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
            {t("register.name")}
          </label>
          <input
            {...register("name")}
            id="name"
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
            {t("register.email")}
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
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 font-medium text-gray-700">
            {t("register.password")}
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
        <div className="mb-5">
          <label htmlFor="confirmPassword" className="block mb-2 font-medium text-gray-700">
            {t("register.confirmPassword")}
          </label>
          <input
            {...register("confirmPassword")}
            id="confirmPassword"
            type="password"
            className="w-full p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white rounded-md text-base font-semibold cursor-pointer transition duration-300 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? t("register.loading") : t("register.button")}
        </button>
        <div className="text-center mt-5">
          <p>
            {t("register.alreadyAccount")}{" "}
            <Link to="/login" className="text-blue-600 font-semibold hover:underline">
              {t("login.signIn")}
            </Link>
          </p>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
