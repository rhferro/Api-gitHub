import React from "react";
import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage";
import RepositoriesPage from "./pages/RepositoriesPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainPage />} path="/" />
      <Route element={<RepositoriesPage />} path="/:login/repositories" />
    </Routes>
  );
}
