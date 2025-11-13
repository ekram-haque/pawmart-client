import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
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
import NotFoundPage from "../pages/page404";
import PrivateRoute from "../privateRoute/PrivateRoute";
import CategoryDetails from "../components/Home/category/CategoryDetails";
import ProductDetails from "../pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "pet-supplies",
        element: <PetsSuppliesPage />,
      },
       {
        path: "products/product-details/:id",
        loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`),
        element: <ProductDetails />,
      },
      {
        path: "blog",
        element: <OurBlog />,
      },
      {
        path: "products/category-filtered-product/:category",
        element: <CategoryDetails/>,
      },
      {
        path: "add-listing-page",
        element: (
          <PrivateRoute>
            <AddListingPage />
          </PrivateRoute>
        ),
      },
      {
        path: "My-listing-page",
        element: (
          <PrivateRoute>
            <MyListingsPage />
          </PrivateRoute>
        ),
      },
      {
        path: "My-orders",
        element: (
          <PrivateRoute>
            <MyOrdersPage />
          </PrivateRoute>
        ),
      },

      {
        path: "listing-details-page",
        element: <ListingDetailsPage />,
      },

      {
        path: "profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default router;
