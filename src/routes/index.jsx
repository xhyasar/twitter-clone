import {createBrowserRouter} from "react-router-dom";
import Home from "~/pages/home/index.jsx";
import Explore from "~/pages/explore/index.jsx";
import Notifications from "~/pages/notifications/index.jsx";
import NotFound from "~/pages/not-found/index.jsx";

const roots = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/explore',
        element: <Explore/>
    },
    {
        path: '/notifications',
        element: <Notifications />
    },
    {
        path: '*',
        element: <NotFound/>
    },
])

export default roots;