import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from '../pages/home/Home'
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/books/CartPage";
import CheckoutPage from "../pages/books/CheckoutPage";
import SingleBook from "../pages/books/SingleBook";
import PrivateRoute from "./PrivateRoute";
import OrdersPage from "../pages/books/OrdersPage";
import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";
import DashboardLayout from "../pages/dashboard/dashboardLayout";
import Dashboard from "../pages/dashboard/Dashboad";
import ManageBooks from "../pages/dashboard/manageBooks/ManageBooks";
import AddBook from "../pages/dashboard/addBook/AddBook";
import UpdateBook from "../pages/dashboard/EditBook/UpdateBook";
const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/orders',
                element: <PrivateRoute><OrdersPage></OrdersPage></PrivateRoute>
            },
            {
                path: '/about',
                element: <div>about</div>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>

            },
            {
                path: '/cart',
                element: <CartPage></CartPage>
            },
            {
                path: '/checkout',
                element: <PrivateRoute><CheckoutPage></CheckoutPage></PrivateRoute>
            },
            {
                path: '/books/:id',
                element: <SingleBook></SingleBook>
            },

        ]
    },
    {
        path: '/admin',
        element: <div><AdminLogin></AdminLogin></div>
    },
    {
        path: '/dashboard',
        element: <AdminRoute><DashboardLayout></DashboardLayout></AdminRoute>,
        children: [
            {
                path: '',
                element: <AdminRoute><Dashboard></Dashboard></AdminRoute>
            },
            {
                path: 'add-new-book',
                element: <AdminRoute><AddBook></AddBook></AdminRoute>
            },
            {
                path: 'edit-book/:id',
                element: <AdminRoute><UpdateBook></UpdateBook></AdminRoute>
            },
            {
                path: 'manage-books',
                element: <AdminRoute><ManageBooks></ManageBooks></AdminRoute>
            },
        ]

    }
])
export default router