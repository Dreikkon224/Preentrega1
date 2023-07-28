import { useContext } from 'react'
import cart from './assets/png-transparent-computer-icons-shopping-cart-encapsulated-postscript-shopping-cart-angle-black-shopping.png'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to='/cart' className='carrito'style={{display: totalQuantity>0?'block':'none'}}>
            <img src={cart} alt="cart-widget" className='img'/>
            <span className='numero'>{totalQuantity}</span>
        </Link>
    )
}

export default CartWidget