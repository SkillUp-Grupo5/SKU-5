import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import { Home } from "../application/home";
import { LoginPage } from "../application/auth";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route path="/" element={<Home />} />

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
