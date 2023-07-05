import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className="navegador">
            <div> 
                <h1>ByFan</h1>
                <ul className="barra-navegacion">
                    <li><a>Home</a></li>
                    <li><a>Mangas</a></li>
                    <li><a>Cosplays</a></li>
                    <li><a>Accesorios</a></li>
                </ul>
                <div><CartWidget/></div>
            </div>
            
        </nav>
    )
}

export default NavBar