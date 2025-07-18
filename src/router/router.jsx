import {
    createBrowserRouter
} from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../Layouts/AuthLayout";
import LogIn from "../pages/Authintication/LogIn/LogIn";
import Register from "../pages/Authintication/Register/Register";
import Coverage from "../pages/Coverage/Coverage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SendParcel from "../pages/SendParcel/SendParcel";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/coverage",
                Component: Coverage
            },
            {
                path: "/sendParcel",
                element: <PrivateRoute><SendParcel></SendParcel></PrivateRoute>,
            },
        ]
    },
    {
        path: "/",
        Component: AuthLayout,
        children: [
            {
                path: "login",
                Component: LogIn
            },
            {
                path: "register",
                Component: Register
            }
        ]
    }
]);