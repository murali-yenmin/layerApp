import React from "react";
import { useForm, Control } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { createStaff } from "../../services/staff";
import { ICreateStaff } from "../../types/staff";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  role: yup.string().required("Role is required"),
});

const CreateStaffPage: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ICreateStaff>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: ICreateStaff) => {
    try {
      await createStaff(data);
      alert("Staff created successfully!");
      // Optionally redirect to staff list page
    } catch (error) {
      alert("Failed to create staff.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create Staff</h1>
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
        <Button type="submit">Create Staff</Button>
      </form>
    </div>
  );
};

export default CreateStaffPage;
