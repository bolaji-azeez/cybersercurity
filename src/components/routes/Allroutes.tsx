import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Detailpage/Home'
import Login from '../pages/Detailpage/Login'
import Signup from '../pages/Detailpage/Signup'


 export const Index = createBrowserRouter([
    {
        path: "/",
        index: true,
        element: <Home />,
    },

    {
        path: "/Login",
        element: <Login />,
    },

    {
        path: "/Signup",
        element: <Signup />
    }
        
 ])
  



