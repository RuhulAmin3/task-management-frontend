"use client";
import React from "react";
import { ThemeProvider } from "@material-tailwind/react";
import { Provider } from "react-redux";
import { store } from "@/redux/app/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <Provider store={store}>{children}</Provider>
      <ToastContainer />
    </ThemeProvider>
  );
};

export default Providers;
