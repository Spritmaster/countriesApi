import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Countrieslist from './pages/Countrieslist'
import MainLayout from './layouts/MainLayout'
import OneCountry from './pages/OneCountry'


const App = () => {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route  path='/' element={<MainLayout/>}>
         <Route index element={<Countrieslist/>}/>
         <Route path='countrie/:id' element={<OneCountry/>}/>
      </Route>
      )
  )

  return (
    <div >
      <RouterProvider router={routes} ></RouterProvider>
    </div>
  )
}

export default App