import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useFormState } from "../../hooks/auth/useFormState";
import Input from "../common/Input";
import Button from "../common/Button";
import styles from "../../styles/auth/Login.module.scss";

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
    control,
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

  useEffect(() => {
    console.log({ t });
  });

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <h2 className="text-2xl font-bold text-center mb-6">
        {t("login.signIn")}
      </h2>
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            id="email"
            label={t("login.email")}
            type="email"
            error={errors.email?.message}
            className="mb-4"
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            id="password"
            label={t("login.password")}
            type="password"
            error={errors.password?.message}
            className="mb-6"
          />
        )}
      />
      {error && (
        <p className="mt-2 text-sm text-red-600 text-center">{error}</p>
      )}
      <Button
        type="submit"
        isLoading={isLoading}
        className="w-full bg-primary-DEFAULT hover:bg-primary-dark text-white font-bold py-2 px-4 rounded"
      >
        {t("login.button")}
      </Button>
      <div className="mt-4 text-center">
        <Link
          to="/forgot-password"
          className="text-primary-DEFAULT hover:underline"
        >
          {t("login.forgotPassword")}
        </Link>
      </div>
      <div className="mt-2 text-center">
        <Link to="/register" className="text-primary-DEFAULT hover:underline">
          {t("register.createAccount")}
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
