import React from 'react'
import RouteView from '../pages/RouteView'
import {Routes, Route} from 'react-router-dom'
import Login from '../pages/auth/Login'
import Signup from '../pages/auth/Signup'

export default function AuthRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
    </Routes>
  )
}
