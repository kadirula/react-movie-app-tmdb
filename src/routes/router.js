import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PopularMovies from "../pages/PopularMovies";
import Search from "../pages/Search";
import TopRatedMovies from "../pages/TopRatedMovies";
import UpcomingMovies from "../pages/UpcomingMovies";
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
            {
                path: '/popular',
                element: <PopularMovies />
            },
            {
                path: '/top-rated',
                element: <TopRatedMovies />
            },
            {
                path: '/upcoming',
                element: <UpcomingMovies />
            },
            {
                path: '/search/:value',
                element: <Search />
            },
        ]
    },
    //   {
    //     path: '/login',
    //     element: <Login />
    //   }
]);