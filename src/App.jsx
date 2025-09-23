import React from 'react'
import Home from './components/Home/Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Fruits from './components/Fruits/Fruits.jsx'
import Dairy from './components/Dairy/Dairy.jsx'
import SeaFood from './components/SeaFood/SeaFood.jsx'

const App = () => {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Home />
    },
    {
      path: '/fruits',
      element:<Fruits/>
    },
     {
      path: '/dairy',
      element:<Dairy />,
    },
    {
      path: '/seaFood',
      element:<SeaFood/>,
    }, 
     {
      path: '/allp',
      element:<SeaFood/>,
    }, 

])
  return <RouterProvider router={router}/>
}

export default App