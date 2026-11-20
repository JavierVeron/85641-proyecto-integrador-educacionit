import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { useParams } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import SinProductos from "./SinProductos";

const Catalogo = () => {
    const {productos, cantidadProductos} = useContext(CartContext);
    const [items, setItems] = useState(productos);
    const {id} = useParams();

    useEffect(() => {
        setItems(id ? productos.filter(item => item.categoria == id) : productos);
    }, [id])

    if (cantidadProductos() == 0) {
       return (
            <SinProductos />
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