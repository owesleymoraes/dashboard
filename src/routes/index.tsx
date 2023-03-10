import React from "react";

import { useAuth } from "../hooks/auth";
import { SignIn } from "../pages/SignIn";
import { AppRoutes } from "./app.routes";

export const Routes: React.FC = () => {
  const { logged } = useAuth();
  return <>{logged ? <AppRoutes /> : <SignIn />}</>;
};
