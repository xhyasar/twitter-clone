import {createBrowserRouter} from "react-router-dom";
import Home from "~/pages/home/index.jsx";
import Explore from "~/pages/explore/index.jsx";
import Notifications from "~/pages/notifications/index.jsx";
import NotFound from "~/pages/not-found/index.jsx";
import MainLayout from "~/layouts/main/index.jsx";
import Profile from "~/pages/profile/index.jsx";
import Messages from "~/pages/messages/index.jsx";
import Lists from "~/pages/lists/index.jsx";
import Booksmark from "~/pages/booksmark/index.jsx";

const roots = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {   index: true,
                element: <Home/>},
            {
                path: 'explore',
                element: <Explore/>
            },
            {
                path: 'notifications',
                element: <Notifications />
            },
            {
              path: 'messages',
                element: <Messages />
            },
            {
                path: 'slug',
                element: <Profile/>
            },
            {
              path: 'lists',
              element: <Lists/>
            },
            {
                path: 'booksmark',
                element:<Booksmark/>
            },
            {
                path: '*',
                element: <NotFound/>
            }]
    }
])

export default roots;