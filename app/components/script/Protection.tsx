"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

interface RolePathType {
  talent: string;
  admin: string;
}

const ProtectedRoute = ({ role }: { role: string }) => {
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    // if (!role) {
    //   router.push("/login");
    //   return;
    // }
    const availableRole = path.split("/")[1];
    if (role != availableRole) {
      router.push("/unauthorized"); // Redirect to unauthorized page
    }
  }, [router, path, role]);

  return null;
};

export default ProtectedRoute;
