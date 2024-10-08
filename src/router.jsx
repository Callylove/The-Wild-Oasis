import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Cabins from "./pages/Cabins";
import Bookings from "./pages/Bookings";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Account from "./pages/Account";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />

          <Route path="dashboard" element={<Dashboard />} />
          <Route path="cabins" element={<Cabins />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
          <Route path="account" element={<Account />} />
        </Route>
        <Route path="login" element={<Login />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
