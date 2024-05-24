import './App.css'
import ItemListContainer from './components/ItemListContainer/itemListContainer'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemCategory from './components/Categorias/ItemCategory'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/ItemListContainer/:category" element={<ItemCategory/>} />
          <Route exact path="/ItemListContainer/:category" element={<ItemCategory/>} />
          <Route exact path="/item/:id" element={< ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
