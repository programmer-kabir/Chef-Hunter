import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import App from "../App";
import Home from "../Layout/Home";
import Recipe from "../Comonent/Recipe/Recipe";
import Details from "../Comonent/Recipe/Details";
import Blog from "../Comonent/Blog";
import Spinner from "../Spinner/Spinner";
import ErrorPage from "../ErrorPage/ErrorPage";
import Main from "../Layout/Main";
import PrivetLayout from "../Layout/PrivetLayout";
import About from "../Comonent/About";
import Contact from "../Comonent/Contact";



const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:() =>fetch(`https://asb-kabi-r.vercel.app/recipe`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'recipe',
                element:<Recipe></Recipe>,
                loader:() =>fetch(`https://asb-kabi-r.vercel.app/recipe`)
            },
            {
                path:'/recipe/:id',
                element:<PrivetLayout><Details></Details>,</PrivetLayout>,
                loader: ({params}) => fetch(`https://asb-kabi-r.vercel.app/recipe/${params.id}`)
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/loader',
                element:<Spinner></Spinner>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            }
            
        ]
    }
])
export default router;