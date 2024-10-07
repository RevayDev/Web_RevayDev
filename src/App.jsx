import React from 'react'
import './assets/stylesheets/App.scss'
import Inicio  from './assets/pages/Inicio'
import Nav from './Nav.jsx'
import Error from './assets/pages/404.jsx'
import Proyectos from './assets/pages/Proyectos'
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
