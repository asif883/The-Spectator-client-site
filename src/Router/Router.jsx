import {  createBrowserRouter} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import SubscriptionPage from "../Pages/SubscriptionPage";
import ErrorPage from "../Pages/ErrorPage";
import AddArticles from "../Pages/AddArticles";
import PrivateRoute from "../Pages/PrivateRoute";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import Dashboard from "../Layout/Dashboard";
import DashHome from "../DashPages/DashHome";
import Users from "../DashPages/Users";
import Statistics from "../DashPages/Statistics";
import ArticleDetails from "../Pages/ArticleDetails";
import Profile from "../Pages/Profile";
import AllArticles from "../Pages/AllArticles";


  const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: 
        [
            {
              path: '/',
              element: <Home></Home>
            },
            {
              path: '/subscription',
              element: <SubscriptionPage></SubscriptionPage>
            },
            {
              path:'/add-articles',
              element:<PrivateRoute><AddArticles></AddArticles></PrivateRoute>
            },
            {
              path:'/login',
              element:<Login></Login>
            },
            {
              path:'/register',
              element:<Registration></Registration>
            },
            {
              path:'details/:id',
              element:<PrivateRoute><ArticleDetails></ArticleDetails></PrivateRoute>,
              loader:({params}) => fetch(`https://newspaper-server-silk.vercel.app/details/${params.id}`)
            },
            {
              path: '/profile',
              element: <Profile></Profile>
            },
            {
              path:'/all-articles',
              element: <AllArticles></AllArticles>,
              loader: () => fetch ('https://newspaper-server-silk.vercel.app/articles')
            }
           
        ]
    },
    {
      path:'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: '/dashboard/home',
          element: <DashHome></DashHome>
        },
        {
          path:'/dashboard/user',
          element: <Users></Users>
        },
        {
          path:'/dashboard/statistics',
          element: <Statistics></Statistics>
        }
      ]
    }
  ])

  export default router;