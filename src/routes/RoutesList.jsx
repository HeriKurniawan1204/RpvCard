import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/auth/Dashboard";
import TokenProtected from "../components/protected/TokenProtected";
import { CobaRpv } from "../pages/CobaRpv";

export const RoutesList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CobaRpv />} />
        <Route
          path="/dashboard"
          element={
            <TokenProtected>
              <Dashboard />
            </TokenProtected>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
