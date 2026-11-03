const NavBar = () => {
    return (
        <div className="container-fluid my-5">
            <div className="row">
                <div className="col">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link fw-bold" href="#">Todos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-bold" href="#">Teclados</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-bold" href="#">Bajos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-bold" href="#">Guitarras</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar