import { useState } from "react";

export default function ItemCount({ stock, initial, onAdd }) {
  const [quantity, setQuantity] = useState(initial);

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <>
      <div className="font-mono text-white  mt-4  flex gap-5 items-center justify-center">
        <button onClick={decrement} className=" bg-cyan-300 w-6">
          -
        </button>
        <h4 className=" bg-cyan-300 w-6 text-center">{quantity}</h4>
        <button onClick={increment} className="bg-cyan-300 w-6">
          +
        </button>
      </div>
      <button onClick={()=> onAdd(quantity)} disabled={!stock} className=" font-mono py-2 px-4 bg-cyan-300 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
        Agregar al carrito

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </button>
    </>
  );
}
