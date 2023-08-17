import React from "react";
import { Navigate,Outlet } from "react-router-dom";

const Private = ({ component: component , ...rest}) =>{
    const accessToken = localStorage.getItem("asuhas23sdga");
    return accessToken ? <Outlet/> : <Navigate to="/login"/>;
};

export default Private;