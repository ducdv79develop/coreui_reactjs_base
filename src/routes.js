import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";

var routes = [
    {
        path: "/index",
        name: "Dashboard",
        icon: "ni ni-tv-2 text-primary",
        element: <Index />,
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
    }
];
export default routes;
