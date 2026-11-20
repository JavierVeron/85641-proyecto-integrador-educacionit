import { useContext, useEffect, useState } from "react";
import { CartContext } from "./context/CartContext";
import SinProductos from "./SinProductos";

const Alta = () => {
    const {productos, obtenerProducto, agregarProducto, editarProducto, eliminarProducto, cantidadProductos} = useContext(CartContext);
    const [nombre, setNombre] = useState("SE1HSS-SK-3TS");
    const [precio, setPrecio] = useState(695000);
    const [stock, setStock] = useState(1);
    const [marca, setMarca] = useState("SX");
    const [categoria, setCategoria] = useState("guitarras");
    const [detalles, setDetalles] = useState("Pack de Guitarra Electrica | SE1 | Micrófonos HSS | Amplificador GA1065 10W | Cable GC-10 | Afinador SZTU2 | Correa S40 | 6 Púas | Funda EB400/M | C: Sunburst");
    const [foto, setFoto] = useState("https://todomusica.com.ar/31565-thickbox_default/se1hss-sk-3ts.jpg");
    const [envio, setEnvio] = useState(true);
    const [modoEdicion, setModoEdicion] = useState(false);
    const [idProducto, setIdProducto] = useState(0);
    const [habilitado, setHabilitado] = useState(false);

    useEffect(() => {
        setHabilitado((nombre != "" && precio != "" && stock != "" && marca != "" && categoria != "" && detalles != "" && foto != "") ? true : false);
    })

    const obtenerProductoAlta = (id) => {
        const producto = obtenerProducto(id);
        setNombre(producto.nombre);
        setPrecio(producto.precio);
        setStock(producto.stock);
        setMarca(producto.marca);
        setCategoria(producto.categoria);
        setDetalles(producto.detalles);
        setFoto(producto.foto);
        setEnvio(producto.envio);
        setModoEdicion(true);
        setIdProducto(id);
    }

    const agregarProductoAlta = () => {
        const nuevoProducto = {nombre, precio, stock, marca, categoria, detalles, foto, envio};
        agregarProducto(nuevoProducto);
        vaciarCampos();
    }

    const editarProductoAlta = () => {
        const productoActualizado = {nombre, precio, stock, marca, categoria, detalles, foto, envio};
        editarProducto(idProducto, productoActualizado);
        setModoEdicion(false);
        setIdProducto(0);
    }

    const cancelarEdicionAlta = () => {
        setModoEdicion(false);
        setIdProducto(0);
        console.log("Se canceló la Edicición del Producto #" + idProducto);
    }

    const eliminarProductoAlta = (id) => {
        const pregunta = confirm("Desea eliminar el Producto #" + id + "?");

        if (pregunta) {
            eliminarProducto(id);
        }
    }

    const vaciarCampos = () => {
        setNombre("");
        setPrecio("");
        setStock("");
        setMarca("");
        setCategoria("");
        setDetalles("");
        setFoto("");
        setEnvio("");
    }

    return (
        <div className="container my-10">
            <div className="row justify-content-center">
                <div className="col-6">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control" value={nombre} onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Precio</label>
                            <input type="text" className="form-control" value={precio} onInput={(e) => {setPrecio(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Stock</label>
                            <input type="text" className="form-control" value={stock} onInput={(e) => {setStock(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Marca</label>
                            <input type="text" className="form-control" value={marca} onInput={(e) => {setMarca(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Categoría</label>
                            <select className="form-control" value={categoria} onInput={(e) => {setCategoria(e.target.value)}}>
                                <option value="teclado">Teclados</option>
                                <option value="bajos">Bajos</option>
                                <option value="guitarras">Guitarras</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Detalles</label>
                            <textarea className="form-control" value={detalles} onInput={(e) => {setDetalles(e.target.value)}}></textarea>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Foto</label>
                            <input type="text" className="form-control" value={foto} onInput={(e) => {setFoto(e.target.value)}} />
                        </div>
                        <div className="mb-3 form-field">
                            <input type="checkbox" className="check" value={envio} checked={envio ? "checked" : ""} onChange={() => {setEnvio(envio ? false : true)}} />
                            <label>Envío Gratis</label>
                        </div>
                        <button type="button" className="btn-solid theme-inverse fw-bold" disabled={habilitado ? false : true} onClick={modoEdicion ? editarProductoAlta : agregarProductoAlta}>{modoEdicion ? "Actualizar" : "Agregar"}</button>
                        {modoEdicion && <button type="button" className="btn-outline theme-inverse fw-bold mx-1" onClick={cancelarEdicionAlta}>Cancelar</button>}
                    </form>
                </div>
            </div>
            {cantidadProductos() > 0 ? <div className="row my-10">
                <div className="col">
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Marca</th>
                            <th scope="col">Categoría</th>
                            <th scope="col">Envío</th>
                            <th scope="col">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                productos.map(item => (
                                    <tr key={item.id} className={`${idProducto == item.id && "table-active"}`}>
                                        <td><img src={item.foto} alt={item.nombre} width={80} /></td>
                                        <td className="align-middle">{item.nombre}</td>
                                        <td className="align-middle">${item.precio}</td>
                                        <td className="align-middle">{item.marca}</td>
                                        <td className="align-middle">{item.categoria}</td>
                                        <td className="align-middle">{item.envio && <b>Gratis</b>}</td>
                                        <td className="align-middle text-end">
                                            <button className="btn-outline btn-sm theme-inverse fw-bold mx-1" disabled={(modoEdicion && item.id) != idProducto ? true : false} onClick={() => {obtenerProductoAlta(item.id)}}>Editar</button>
                                            <button className="btn-outline btn-sm theme-inverse fw-bold" disabled={(modoEdicion && item.id) != idProducto ? true : false} onClick={() => {eliminarProductoAlta(item.id)}}>Eliminar</button>
                                        </td>
                                </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div> : <SinProductos />}
        </div>
    )
}

export default Alta