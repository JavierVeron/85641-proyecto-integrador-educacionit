const Card = ({item}) => {
    return (
        <section className="card mx-5">
            <img src={item.foto} className="card-img-top" alt={item.nombre} />
            <div className="card-body">
                <h4 className="card-title">{item.nombre}</h4>
                <p className="card-text">{item.detalle}</p>
                <p className="card-text fw-bold">${item.precio}</p>
                <a href="#" className="btn-solid theme-primary fw-bold">Agrega al Carrito</a>
            </div>
        </section>
    )
}

export default Card