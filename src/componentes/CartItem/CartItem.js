import "./CartItem.css"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ id, nombre, quantity, precio, imagen }) => {
    const {removeItem} = useContext(CartContext);
    const subTotal = precio*quantity
    return ( 
        <div className='CartList'>
            <h2 className="texto">titulo:{nombre}</h2>
            <img src={imagen} alt={nombre} className="imagenItem"></img>
            <p className="texto">cantidad:{quantity}</p>
            <p className="texto">precion:$ {precio}</p>
            <p className="texto">subtotal:$ {subTotal}</p>
            <i type="button" class="bi bi-cart-x" height={200} onClick={() => removeItem(id)}></i>
        </div>
    )
}

export default CartItem;