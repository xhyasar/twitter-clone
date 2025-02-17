import {createBrowserRouter} from "react-router-dom";

const roots = createBrowserRouter([
    {
        path: '/',
        element: 'anasayfa componenti'
    },
    {
        path: '/explore',
        element: 'explore componenti'
    },
    {
        path: '/notifications',
        element: 'notifications componenti'
    }
])

export default roots;