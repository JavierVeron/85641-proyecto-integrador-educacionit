import { useContext, useEffect, useState } from "react";
import { CartContext } from "./context/CartContext";
import SinProductos from "./SinProductos";
import { Link } from "react-router-dom";

const Checkout = () => {
    const {carrito, cantidadProductosCarrito, sumaProductosCarrito, guardarPedidoCarrito} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [habilitado, setHabilitado] = useState(false);
    const [idPedido, setIdPedido] = useState(0);

    useEffect(() => {        
        setHabilitado((nombre != "" && email != "") ? true : false);
    })

    const guardarPedido = async () => {
        const comprador = {nombre, email, telefono};
        const productos = carrito.map(item => ({id:item.id, nombre:item.nombre, precio:item.precio, cantidad:item.cantidad}));
        const fechaActual = new Date(); // DD-MM-AAAA HH:II
        const fecha = `${fechaActual.getDate()}-${fechaActual.getMonth()+1}-${fechaActual.getFullYear()} ${fechaActual.getHours()}:${fechaActual.getMinutes()}:${fechaActual.getSeconds()}`;
        const total = sumaProductosCarrito();
        const pedido = {comprador, productos, total, fecha};
        setIdPedido(await guardarPedidoCarrito(pedido));
    }

    if (idPedido) {
        return (
            <div className="container my-10">
                <div className="row">
                    <div className="col">
                        <div className="alert theme-success" role="alert">
                            <vstack>
                                <h4 className="alert-heading mb-3">Felicitaciones!</h4>
                                <p>Gracias por tu compra!</p>
                                <p>Tu Número de Pedido es: <b>#{idPedido}</b></p>
                                <hr className="my-3" />
                                <p className="mt-3">
                                    <Link to={"/"} className="btn-solid btn-sm theme-inverse fw-bold">Ir a la Página Principal</Link>
                                </p>
                            </vstack>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if (cantidadProductosCarrito() == 0) {
        return (
            <SinProductos />
        )
    }

    return (
        <div className="container my-10">
            <div className="row">
                <div className="col">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control" value={nombre} onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" value={email} onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Teléfono</label>
                            <input type="text" className="form-control" value={telefono} onInput={(e) => {setTelefono(e.target.value)}} />
                        </div>
                        <button type="button" className="btn-solid btn-sm theme-inverse fw-bold" disabled={habilitado ? false : true} onClick={guardarPedido}>Enviar</button>
                    </form>
                </div>
                <div className="col">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Precio Unitario</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                carrito.map(item => (
                                    <tr key={item.id}>
                                        <td><img src={item.foto} alt={item.nombre} width={80} /></td>
                                        <td className="align-middle">{item.nombre}</td>
                                        <td className="align-middle">${item.precio}</td>
                                        <td className="align-middle">{item.cantidad}</td>
                                        <td className="align-middle">${item.precio * item.cantidad}</td>
                                </tr>
                                ))
                            }
                            <tr>
                                <td colSpan={4}><b>Total a Pagar</b></td>
                                <td><b>${sumaProductosCarrito()}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Checkout