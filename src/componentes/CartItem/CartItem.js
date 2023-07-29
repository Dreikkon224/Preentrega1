import "./CartItem.css"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ id, nombre, quantity, precio, imagen }) => {
    const {removeProducto} = useContext(CartContext);
    const subTotal = precio*quantity
    return ( 
        <div className='CartList'>
            <h2 className="texto">titulo:{nombre}</h2>
            <img src={imagen} alt={nombre} className="itemImg"></img>
            <p className="texto">cantidad:{quantity}</p>
            <p className="texto">precion:$ {precio}</p>
            <p className="texto">subtotal:$ {subTotal}</p>
            <button type="button" class="btn btn-danger" height={200} onClick={() => removeProducto(id)}>[X]</button>
        </div>
    )
}
 
export default CartItem;