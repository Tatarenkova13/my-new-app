import About from "../pages/About"
import Login from "../pages/Login"



export const privatRoutes = [
    {path: '/about', component: About, exact: true},
]

export const publicRoutes = [
    {path: '/login', component: Login, exact: true},
]