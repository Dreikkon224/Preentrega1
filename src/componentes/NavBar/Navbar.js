import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h1>Carrito</h1>
            <div>
                <button>Mangas</button>
                <button>Accesorios</button>
                <button>Figuras</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar