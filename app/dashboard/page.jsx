import React from "react";
import { DashboardLayout } from "@/components/Layout";
const dashboard = ({ children }) => {
  return (
    <>
      <DashboardLayout>
        <div className="text-xl text-black">Welcome to the dashboard</div>
      </DashboardLayout>
    </>
  );
};

export default dashboard;
