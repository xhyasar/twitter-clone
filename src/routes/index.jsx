import {createBrowserRouter} from "react-router-dom";
import Home from "~/pages/Home";
import Explore from "~/pages/Explore";
import Notifications from "~/pages/Notifications";

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
    }
])

export default roots;