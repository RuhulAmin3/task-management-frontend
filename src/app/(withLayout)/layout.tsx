import Navbar from "@/components/ui/Navbar";
import Sidebar from "@/components/ui/Sidebar";
import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex">
        <div className="">
          <Sidebar />
        </div>
        <div className="p-4 w-[100%]">{children}</div>
      </div>
    </div>
  );
};

export default HomeLayout;
