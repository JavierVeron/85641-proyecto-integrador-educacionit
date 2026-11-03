import { useState } from "react";
import productosJSON from "../assets/productos.json";

const Alta = () => {
    const [productos, setProductos] = useState(productosJSON);
    const [nombre, setNombre] = useState("SE1HSS-SK-3TS");
    const [precio, setPrecio] = useState(695000);
    const [stock, setStock] = useState(1);
    const [marca, setMarca] = useState("SX");
    const [categoria, setCategoria] = useState("guitarras");
    const [detalles, setDetalles] = useState("Pack de Guitarra Electrica | SE1 | Micrófonos HSS | Amplificador GA1065 10W | Cable GC-10 | Afinador SZTU2 | Correa S40 | 6 Púas | Funda EB400/M | C: Sunburst");
    const [foto, setFoto] = useState("https://todomusica.com.ar/31565-thickbox_default/se1hss-sk-3ts.jpg");
    const [envio, setEnvio] = useState(true);

    const generarId = () => {
        return productos.length + 1;
    }

    const agregarProducto = () => {
        const id = generarId();
        const nuevoProducto = {id, nombre, precio, stock, marca, categoria, detalles, foto, envio};
        setProductos([...productos, nuevoProducto]);
        console.log("El Producto #" + id + " se agregó correctamente!");
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
                            <input type="checkbox" className="check" value={envio} checked={envio ? "checked" : ""} onChange={(e) => {setEnvio(envio ? false : true)}} />
                            <label>Envío Gratis</label>
                        </div>
                        <button type="button" className="btn-solid theme-inverse fw-bold" onClick={agregarProducto}>Agregar</button>
                    </form>
                </div>
            </div>
            <div className="row my-5">
                <div className="col">
                    {productos.length > 0 ? <table className="table">
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
                                    <tr key={item.id}>
                                        <td><img src={item.foto} alt={item.nombre} width={80} /></td>
                                        <td className="align-middle">{item.nombre}</td>
                                        <td className="align-middle">${item.precio}</td>
                                        <td className="align-middle">{item.marca}</td>
                                        <td className="align-middle">{item.categoria}</td>
                                        <td className="align-middle">{item.envio && <b>Gratis</b>}</td>
                                        <td className="align-middle text-end">
                                            <button className="btn-solid theme-inverse fw-bold">Eliminar</button>
                                        </td>
                                </tr>
                                ))
                            }
                        </tbody>
                    </table> : <vstack>
                                <h4 className="alert-heading fw-bold mb-2">Atención!</h4>
                                <p>No se encontraron Productos!</p>
                            </vstack>}
                </div>
            </div>
        </div>
    )
}

export default Alta