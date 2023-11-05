"use client";
import React from "react";
import { SubmitHandler, useForm, FormProvider } from "react-hook-form";

type FormDefaultValueType = {
  defaultValues?: Record<string, any>;
};

type FormType = {
  children: React.ReactNode | React.ReactElement;
  submitHandler: SubmitHandler<any>;
} & FormDefaultValueType;

const Form = ({ children, submitHandler, defaultValues }: FormType) => {
  const formConfig: FormDefaultValueType = {};
  const methods = useForm<FormType>(formConfig);

  if (!!defaultValues) formConfig.defaultValues = defaultValues;

  const { handleSubmit } = methods;
  const onSubmit = (data: any) => {
    submitHandler(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;
