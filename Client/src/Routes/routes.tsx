import App from "@/App";
import Error from "./Error";

import { createBrowserRouter } from "react-router-dom";
import MovieInformation from "@/components/MovieInformation/MovieInformation";
import Actors from "@/components/Actors/Actors";
import Movies from "@/components/Movies/Movies";
import Profile from "@/components/Profile/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Movies />
            },
            {
                path: "/movies/:id",
                element: <MovieInformation />
            },
            {
                path: "/actors/:id",
                element: <Actors />
            },
            {
                path: "/profile/:id",
                element: <Profile />
            }
        ]
    },
])

export default router;

