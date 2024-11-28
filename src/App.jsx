
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout  from './layout/app_layout'
import Dashboard from './pages/dashboard'
import Auth from './pages/auth'
import Link from './pages/link'
import RedirectLink from './pages/redirctlink'
import LandingPage from './pages/LandingPage'


const router=createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path: '/',
        element: <LandingPage/>
      },
      {
        path: '/dashboard',
        element: <Dashboard/>
      },
      {
        path: '/auth',
        element: <Auth/>
      },
      {
        path: '/link/:id',
        element: <Link/>
      },
      {
        path: '/:id',
        element: <RedirectLink/>
      },
    ]
  }
])

function App() {


  return (
   <RouterProvider router={router} />
  )
}

export default App
