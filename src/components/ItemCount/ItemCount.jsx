import { useState } from "react";

const ItemCount = ({ stock, addProduct }) => {
  const [count, setcount] = useState(1);

  const handleClickDecrement = () => {
    if (count > 1) {
      setcount(count - 1);
    }
  };

  const handleClickIncrement = () => {
    if (count< stock) {
      setcount(count + 1);
    }
  };

  const handleClickAddToCart = () => {
    addProduct(count)
  };



  return (
    <>
      <div className="font-mono text-white  mt-4  flex gap-5 items-center justify-center">
        <button onClick={handleClickDecrement} className=" bg-cyan-300 w-6">
          -
        </button>
        <h4 className=" bg-cyan-300 w-6 text-center">{count}</h4>
        <button onClick={handleClickIncrement} className="bg-cyan-300 w-6">
          +
        </button>
      </div>
      <button onClick={handleClickAddToCart} disabled={!stock} className=" font-mono py-2 px-4 bg-cyan-300 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
        Agregar al carrito 🛒
      </button>
    </>
  );
}
export default ItemCount;