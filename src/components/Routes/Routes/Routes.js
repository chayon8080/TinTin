import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home";
import Main from "../../Main/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                // loader: () => fetch('http://localhost:5000/news')
            },
            // {
            //     path: '/catagory/:id',
            //     element: <Catagory></Catagory>,
            //     loader: ({ params }) => fetch(`http://localhost:5000/catagory/${params.id}`)
            // },
            // {
            //     path: '/news/:id',
            //     element: <News></News>,
            //     loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            // },
        ]
    }])