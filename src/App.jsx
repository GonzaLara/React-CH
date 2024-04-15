import { useState } from 'react'
import NavBar from './components/NavBar'
import Lista from './components/ItemListContainer'
import Carousel from './components/Carousel'
import Temporada from './components/Temporada'
import Footer from './components/Footer'
import './style.css'


function App() {
  return (
    <>
      <NavBar />
      <Carousel />
      <Lista mensaje={"Disponibles las ultimas Temporadas"}/>
      <Temporada />
      <Footer />
    </>
  )
}

export default App
