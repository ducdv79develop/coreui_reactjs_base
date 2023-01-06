import Dashboard from "views/admin/Dashboard.js";
import Profile from "views/admin/Profile.js";
import Tables from "views/admin/Tables.js";
import Icons from "views/admin/Icons.js";

import Register from "views/auth/Register";
import Login from "views/auth/Login";
import ForgotPassword from "views/auth/ForgotPassword";

var routes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: "ni ni-tv-2 text-primary",
        element: <Dashboard />,
        layout: "/admin"
    },
    {
        path: "/icons",
        name: "Icons",
        icon: "ni ni-planet text-blue",
        element: <Icons />,
        layout: "/admin"
    },
    {
        path: "/user-profile",
        name: "User Profile",
        icon: "ni ni-single-02 text-yellow",
        element: <Profile />,
        layout: "/admin"
    },
    {
        path: "/tables",
        name: "Tables",
        icon: "ni ni-bullet-list-67 text-red",
        element: <Tables />,
        layout: "/admin"
    },
    {
        path: "/login",
        name: "Login",
        icon: "ni ni-key-25 text-info",
        element: <Login />,
        layout: "/auth"
    },
    {
        path: "/register",
        name: "Register",
        icon: "ni ni-circle-08 text-pink",
        element: <Register />,
        layout: "/auth"
    },
    {
        path: "/forgot-password",
        name: "ForgotPassword",
        icon: "ni ni-lock-circle-open text-info",
        element: <ForgotPassword />,
        layout: "/auth"
    },
];
export default routes;
