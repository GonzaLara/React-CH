import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import Carousel from './components/Carousel'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Error404 from './components/Error404'
import Temporada from './components/Temporada'
import Footer from './components/Footer'
import './style.css'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Carousel />
      <Routes >
        <Route path={"/"} element={<ItemListContainer />} />
        <Route path={"/category/:id"} element={<ItemListContainer />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        <Route path={"*"} element={<Error404 />} />
      </Routes>
      <Temporada />
      <Footer />
    </BrowserRouter>
  )
}

export default App
