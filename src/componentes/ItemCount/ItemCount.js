import './ItemCount.css'
import { useState } from 'react' 

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)
    
    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className="counter">
            <div className="controls">
            
                <button type="button" class="btn btn-primary" onClick={decrement}>-</button>
                <h4 className="number">{quantity}</h4>
                <button type="button" class="btn btn-primary" onClick={increment}>+</button>
            </div>
            <button type="button" class="btn btn-primary" onClick={() => onAdd(quantity)} disabled={!stock}>agregar al carrito</button>
        </div>

    )
}

export default ItemCount