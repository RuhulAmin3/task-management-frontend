"use client";
import LoadingSpinner from "@/components/ui/Loading";
import Navbar from "@/components/ui/Navbar";
import Sidebar from "@/components/ui/Sidebar";
import { isLoggin } from "@/utils";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Loading from "../loading";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const isUserLogin = isLoggin("accessToken");
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    setIsLoading(true);
    if (!isUserLogin) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [router, isLoading]);

  if (!isLoading) {
    return <Loading />;
  }
  return (
    <div className="min-h-screen">
      <Navbar />
      <div>
        <div className="p-4 w-[100%]">{children}</div>
      </div>
    </div>
  );
};

export default HomeLayout;
