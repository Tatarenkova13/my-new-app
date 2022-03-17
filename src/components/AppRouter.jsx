import React, { useContext } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import { AuthContext } from "../context";
import { publicRoutes, privatRoutes } from "../router/routes";

const AppRouter = () => {

    const {isAuth} = useContext(AuthContext);
    console.log(isAuth)

    return (
        isAuth
        ?
        <Switch>
            {privatRoutes.map(route =>
                <Route
                    component={route.component}
                    path = {route.path}
                    exact = {route.exact}
                    key = {route.path}
                />
            )}
            <Redirect to='/pageTwo'/>
        </Switch>
        :
        <Switch>
            {publicRoutes.map(route =>
                <Route
                    component={route.component}
                    path = {route.path}
                    exact = {route.exact}
                    key = {route.path}
                />
            )}
            <Redirect to='/signIn'/>
        </Switch>
        
    )
}

export default AppRouter;