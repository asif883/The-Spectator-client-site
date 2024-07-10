import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'
import Context from './Provider/Context.jsx'
import { ParallaxProvider } from 'react-scroll-parallax'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParallaxProvider>
        <Context>
          <RouterProvider router={router}></RouterProvider>
        </Context>
    </ParallaxProvider>
  </React.StrictMode>,
)
