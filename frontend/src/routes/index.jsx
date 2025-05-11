import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import Logout from "../components/Logout"
import Connect from "../pages/Connect"

const Routes = () => {
    const { token } = useAuth()

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
                    element: <Logout />
                }
            ]
        }
    ]

    const nonAuthRoutesOnly = [
        {
            path: "/login",
            element: <Connect />
        }
    ]

    const router = createBrowserRouter([
        ...(!token ? nonAuthRoutesOnly : []),
        ...authRoutesOnly,
    ])

    return <RouterProvider router={router} />
}

export default Routes



