import "./App.css";
import ItemListContainer from "./components/ItemListContainer/itemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./Contex/CartContex";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Finished from "./components/Checkout/Finished";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/ItemListContainer/:idCategory" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout/>} />
          <Route exact path="/Finished/:id" element={<Finished/>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
