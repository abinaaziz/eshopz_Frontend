// import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {

    const token = localStorage.getItem("token");
    const location = useLocation();

    if (!token) {
        return (
            <Navigate
                to="/login"
                state={{
                    message: "Please login or register to access this page.",
                    from: location.pathname
                }}
                replace
            />
        );
    }

    return <Outlet />; //place where the allowed page appears.
};

export default ProtectedRoute;