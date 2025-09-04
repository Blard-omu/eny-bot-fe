"use client";
import DashboardHome from "@/components/dashboard/dasboard.home";
import RoleBasedRoute from "@/components/routes/RoleBasedRoute";


export default function Dashboard() {
  return (
    <>
      <RoleBasedRoute allowedRoles={["admin"]}>
        <DashboardHome />
      </RoleBasedRoute>

    </>
  );
};


