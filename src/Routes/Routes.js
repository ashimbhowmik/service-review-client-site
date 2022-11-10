import { Helmet } from "react-helmet";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import AddServices from "../Pages/AddServices/AddServices";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReviwes from "../Pages/MyReviews/MyReviwes";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import ServiceDetails from "../Pages/Services/ServiceDetails/ServiceDetails";
import Services from "../Pages/Services/Services";
import SignUp from "../Pages/SignUp/SignUp";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://service-review-server-site.vercel.app/services"),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () =>
          fetch("https://service-review-server-site.vercel.app/services"),
      },

      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(
            `https://service-review-server-site.vercel.app/services/${params.id}`
          ),
      },

      {
        path: "/services/:id",
        element: <AddServices></AddServices>,
      },

      {
        path: "/myReviwes",
        element: (
          <PrivateRoute>
            <MyReviwes></MyReviwes>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://service-review-server-site.vercel.app/reviews"),
      },

      {
        path: "/addServices",
        element: (
          <PrivateRoute>
            <AddServices></AddServices>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
