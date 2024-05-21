import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './routes/Login.tsx'
import Signup from './routes/Signup.tsx'
//import Dashboard from './routes/Dashboard.tsx'

import './index.css'
import ProtectedRoute from './routes/ProtectedRoute.tsx'
import { AuthProvider } from './auth/AuthProvider.tsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/Signup',
    element: <Signup />
  },
  {
    /* a partir de aqui las rutas deben ser protegidas 
    path: '/Dashboard',
    element: <Dashboard />*/
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/Dashboard",
        element: <h1>Dashboard</h1>,
      }
    ],

  },

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
