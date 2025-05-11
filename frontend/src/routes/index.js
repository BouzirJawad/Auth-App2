import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import { ProtectedRoute } from "./ProtectedRoute";

const Routes = () => {
    const { token } = useAuth()

    const publicRoutes = [
        {
            path: "/home",    
            element: <div>Home page</div>
        },
        {
            path: "/about-us",
            element: <div>About Us</div>,
        },
    ]

    const authRoutesOnly = [
        { 
            path: "/",
            element: <ProtectedRoute />,
            children: [
                {
                    path: "/",
                    element: <div>User Home Page</div>
                },
                {
                    path: "/logout",
                    element: <div>Lougout</div>
                }
            ]
        }
    ]

    const nonAuthRoutesOnly = [
        {
            path: "/",
            element: <div>Home Page</div>
        },
        {
            path: "/login",
            element: <div>Login Page</div>
        }
    ]

    const router = createBrowserRouter([
        ...publicRoutes,
        ...(!token ? nonAuthRoutesOnly : []),
        ...authRoutesOnly,
    ])

    return <RouterProvider router={router} />
}

export default Routes



