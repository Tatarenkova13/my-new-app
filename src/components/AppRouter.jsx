import React, { useContext } from "react";
import { Navigate, Outlet, Redirect, Route, Routes, Switch } from 'react-router-dom';
import { AuthContext } from "../context";
import { publicRoutes, privatRoutes } from "../router/routes";

const AppRouter = () => {

    const {isAuth} = useContext(AuthContext);
    console.log(isAuth)

    return (
        isAuth
        ?
        <Routes>
            {privatRoutes.map(route =>
                <Route
                    component={route.component}
                    path = {route.path}
                    exact = {route.exact}
                    element = {route.element}
                    key = {route.path}
                />
            )}
            <Route path='signIn' element={<Navigate to='/' />} />
        </Routes>
        :
        <Routes>
            {publicRoutes.map(route =>
                <Route
                    component={route.component}
                    path = {route.path}
                    element = {route.element}
                    exact = {route.exact}
                    key = {route.path}
                />
            )}
            <Route path='/' element={<Navigate to='/signIn' />} />
        </Routes>
        
    )
}



export default AppRouter;