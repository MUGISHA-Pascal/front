import React, { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setCredentials } from "@/lib/redux/slices/authSlice";

interface AuthInitializerProps {
  children: ReactNode;
}

const AuthInitializer: React.FC<AuthInitializerProps> = ({ children }) => {
  const dispatch = useDispatch();
  console.log("App is initiallized");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userFromLocalStorage = localStorage.getItem("user");
      const tokenFromLocalStorage = localStorage.getItem("token");

      if (userFromLocalStorage && tokenFromLocalStorage) {
        dispatch(
          setCredentials({
            token: tokenFromLocalStorage,
            user: JSON.parse(userFromLocalStorage),
          })
        );
      }
    }
  }, [dispatch]);

  return children;
};

export default AuthInitializer;
