import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Catagorys from "../../Pages/Catagory/Catagorys";
import DashBoard from "../../Pages/DashBoard/DashBoard/DashBoard";
import BookCatagorie from "../../Pages/Home/BookCatagories/BookCatagorie";
import BookCatagories from "../../Pages/Home/BookCatagories/BookCatagories";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/signup/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>


            },
            {

                path: '/login',
                element: <Login></Login>
            },
            {

                path: '/blog',
                element: <Blog></Blog>
            },
            {

                path: '/signup',
                element: <SignUp></SignUp>
            },



            {
                path: '/bookCatagoriesId/:id',
                element: <PrivateRoute> <Catagorys></Catagorys></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookCatagoriesId/${params.id}`)






            },
            {
                path: '/bookCatagoriesId',
                element: <Catagorys></Catagorys>





            },

        ]


    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>
    }
])