const Card = ({item}) => {
    return (
        <section className="card">
            <img src={item.foto} className="card-img-top" alt={item.nombre} />
            <div className="card-body text-center">
                <h4 className="card-title fw-bold">{item.nombre}</h4>
                <p className="card-text">{item.detalles.substring(0, 70) + "..."}</p>
                <p className="card-text fw-bold">${item.precio}</p>
                <div className="text-center">
                    <a href="#" className="btn-solid theme-primary fw-bold">Agrega al Carrito</a>
                </div>
            </div>
        </section>
    )
}

export default Card