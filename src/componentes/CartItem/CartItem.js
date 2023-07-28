import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ id, name, quantity, price }) => {
    const {removeProducto} = useContext(CartContext);
    const subTotal = price*quantity
    return ( 
        <div>
            <h2>titulo:{name}</h2>
            <p>cantidad:{quantity}</p>
            <p>precion:$ {price}</p>
            <p>subtotal:$ {subTotal}</p>
            <button onClick={() => removeProducto(id)}>Eliminar</button>
        </div>
    )
}
 
export default CartItem;