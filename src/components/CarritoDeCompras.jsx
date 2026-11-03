import { useEffect, useState } from "react";
import productosJSON from "../assets/productos.json";

const CarritoDeCompras = () => {
    const [carrito, setCarrito] = useState([]);
    const producto1 = productosJSON.find(item => item.id == 2);
    const producto2 = productosJSON.find(item => item.id == 4);
    producto1.cantidad = 1;
    producto2.cantidad = 2;
    
    useEffect(() => {
        setCarrito([producto1, producto2]);
    }, [])

    if (carrito.length == 0) {
        return (
            <div className="container my-10">
                <div className="row">
                    <div className="col">
                        <div className="alert theme-warning" role="alert">
                            <vstack>
                                <h4 className="alert-heading fw-bold mb-2">Atención!</h4>
                                <p>No se encontraron Productos en el Carrito!</p>
                            </vstack>
                        </div>
                    </div>
                </div>
            </div>
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
                            <th scope="col">&nbsp;</th>
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
                                        <td className="align-middle text-end"><button className="btn-solid theme-inverse fw-bold">Eliminar</button></td>
                                </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CarritoDeCompras