import productosJSON from "../assets/productos.json";
import Card from "./Card";

const Catalogo = () => {
    return (
        <div className="container">
            <div className="row">
                {
                    productosJSON.map(item => (
                        <div className="col-3" key={item.id}>
                            <Card item={item} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Catalogo