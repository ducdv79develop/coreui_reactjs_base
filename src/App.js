import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";

const App = () => {
  return(
    <Routes>
      <Route path="admin/*"element={<AdminLayout />} />
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="/" element={<Navigate to="/auth/login" replace />} />
    </Routes>
  );
}

export default App;