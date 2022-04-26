import React, { useContext } from "react";
import { Navigate, Outlet, Redirect, Route, Routes, Switch } from 'react-router-dom';
import { AuthContext } from "../context";
import PageTwo from "../pages/PageTwo";
import RequestPage from "../pages/RequestPage";
import SignIn from "../pages/SignIn";

const AppRouter = () => {

    const {isAuth} = useContext(AuthContext);
    console.log(isAuth)


    const ProtectedRoute = ({ isAuth, children }) => {
        if (!isAuth) {
            return <Navigate to="/signIn" replace />;
        }
        return children;
    };

    return (
        <Routes>
            <Route 
                path="/" 
                element={
                    <ProtectedRoute isAuth={isAuth}>
                        <PageTwo />
                    </ProtectedRoute>
                } 
            />
            <Route 
                path="requestPage" 
                element={
                    <ProtectedRoute isAuth={isAuth}>
                        <RequestPage />
                    </ProtectedRoute>
                } 
            />
            <Route path="signIn" element={<SignIn />} />
            <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
    )
}



export default AppRouter;