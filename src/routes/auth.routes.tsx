import React from "react";
import { SignIn } from "../pages/SignIn";
import { BrowserRouter as Router, Route } from "react-router-dom";

export const Auth: React.FC = () => {
  return (
    <Router>
      <Route path="/" element={<SignIn />} />
    </Router>
  );
};
