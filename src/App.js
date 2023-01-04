import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// import AdminLayout from "layouts/Admin.js";
// import AuthLayout from "layouts/Auth.js";

import Home from "views/Home";

import Index from "views/Index.js";
import Icons from "views/examples/Icons.js";

const App = () => {
  return(
    <Routes>
      {/* <Route path="/admin">
        <AdminLayout />
      </Route> */}
      {/* <Route path="/auth" element={<AuthLayout />} /> */}
      {/* <Route path="/" element={<Navigate to="/admin/index" replace />} /> */}
      <Route path="/parent" element={<h1>I am parent</h1>}>
        <Route path="child" element={<h2>I am child</h2>} />
      </Route>
      <Route path="admin">
        <Route path="index" element={<Index />}/>
        <Route path="icons" element={<Icons />}/>
      </Route>
    </Routes>
  );
}

export default App;