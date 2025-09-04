// "use client";

// import { useAuth } from "@/contexts/AuthContext";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// interface Props {
//   children: React.ReactNode;
//   allowedRoles: Array<"admin" | "mentor" | "mentee">;
// }

// const RoleBasedRoute = ({ children, allowedRoles }: Props) => {
//   const { auth } = useAuth();
//   const router = useRouter();

//   useEffect(() => {
//     if (!auth.token) {
//       router.push("/login");
//     } else if (!allowedRoles.includes(auth.user?.role as any)) {
//       router.push("/unauthorized");
//     }
//   }, [auth, allowedRoles, router]);

//   if (!auth.token || !allowedRoles.includes(auth.user?.role as any)) return null;

//   return <>{children}</>;
// };

// export default RoleBasedRoute;


"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
  allowedRoles: Array<"admin" | "mentor" | "mentee">;
}

const RoleBasedRoute = ({ children, allowedRoles }: Props) => {
  const { auth } = useAuth();
  const router = useRouter();
  const role = auth.user?.role as "admin" | "mentor" | "mentee" | undefined;

  useEffect(() => {
    if (!auth.token) {
      router.push("/login");
    } else if (!role || !allowedRoles.includes(role)) {
      router.push("/unauthorized");
    }
  }, [auth.token, role, allowedRoles, router]);

  if (!auth.token || !role || !allowedRoles.includes(role)) return null;

  return <>{children}</>;
};

export default RoleBasedRoute;
