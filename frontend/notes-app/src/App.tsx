import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import Home from './pages/Home/Home'

export default function App() {
  const routes = (
    <Router>
      <Routes>
        <Route path='/dashboard' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </Router>
  )
  return (
    <div>
      {routes}
    </div>
  )
}
