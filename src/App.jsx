import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Checkout from "./components/Checkout";
import Cart from "./components/Cart";
import CartContextProvider from "./components/context/CartContext";
import Error404 from './components/Error404'
import Footer from './components/Footer'
import './style.css'

function App() {
  return (
    <div className="app" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <div style={{ flex: 1 }}>
            <Routes>
              <Route path={"/"} element={<ItemListContainer />} />
              <Route path={"/category/:id"} element={<ItemListContainer />} />
              <Route path={"/item/:id"} element={<ItemDetailContainer />} />
              <Route path={"/cart"} element={<Cart />} />
              <Route path={"/checkout"} element={<Checkout />} />
              <Route path={"*"} element={<Error404 />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}


export default App
