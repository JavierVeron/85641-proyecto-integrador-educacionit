import { Link } from "react-router-dom"

const Error404 = () => {
    return (
        <div className="container my-10">
            <div className="row">
                <div className="col text-center">
                    <i className="bi bi-exclamation-circle-fill"></i>
                    <h1 className="fw-bold">Error 404!</h1>
                    <h3>La página que estás buscando no existe!</h3>
                    <p className="my-10"><Link to={"/"} className="btn-outline theme-secondary">Página Principal</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Error404