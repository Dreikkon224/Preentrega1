import cart from './assets/png-transparent-computer-icons-shopping-cart-encapsulated-postscript-shopping-cart-angle-black-shopping.png'
const CartWidget = () => {
    return (
        <div>
            <img src={cart} alt="cart-widget" className='carrito'/>
            0
        </div>
    )
}

export default CartWidget