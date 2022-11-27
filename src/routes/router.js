import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "./Layout";
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <ProtectedRoute>
                <Layout />
            </ProtectedRoute>
        ),
        children: [
            {
                path: '/',
                element: <Home />
            },
        ]
    },
    //   {
    //     path: '/login',
    //     element: <Login />
    //   }
]);