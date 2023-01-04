import React from "react";
import { Route, Routes, Redirect } from "react-router-dom";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";

const App = () => {
  return(
    <Routes>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
      <Redirect from="/" to="/admin/index" />
    </Routes>
  );
}

export default App;