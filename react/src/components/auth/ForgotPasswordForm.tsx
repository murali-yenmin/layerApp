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
    control,
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
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <h2 className="text-2xl font-bold text-center mb-6">
        {t("forgotPassword.title")}
      </h2>
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            id="email"
            label={t("forgotPassword.email")}
            type="email"
            error={errors.email?.message}
          />
        )}
      />
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      {success && <p className="mt-2 text-sm text-green-600">{success}</p>}
      <Button
        type="submit"
        isLoading={isLoading}
        className="w-full bg-primary-DEFAULT hover:bg-primary-dark text-white font-bold py-2 px-4 rounded"
      >
        {t("forgotPassword.button")}
      </Button>
      <div className="mt-4 text-center">
        <Link to="/login" className="text-primary-DEFAULT hover:underline">
          {t("login.signIn")}
        </Link>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
