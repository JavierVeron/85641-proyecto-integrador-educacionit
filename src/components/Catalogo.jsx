import { useState } from "react";
import productosJSON from "../assets/productos.json";
import Card from "./Card";

const Catalogo = () => {
    const [productos, setProductos] = useState(productosJSON);

    if (productos.length == 0) {
        return (
            <div className="container my-10">
                <div className="row">
                    <div className="col">
                        <div className="alert theme-warning" role="alert">
                            <vstack>
                                <h4 className="alert-heading fw-bold mb-2">Atención!</h4>
                                <p>No se encontraron Productos!</p>
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
                {
                    productosJSON.map(item => (
                        <div className="col-3 mb-5" key={item.id}>
                            <Card item={item} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Catalogo