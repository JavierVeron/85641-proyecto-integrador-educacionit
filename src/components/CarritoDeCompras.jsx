import { useContext, useEffect } from "react";
import { CartContext } from "./context/CartContext";
import SinProductos from "./SinProductos";
import { Link } from "react-router-dom";

const CarritoDeCompras = () => {
    const {carrito, eliminarProductoCarrito, vaciarCarrito, cantidadProductosCarrito, sumaProductosCarrito, incrementarItemCarrito, decrementarItemCarrito} = useContext(CartContext);

    useEffect(() => {

    })

    if (cantidadProductosCarrito() == 0) {
        return (
            <SinProductos />
        )
    }

    return (
        <div className="container my-10">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Marca</th>
                                <th scope="col">Precio Unitario</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio</th>
                                <th scope="col" className="text-end"><button className="btn-solid btn-sm theme-inverse fw-bold" onClick={vaciarCarrito}>Vaciar</button></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                carrito.map((item, index) => (
                                    <tr key={index}>
                                        <td><img src={item.foto} alt={item.nombre} width={80} /></td>
                                        <td className="align-middle">{item.nombre}</td>
                                        <td className="align-middle">{item.marca}</td>
                                        <td className="align-middle">${item.precio}</td>
                                        <td className="align-middle"><i className="bi bi-arrow-down-circle-fill" onClick={() => {decrementarItemCarrito(item.id)}}></i> {item.cantidad} <i className="bi bi-arrow-up-circle-fill" onClick={() => {incrementarItemCarrito(item.id)}}></i></td>
                                        <td className="align-middle">${item.precio * item.cantidad}</td>
                                        <td className="align-middle text-end"><button className="btn-solid btn-sm theme-inverse fw-bold" onClick={() => {eliminarProductoCarrito(item.id)}}>Eliminar</button></td>
                                </tr>
                                ))
                            }
                            <tr>
                                <td colSpan={5}><b>Total a Pagar</b></td>
                                <td><b>${sumaProductosCarrito()}</b></td>
                                <td className="text-end"><Link to={"/checkout"} className="btn-solid btn-sm theme-inverse fw-bold">Checkout</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CarritoDeCompras