import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import PetsSuppliesPage from "../pages/PetSupplies";
import AddListingPage from "../pages/AddListingPage";
import MyListingsPage from "../pages/MyListingPage";
import MyOrdersPage from "../pages/Myorders";
import ListingDetailsPage from "../pages/ListingDetailsPage";
import OurBlogPage from "../pages/Blog";
import MyProfile from "../pages/MyProfile";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import NotFoundPage from "../pages/page404";
import PrivateRoute from "../privateRoute/PrivateRoute";
import CategoryDetails from "../components/Home/category/CategoryDetails";
import ProductDetails from "../pages/ProductDetails";
import DashboardLayout from "../layout/DashboardLayout";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";

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
        loader: ({ params }) =>
          fetch(
            `https://pawmart-server-nine.vercel.app/products/product-details/${params.id}`
          ).then((res) => {
            if (!res.ok) throw new Error("Failed to fetch product");
            return res.json();
          }),
        element: (
          <PrivateRoute>
            <ProductDetails />,
          </PrivateRoute>
        ),
      },
      {
        path: "blog",
        element: <OurBlogPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "/products/category-product/:category",
        element: <CategoryDetails />,
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
  {
    path: "dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        index: true,
        element: <MyOrdersPage />,
      },
      {
        path: "add-listing",
        element: (
          <PrivateRoute>
            <AddListingPage />
          </PrivateRoute>
        ),
      },
      {
        path: "My-listings",
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
    ],
  },
]);

export default router;
