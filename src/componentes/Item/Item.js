import { Link } from "react-router-dom"


const Item = ({id, nombre, imagen, precio, stock}) => {
    return ( 
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={imagen} alt={nombre} className="itemImg"/>
            </picture>
            <section>
                <p className="Info">
                    precio: ${precio}
                </p>
                <p className="Info">
                    stock disponible: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${id}`} className="Option">Ver detalles</Link>
            </footer>
        </article>
    )
}

export default Item