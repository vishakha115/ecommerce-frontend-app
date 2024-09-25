import React from "react";
import "./CSS/Admin.css";
import Sidebar from "../Components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom"; // Use Outlet to display child routes

const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />
      {/* Outlet will render the nested routes from App.js */}
      <Outlet />
    </div>
  );
};

export default Admin;
