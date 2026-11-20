import { useContext, useEffect, useState } from "react";
import productosJSON from "../assets/productos.json";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import SinProductos from "./SinProductos";

const CarritoDeCompras = () => {
    const {carrito, eliminarProductoCarrito, vaciarCarrito, cantidadProductosCarrito, sumaProductosCarrito} = useContext(CartContext);

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
                                carrito.map(item => (
                                    <tr key={item.id}>
                                        <td><img src={item.foto} alt={item.nombre} width={80} /></td>
                                        <td className="align-middle">{item.nombre}</td>
                                        <td className="align-middle">{item.marca}</td>
                                        <td className="align-middle">${item.precio}</td>
                                        <td className="align-middle">{item.cantidad}</td>
                                        <td className="align-middle">${item.precio * item.cantidad}</td>
                                        <td className="align-middle text-end"><button className="btn-solid btn-sm theme-inverse fw-bold" onClick={() => {eliminarProductoCarrito(item.id)}}>Eliminar</button></td>
                                </tr>
                                ))
                            }
                            <tr>
                                <td colSpan={5}><b>Total a Pagar</b></td>
                                <td><b>${sumaProductosCarrito()}</b></td>
                                <td>&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CarritoDeCompras