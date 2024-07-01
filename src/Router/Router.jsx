import {  createBrowserRouter} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import SubscriptionPage from "../Pages/SubscriptionPage";
import ErrorPage from "../Pages/ErrorPage";

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
            }
        ]
    }
  ])

  export default router;