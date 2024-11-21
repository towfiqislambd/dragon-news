import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider, } from "react-router-dom";
import Home from './components/Home';
import Root from './components/Root';
import About from './components/About';
import Career from './components/Career';
import Categories from './components/Categories';
import ErrorPage from './components/ErrorPage';
import Login from './components/Login';
import Register from './components/Register';
import AuthProvider from './components/AuthProvider';
import PrivateRoutes from './components/PrivateRoutes';
import NewsDetails from './components/NewsDetails';

Categories
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <Navigate to="/category/01"></Navigate>
          },
          {
            path: "/category/:category_id",
            loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.category_id}`),
            element: <Categories></Categories>
          }
        ]
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/news/:id",
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
        element: <PrivateRoutes><NewsDetails></NewsDetails></PrivateRoutes>,
      }
    ]
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
