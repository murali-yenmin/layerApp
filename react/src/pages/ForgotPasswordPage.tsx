import React, { useEffect } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgotPasswordRequest } from "../store/auth/authThunks";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { clearError } from "../store/auth/authSlice";
import { toast } from "react-toastify";

const forgotPasswordSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
});

const ForgotPasswordPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useAppSelector((state: RootState) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors } = {},
  } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
  });

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
    return () => {
      dispatch(clearError());
    };
  }, [dispatch, error]);

  const onSubmit = async (data: { email: string }) => {
    const resultAction = await dispatch(forgotPasswordRequest(data.email));
    if (forgotPasswordRequest.fulfilled.match(resultAction)) {
      toast.success("Password reset link sent to your email.");
      navigate("/login");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-brand-light">
      <div className="w-full max-w-md p-4 sm:p-6 md:p-8 bg-white rounded-lg shadow-card">
        <h2 className="text-2xl font-heading text-center text-brand-dark">
          Forgot Password
        </h2>
        <p className="text-center text-brand-muted mb-6">
          Enter your email to receive a password reset link.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            label="Email"
            name="email"
            type="email"
            register={register}
            error={errors?.email?.message}
          />
          <Button type="submit" className="w-full mt-4" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Reset Link"}
          </Button>
        </form>
        <div className="mt-4 text-center text-sm text-brand-muted">
          <p>
            Remember your password?{" "}
            <a
              href="/login"
              className="font-medium text-brand-primary hover:underline"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
