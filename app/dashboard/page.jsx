import React from "react";
import { DashboardLayout } from "@/components/Layout";
const dashboard = ({ children }) => {
  return (
    <>
      <DashboardLayout>{children}</DashboardLayout>
    </>
  );
};

export default dashboard;
