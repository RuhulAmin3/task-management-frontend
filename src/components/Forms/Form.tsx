"use client";
import React, { useEffect } from "react";
import { SubmitHandler, useForm, FormProvider } from "react-hook-form";

type FormDefaultValueType = {
  defaultValues?: Record<string, any>;
};

type FormType = {
  children: React.ReactNode | React.ReactElement;
  className?: string;
  submitHandler: SubmitHandler<any>;
} & FormDefaultValueType;

const Form = ({
  children,
  submitHandler,
  defaultValues,
  className,
}: FormType) => {
  const formConfig: FormDefaultValueType = {};
  if (!!defaultValues) formConfig.defaultValues = defaultValues;
  const methods = useForm<FormType>(formConfig);

  const { handleSubmit, reset } = methods;
  const onSubmit = (data: any) => {
    submitHandler(data);
  };

  useEffect(() => reset(defaultValues), [defaultValues, reset, methods]);
  return (
    <FormProvider {...methods}>
      <form className={className} onSubmit={handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
