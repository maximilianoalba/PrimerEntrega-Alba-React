import { useState,} from 'react';

export default function ItemCount({ StockDisponible }) {
  const [stock, setStock] = useState(StockDisponible);
  const [cont, setCont] = useState(0);

  const handleDec = () => {
    if (cont > 1) {
      setCont(cont - 1);
      clicks.current++;
    }
  };

  const handleInc = () => {
    if (cont < stock) {
      setCont(cont + 1);
      clicks.current++;
    }
  };

  return (
    <>
      <h3>Stock disponible:{stock}</h3>
      <section className= "m-10  flex gap-50 ">
        <button onClick={handleDec}>-</button>
        <p>{cont}</p>
        <button onClick={handleInc}>+</button>
      </section>
    </>
  );
}