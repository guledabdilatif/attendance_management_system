import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Login} />
          <Route path='/dashboard' Component={Dashboard} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
