import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import Loading from "../Loading/Loading";
import { getProducts,getCategory } from "../../firebase/firebase";

const ItemDetailContainer = () => {
  const [productos, setProductos] = useState({});
  const [loading, setLoading] = useState(true);

  const { idCategory } = useParams();

  useEffect(() => {
    setLoading(true);
    (idCategory ? getCategory(idCategory) : getProducts()).then((productos) => {
      setProductos(productos);
      setLoading(false);
    });
  }, [idCategory]);

  return (
    <>
      <section className="flex justify-center items-center mt-[50px]  bg-cyan-50 ">
        {loading ? <Loading /> : <ItemDetail productos={productos} />}
      </section>
    </>
  );
};

export default ItemDetailContainer;
