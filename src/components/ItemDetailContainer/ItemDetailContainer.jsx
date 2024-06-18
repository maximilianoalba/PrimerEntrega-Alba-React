import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import Loading from "../Loading/Loading";
import { getProducts,getCategory } from "../../firebase/firebase";

const ItemDetailContainer = () => {
  const [productos, setProductos] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    getProducts().then((products) => {
      const product = products.find((prod) => prod.id === id);
      setProductos(product);
      setLoading(false);
    });
  }, [id]);

  return (
    <>
      <section className=" flex justify-center items-center mt-[50px]  bg-cyan-50 ">
        {loading ? <Loading /> : <ItemDetail productos={productos} />}
      </section>
    </>
  );
};

export default ItemDetailContainer;
