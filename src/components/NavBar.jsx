import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "./context/CartContext"

const NavBar = () => {
    const {cantidadProductosCarrito} = useContext(CartContext);

    return (
        <div className="container-fluid my-5">
            <div className="row">
                <div className="col">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <Link to={"/"} className="nav-link fw-bold">Todos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/categoria/teclados"} className="nav-link fw-bold">Teclados</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/categoria/bajos"} className="nav-link fw-bold" href="#">Bajos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/categoria/guitarras"} className="nav-link fw-bold">Guitarras</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/alta"} className="nav-link fw-bold"><i className="bi bi-file-plus"></i> Alta</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/carrito"} className="nav-link fw-bold"><i className="bi bi-cart"></i> Carrito ({cantidadProductosCarrito()})</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar