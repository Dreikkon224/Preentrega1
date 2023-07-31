import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from "../../context/CartContext";
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({id, nombre, imagen, categoria, description, precio, stock}) =>{
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => { let prod={ id, nombre, imagen, categoria, precio, stock }
        addItem(prod, quantity)
        setQuantityAdded(quantity)
    }

    return(
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={imagen} alt={nombre} className='itemImg'/>
            </picture>
            <section>
                <p className='Info'>categoria: {categoria}</p>
                <p className='Info'>descripción: {description}</p>
                <p className='Info'>Precio: ${precio}</p>
            </section>
            <footer className='ItemFooter'>
                {
                    quantityAdded > 0 ? (<Link to='/cart' className='Option'>Terminar Compra</Link>) 
                    :
                        <ItemCount initial={1} stock={stock} onAdd={(handleOnAdd)}/>
                }    
            </footer>
        </article>
    )
}

export default ItemDetail