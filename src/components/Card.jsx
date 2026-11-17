import { useContext } from "react"
import { CartContext } from "./context/CartContext"

const Card = ({item}) => {
    const {agregarProductoCarrito} = useContext(CartContext);

    return (
        <section className="card">
            <img src={item.foto} className="card-img-top" alt={item.nombre} />
            <div className="card-body text-center">
                <h4 className="card-title fw-bold">{item.nombre}</h4>
                <p className="card-text">{item.detalles.substring(0, 70) + "..."}</p>
                <p className="card-text fw-bold">${item.precio}</p>
                <div className="text-center">
                    <button className="btn-solid theme-inverse fw-bold" onClick={() => {agregarProductoCarrito(item.id)}}>Agregar</button>
                </div>
            </div>
        </section>
    )
}

export default Card