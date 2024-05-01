import "./App.css";
import './index.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/itemsList/itemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a InfinitiBytes PC" />
    </>
  );
}


export default App;
