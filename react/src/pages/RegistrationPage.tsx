import React, { useEffect } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerUser } from "../store/auth/authThunks";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store";
import { RegisterResponse } from "../store/auth/interfaces";
import { clearError } from "../store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { toast } from "react-toastify";

const registrationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

const RegistrationPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useAppSelector((state: RootState) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors } = {},
    control,
  } = useForm({
    resolver: yupResolver(registrationSchema),
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

  const onSubmit = async (data: any) => {
    const resultAction = await dispatch(registerUser(data));
    if (registerUser.fulfilled.match(resultAction)) {
      toast.success("Registration successful! You can now log in.");
      navigate("/login");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-brand-light">
      <div className="w-full max-w-md p-4 sm:p-6 md:p-8 bg-white rounded-lg shadow-card">
        <h2 className="text-2xl font-heading text-center text-brand-dark">
          Create an Account
        </h2>
        <p className="text-center text-brand-muted mb-6">
          Join us and start your journey.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            label="Username"
            name="username"
            type="text"
            control={control}
            error={errors?.username?.message}
          />
          <InputField
            label="Email"
            name="email"
            type="email"
            control={control}
            error={errors?.email?.message}
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            control={control}
            error={errors?.password?.message}
          />
          <InputField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            control={control}
            error={errors?.confirmPassword?.message}
          />
          <Button type="submit" className="w-full mt-4" disabled={isLoading}>
            {isLoading ? "Registering..." : "Register"}
          </Button>
        </form>
        <div className="mt-4 text-center text-sm text-brand-muted">
          <p>
            Already have an account?{" "}
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

export default RegistrationPage;
