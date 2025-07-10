import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { fetchStaffById, updateStaff } from "../../services/staff";
import { useParams } from "react-router-dom";

// Schema with all fields required
const schema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  role: yup.string().required("Role is required"),
});

// Infer type from schema
type FormValues = yup.InferType<typeof schema>;

const EditStaffPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const getStaff = async () => {
      try {
        const data = await fetchStaffById(id as string);
        reset(data);
      } catch (err) {
        setError("Failed to fetch staff");
      } finally {
        setLoading(false);
      }
    };

    getStaff();
  }, [id, reset]);

  const onSubmit = async (data: FormValues) => {
    try {
      await updateStaff(id as string, data);
      alert("Staff updated successfully!");
    } catch (error) {
      alert("Failed to update staff.");
    }
  };

  if (loading) return <div>Loading staff...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Staff</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <InputField
          name="email"
          control={control}
          label="Email"
          error={errors.email?.message}
        />
        <InputField
          name="firstName"
          control={control}
          label="First Name"
          error={errors.firstName?.message}
        />
        <InputField
          name="lastName"
          control={control}
          label="Last Name"
          error={errors.lastName?.message}
        />
        <InputField
          name="role"
          control={control}
          label="Role"
          error={errors.role?.message}
        />
        <Button type="submit">Update Staff</Button>
      </form>
    </div>
  );
};

export default EditStaffPage;
