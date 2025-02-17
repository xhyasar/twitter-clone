import {createBrowserRouter} from "react-router-dom";
import Home from "~/pages/Home";
import Explore from "~/pages/Explore";
import Notifications from "~/pages/Notifications";
import NotFound from "~/pages/NotFound";

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