import {
    createBrowserRouter
} from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../Layouts/AuthLayout";
import LogIn from "../pages/Authintication/LogIn/LogIn";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    },
    {
        path: "/",
        Component: AuthLayout,
        children: [
            {
                path: "login",
                Component: LogIn
            }
        ]
    }
]);