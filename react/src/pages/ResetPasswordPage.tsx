import React, { useEffect } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPasswordRequest } from "../store/auth/authThunks";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../store";
import { clearError } from "../store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { toast } from "react-toastify";

const resetPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

const ResetPasswordPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { token } = useParams<{ token: string }>();
  const { isLoading, error } = useAppSelector((state: RootState) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors } = {},
    control,
  } = useForm({
    resolver: yupResolver(resetPasswordSchema),
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

  const onSubmit = async (data: {
    password: string;
    confirmPassword: string;
  }) => {
    if (!token) {
      toast.error("Reset token is missing.");
      return;
    }
    const resultAction = await dispatch(
      resetPasswordRequest({ token, password: data.password })
    );
    if (resetPasswordRequest.fulfilled.match(resultAction)) {
      toast.success("Password has been reset successfully.");
      navigate("/login");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-brand-light">
      <div className="w-full max-w-md p-4 sm:p-6 md:p-8 bg-white rounded-lg shadow-card">
        <h2 className="text-2xl font-heading text-center text-brand-dark">
          Reset Password
        </h2>
        <p className="text-center text-brand-muted mb-6">
          Enter your new password below.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            label="New Password"
            name="password"
            type="password"
            control={control}
            error={errors?.password?.message}
          />
          <InputField
            label="Confirm New Password"
            name="confirmPassword"
            type="password"
            control={control}
            error={errors?.confirmPassword?.message}
          />
          <Button type="submit" className="w-full mt-4" disabled={isLoading}>
            {isLoading ? "Resetting..." : "Reset Password"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
