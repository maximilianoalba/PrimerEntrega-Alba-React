import { useContext } from "react";
import { CartContext } from "../../Contex/CartContex";
import { addOrder } from "../../firebase/firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const AddOrder = ({ name, phone, email, disabled }) => {
    
    const { clearCart} =useContext(CartContext)
    const { cart } = useContext(CartContext);
    const [orderId, setOrderId] = useState(null);
    const navigate = useNavigate();

    //Funcion que calcula producto, impuesto, envio, sub total y total.
    const handleClick = () => {
    const subtotal = cart.reduce((acc, item) => acc + (item.precio * item.quantity), 0);
    const total = subtotal;

    //La plantilla que se enviara a Firebase
        const newOrder = {
            buyer: {
                name: name,
                phone: phone,
                email: email
            },
            items: cart.map(item => ({
                id: item.id,
                title: item.titulo,
                price: item.precio,
                quantity: item.quantity
            })),
            total: total
        };

        // Agregar la nueva orden a Firebase y luego enviar al usuario a ver su ID de orden.
        addOrder(newOrder).then(id => {
            setOrderId(id);
            clearCart(); // Limpia el carrito después de que la orden ha sido generada
            navigate(`/Finished/${id}`);
        });
    };

    return (
        <>
                <button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={handleClick}
                    disabled={disabled}>
                    <p>Generar Orden</p>
                </button>
                {orderId && <p>Nueva orden de pedido generada id: {orderId}</p>}
        </>
    );
}

export default AddOrder;