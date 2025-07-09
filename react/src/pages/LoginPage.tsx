import React, { useEffect } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginUser } from "../store/auth/authThunks";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store";
import { clearError } from "../store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { toast } from "react-toastify";

const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoading, error, isAuthenticated } = useAppSelector(
    (state: RootState) => state.auth
  );

  const {
    register,
    handleSubmit,
    formState: { errors } = {},
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/profile");
    }
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
    return () => {
      dispatch(clearError());
    };
  }, [isAuthenticated, navigate, dispatch, error]);

  const onSubmit = (data: { email: string; password: string }) => {
    dispatch(loginUser(data));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-brand-light">
      <div className="w-full max-w-md p-4 sm:p-6 md:p-8 bg-white rounded-lg shadow-card">
        <h2 className="text-2xl font-heading text-center text-brand-dark">
          Welcome Back!
        </h2>
        <p className="text-center text-brand-muted mb-6">
          Sign in to continue to your account.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            label="Email"
            name="email"
            type="email"
            register={register}
            error={errors?.email?.message}
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            register={register}
            error={errors?.password?.message}
          />
          <div className="text-right mb-4">
            <a
              href="/forgot-password"
              className="font-medium text-brand-primary hover:underline"
            >
              Forgot password?
            </a>
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </form>
        <div className="mt-4 text-center text-sm text-brand-muted">
          <p>
            Don't have an account?{" "}
            <a
              href="/register"
              className="font-medium text-brand-primary hover:underline"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
