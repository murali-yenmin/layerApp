import React, { useState, useEffect } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface UserProfile {
  _id?: string;
  username?: string;
  email: string;
  firstName?: string;
  lastName?: string;
  address?: string;
  phone?: string;
}

const profileEditSchema = yup.object().shape({
  username: yup.string().optional(),
  email: yup.string().email("Invalid email").required("Email is required"),
  firstName: yup.string().optional(),
  lastName: yup.string().optional(),
  address: yup.string().optional(),
  phone: yup.string().optional(),
});

const ProfileEditPage: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<UserProfile>({
    // resolver: yupResolver(profileSchema),
    // defaultValues: profile,
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get("/profile");
        setProfile(response.data);
        reset(response.data); // Reset form with fetched data
      } catch (err: any) {
        console.error("Failed to fetch profile:", err);
        toast.error(err.response?.data?.message || "Failed to load profile.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [reset]);

  const onSubmit = async (data: UserProfile) => {
    try {
      await api.put(`/profile/${profile?._id}`, data); // Assuming profile has an _id
      toast.success("Profile updated successfully!");
      navigate("/profile");
    } catch (err: any) {
      console.error("Profile update failed:", err);
      toast.error(
        err.response?.data?.message ||
          "Profile update failed. Please try again."
      );
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading profile...
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        No profile data available.
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">Edit Profile</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            label="Email"
            name="email"
            type="email"
            control={control}
            error={errors.email?.message}
          />
          <InputField
            label="Email"
            name="email"
            type="email"
            control={control}
            error={errors.email?.message}
          />
          <InputField
            label="First Name"
            name="firstName"
            type="text"
            control={control}
            error={errors.firstName?.message}
          />
          <InputField
            label="Last Name"
            name="lastName"
            type="text"
            control={control}
            error={errors.lastName?.message}
          />
          <InputField
            label="Address"
            name="address"
            type="text"
            control={control}
            error={errors.address?.message}
          />
          <InputField
            label="Phone"
            name="phone"
            type="text"
            control={control}
            error={errors.phone?.message}
          />
          <div className="flex items-baseline justify-between mt-4">
            <Button type="submit">Save Changes</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileEditPage;
