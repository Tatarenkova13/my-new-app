import PageTwo from "../pages/PageTwo"
import SignIn from "../pages/SignIn"



export const privatRoutes = [
    {path: '/pageTwo', component: PageTwo, exact: true},
]

export const publicRoutes = [
    {path: '/signIn', component: SignIn, exact: true},
    
    
]