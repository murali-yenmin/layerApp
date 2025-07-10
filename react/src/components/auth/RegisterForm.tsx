import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useFormState } from "../../hooks/auth/useFormState";
import Input from "../common/Input";
import Button from "../common/Button";
import styles from "../../styles/auth/Login.module.scss";

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
    handleSubmit,
    formState: { errors },
    control,
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
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <h2 className="text-2xl font-bold text-center mb-6">
        {t("register.createAccount")}
      </h2>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            id="name"
            label={t("register.name")}
            type="text"
            error={errors.name?.message}
            className="mb-4"
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            id="email"
            label={t("register.email")}
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
            label={t("register.password")}
            type="password"
            error={errors.password?.message}
            className="mb-4"
          />
        )}
      />
      <Controller
        name="confirmPassword"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            id="confirmPassword"
            label={t("register.confirmPassword")}
            type="password"
            error={errors.confirmPassword?.message}
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
        {t("register.button")}
      </Button>
      <div className="mt-4 text-center">
        <Link to="/login" className="text-primary-DEFAULT hover:underline">
          {t("login.signIn")}
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
