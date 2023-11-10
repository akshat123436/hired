import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { HomeLayout, Landing, Register, Login, DashboardLayout, Error } from './pages'
const router = createBrowserRouter([
  {
    path:"/",
    element: <HomeLayout></HomeLayout>,
    errorElement : <Error></Error>,
    children:[
      {
        index:true,
        element:<Landing />
      },
      {
        path:'/register',
        element:(
          <Register></Register>
        )
      },
      {
        path:'/dashboard',
        element:(
          <DashboardLayout></DashboardLayout>
        )
      },
      {
        path:'/login',
        element:(
          <Login></Login>
        )
      }
    ]
  },
  
])
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App