import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Home from "../pages/Home";
import MovieDetail from "../pages/MovieDetail";
import NotFound from "../pages/NotFound";
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
            {
                path: '/movie/:id',
                element: <MovieDetail />
            },
            {
                path: '/error',
                element: <Error />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    },
    //   {
    //     path: '/login',
    //     element: <Login />
    //   }
]);