import { createBrowserRouter } from "react-router";
import Home from '../pages/Home'
import MainLayout from "../layout/MainLayout";
import PetsSuppliesPage from "../pages/PetSupplies";
import AddListingPage from "../pages/AddListingPage";
import MyListingsPage from "../pages/MyListingPage";
import MyOrdersPage from "../pages/Myorders";
import ListingDetailsPage from "../pages/ListingDetailsPage";
import OurBlog from "../components/Home/Blog";
import MyProfile from "../pages/MyProfile";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'/home',
                element:<Home/>
            },
            {
                path:'pet-supplies',
                element:<PetsSuppliesPage/>
            },
            {
                path:'add-listing-page',
                element: <AddListingPage/>
            
            },
            {
                path:'My-listing-page',
                element:<MyListingsPage/>
            },
            {
                path: 'My-orders',
                element:<MyOrdersPage/>
            },
            {
                path:'listing-details-page',
                element:<ListingDetailsPage/>
            },
              {
                path:'blog',
                element:<OurBlog/>
            },
              {
                path:'profile',
                element:<MyProfile/>
            },
             {
                path:'login',
                element:<LoginPage/>
            },
            {
                path:'register',
                element: <RegisterPage/>
            
            }
        ]
    }
])

export default router;