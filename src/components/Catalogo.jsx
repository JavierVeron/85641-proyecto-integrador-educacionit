import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { useParams } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const Catalogo = () => {
    const {productos} = useContext(CartContext);
    const [items, setItems] = useState(productos);
    const {id} = useParams();

    useEffect(() => {
        setItems(id ? productos.filter(item => item.categoria == id) : productos);
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