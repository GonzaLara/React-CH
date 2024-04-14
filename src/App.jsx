import { useState } from 'react'
import './App.css'
import NavBar from './NavBar'
import Lista from './ItemListContainer'
import Carousel from './Carousel'
import Temporada from './Temporada'
import Footer from './Footer'


function App() {
  return (
    <>
      <NavBar />
      <Carousel />
      <Lista mensaje={"Disponible la Temporada 35"}/>
      <Temporada />
      <Footer />
    </>
  )
}

export default App
