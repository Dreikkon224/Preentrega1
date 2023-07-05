import cart from './assets/png-transparent-computer-icons-shopping-cart-encapsulated-postscript-shopping-cart-angle-black-shopping.png'
const CartWidget = () => {
    return (
        <div className='carrito'>
            <img src={cart} alt="cart-widget" className='img'/>
            <span>0</span>
        </div>
    )
}

export default CartWidget