import React from 'react'
import './assets/stylesheets/App.scss'
import Inicio  from './pages/Inicio'
import Nav from './Nav.jsx'
import Error from './pages/404.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {
 
  return (
    <div>
    <Nav />
  <Routes  scrollBehavior="smooth">
    <Route index path="/" element={<Inicio />} />
    <Route path="*" element={<Error />} />
   
  </Routes>


  </div>
  )
}

export default App
