import Dashboard from "views/dashboard";
import Tables from "views/tables";
import Profile from "views/profile";
import SignIn from "views/authentication/sign-in";
import SignUp from "views/authentication/sign-up";

// CoreUI Dashboard 2 MUI components
import ArgonBox from "./components/ArgonBox";

const routes = [
    {
        type: "route",
        name: "Dashboard",
        key: "dashboard",
        route: "/dashboard",
        icon: <ArgonBox component="i" color="primary" fontSize="14px" className="ni ni-tv-2" />,
        component: <Dashboard />,
    },
    {
        type: "route",
        name: "Tables",
        key: "tables",
        route: "/tables",
        icon: (
            <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-calendar-grid-58" />
        ),
        component: <Tables />,
    },
    { type: "title", title: "Account Pages", key: "account-pages" },
    {
        type: "route",
        name: "Profile",
        key: "profile",
        route: "/profile",
        icon: <ArgonBox component="i" color="dark" fontSize="14px" className="ni ni-single-02" />,
        component: <Profile />,
    },
    {
        type: "route",
        name: "Sign In",
        key: "sign-in",
        route: "/authentication/sign-in",
        icon: (
            <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-single-copy-04" />
        ),
        component: <SignIn />,
    },
    {
        type: "route",
        name: "Sign Up",
        key: "sign-up",
        route: "/authentication/sign-up",
        icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-collection" />,
        component: <SignUp />,
    },
];

export default routes;
