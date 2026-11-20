import { Link } from "react-router-dom"

const SinProductos = () => {
    return (
        <div className="container my-10">
            <div className="row">
                <div className="col">
                    <div className="alert theme-warning" role="alert">
                        <vstack>
                            <h4 className="alert-heading mb-2">Atención!</h4>
                            <p>No se encontraron Productos!</p>
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

export default SinProductos