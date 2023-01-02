import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../../Layout/DashBoardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Catagorys from "../../Pages/Catagory/Catagorys";
import AddProducts from "../../Pages/DashBoard/AddProducts/AddProducts";
import AllBuyer from "../../Pages/DashBoard/AllBuyer/AllBuyer";
import AllSeller from "../../Pages/DashBoard/DashBoard/AllSeller/AllSeller";

import MyBuyer from "../../Pages/DashBoard/MyBuyer/MyBuyer";
import MyOrders from "../../Pages/DashBoard/MyOrders/MyOrders";
import MyProducts from "../../Pages/DashBoard/MyProducts";
import Payment from "../../Pages/DashBoard/Payment/Payment";

import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import SignUp from "../../Pages/signup/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import SellerRoute from "../AdminRoute/SellerRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
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
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>

            },
            {
                path: '/dashboard/allseller',
                element: <AdminRoute><AllSeller></AllSeller></AdminRoute>

            },
            {
                path: '/dashboard/allbuyer',
                element: <AdminRoute><AllBuyer></AllBuyer>
                </AdminRoute>
            },
            {
                path: '/dashboard/addproducts',
                element: <SellerRoute><AddProducts></AddProducts></SellerRoute>
            },
            {
                path: '/dashboard/myproducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashboard/addproducts',
                element: <SellerRoute><AddProducts></AddProducts></SellerRoute>
            },
            {
                path: '/dashboard/mybuyer',
                element: <SellerRoute><MyBuyer></MyBuyer></SellerRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)

            },


        ]
    }
])