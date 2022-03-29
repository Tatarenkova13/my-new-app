import HomePage from "../pages/HomePage";
import PageTwo from "../pages/PageTwo"
import RequestPage from "../pages/RequestPage";
import SignIn from "../pages/SignIn"



export const privatRoutes = [
    {path: '/', element: <PageTwo /> },
    {path: 'requestPage', element: <RequestPage /> },
    // {path: '/', element: <HomePage /> },

];

export const publicRoutes = [
    {path: 'signIn', element: <SignIn /> },
    // {path: '/', element: <HomePage /> },
    
]