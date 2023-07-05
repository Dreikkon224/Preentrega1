import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navegador">
            <Link to='/'>
                <h3>ByFan</h3>
            </Link>
            <div className="categorias">
                <NavLink to={'/category/mangas'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Mangas</NavLink>
                <NavLink to={'/category/cosplay'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Cosplays</NavLink>
                <NavLink to={'/category/accessories'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Accesorios</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar