import { getProducts, getCategory } from "../../firebase/firebase";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Loading from "../Loading/Loading";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

  
  const [productos, setProductos] = useState([]);
  const { idCategory } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    (idCategory ? getCategory(idCategory) : getProducts()).then((productos) => {
      setProductos(productos);
      setLoading(false);
    });
  }, [idCategory]);

  return (
    <main className="  font-mono bg-cyan-100  content-between">
      <div className=" bg-green-200 gap-5 my-4">
        <h2 className=" text-center font-mono text-slate-600">
          Bienvenidos a InfinitiByte PC
        </h2>
      </div>
      <section className=" grid grid-cols-1 sm:grid-cols-3 g items-center  gap-2   font-mono">
        {loading ? <Loading /> : <ItemList productos={productos} />}
      </section>
    </main>
  );
};

export default ItemListContainer;
