import { createBrowserRouter } from "react-router";
import Home from '../pages/Home'
import MainLayout from "../layout/MainLayout";
import PetsSuppliesPage from "../pages/PetSupplies";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'petsupplies',
                element:<PetsSuppliesPage/>
            }
        ]
    }
])

export default router;