import { useEffect, useState } from "react";
import productosJSON from "../assets/productos.json";
import Card from "./Card";
import { useParams } from "react-router-dom";

const Catalogo = () => {
    const [items, setItems] = useState(productosJSON);
    const {id} = useParams();

    useEffect(() => {
        setItems(id ? productosJSON.filter(item => item.categoria == id) : productosJSON);
    }, [id])

    if (items.length == 0) {
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
                    items.map(item => (
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