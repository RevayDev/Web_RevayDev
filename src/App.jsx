import React from 'react'
import './assets/stylesheets/App.scss'
import Inicio  from './pages/Inicio'
import Nav from './Nav.jsx'
import Footer from './assets/components/Footer.jsx'
import Error from './pages/404.jsx'
import Proyectos from './pages/Proyectos.jsx'

import { Routes, Route } from 'react-router-dom'

function App() {
 
  return (
    <div>
    <Nav />
  <Routes  scrollBehavior="smooth">
    <Route index path="/" element={<Inicio />} />
    <Route path="/proyectos" element={<Proyectos />} />
    <Route path="*" element={<Error />} />
   
  </Routes>
<Footer></Footer>

  </div>
  )
}

export default App
