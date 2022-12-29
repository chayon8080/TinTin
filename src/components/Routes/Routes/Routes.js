import { createBrowserRouter } from "react-router-dom";
import Login from "../../../Login/Login";
import SignUp from "../../../SignUp/SignUp";
import About from "../../About/About";
import FourOFour from "../../FourOFour";
import Home from "../../Home/Home";
import Main from "../../Main/Main";
import Messages from "../../Messages/Messages";
import Posts from "../../Posts/Posts";

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
            {
                path: '/about',
                element: <About></About>,
            },
            {
                path: '/posts',
                element: <Posts></Posts>,

            },
            {
                path: '/login',
                element: <Login></Login>,

            },
            {
                path: '/messages',
                element: <Messages></Messages>,

            },
            {
                path: '/register',
                element: <SignUp></SignUp>,

            },
            {
                path: '*',
                element: <FourOFour></FourOFour>
            }
        ]
    }])