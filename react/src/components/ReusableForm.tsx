import React from 'react';
import { useForm, UseFormProps, FieldValues, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface ReusableFormProps<TFieldValues extends FieldValues> extends UseFormProps<TFieldValues> {
  onSubmit: SubmitHandler<TFieldValues>;
  children: React.ReactNode;
  schema: yup.AnyObjectSchema;
}

const ReusableForm = <TFieldValues extends FieldValues>({
  onSubmit,
  children,
  schema,
  ...formProps
}: ReusableFormProps<TFieldValues>) => {
  const methods = useForm<TFieldValues>({
    ...formProps,
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      {children}
    </form>
  );
};

export default ReusableForm;
