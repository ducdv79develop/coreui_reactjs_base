import React from "react";
import { useLocation, Route, Navigate, Routes } from "react-router-dom";

import routes from "routes.js";

import Index from "views/Index.js";
import Icons from "views/examples/Icons.js";

const Home = () => {
    return (
        <>
            <Route path="/admin/index" element={<Index />}></Route>
            <Route path="/admin/icons" element={<Icons />}></Route>
        </>
    );
}

export default Home;