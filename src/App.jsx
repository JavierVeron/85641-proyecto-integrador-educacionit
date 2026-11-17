import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header.jsx"
import Catalogo from "./components/Catalogo.jsx"
import Footer from "./components/Footer.jsx"
import CarritoDeCompras from "./components/CarritoDeCompras.jsx"
import Alta from "./components/Alta.jsx"
import Error404 from "./components/Error404.jsx"
import CartContextProvider from "./components/context/CartContext.jsx"

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Catalogo />} />
          <Route path="/categoria/:id" element={<Catalogo />} />
          <Route path="/alta" element={<Alta />} />
          <Route path="/carrito" element={<CarritoDeCompras />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
