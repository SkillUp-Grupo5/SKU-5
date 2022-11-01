import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import { Home } from "../application/home";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
