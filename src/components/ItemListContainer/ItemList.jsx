import ItemCardComponent from "../Card/ItemCardComponent";

const ItemList = ({ productos }) => {
  return (
    <>
      {productos.map((producto) => (
        <ItemCardComponent
          key={producto.id}
          producto = {productos}
        />
      ))}
    </>
  );
};

export default ItemList;
