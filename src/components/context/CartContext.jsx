import { createContext, useState } from "react";
import productosJSON from "../../assets/productos.json";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [productos, setProductos] = useState(productosJSON);
    const [carrito, setCarrito] = useState([]);

    // Funciones de Productos
    const obtenerProducto = (id) => {
        return productos.find(item => item.id == id);
    }

    const generarId = () => {
        return productos.length + 1;
    }

    const agregarProducto = (producto) => {
        const id = generarId();
        producto = {id, ...producto}
        setProductos([...productos, producto]);
        console.log("El Producto #" + id + " se agregó correctamente!");
    }

    const editarProducto = (id, productoActualizado) => {
        const producto = productos.find(item => item.id == id);
        producto.nombre = productoActualizado.nombre;
        producto.precio = productoActualizado.precio;
        producto.stock = productoActualizado.stock;
        producto.marca = productoActualizado.marca;
        producto.categoria = productoActualizado.categoria;
        producto.detalles = productoActualizado.detalles;
        producto.foto = productoActualizado.foto;
        producto.envio = productoActualizado.envio;
        setProductos([...productos]);
        console.log("Se actualizó el Producto #" + id);
    }

    const eliminarProducto = (id) => {
        const productosActualizados = productos.filter(item => item.id != id);
        setProductos(productosActualizados);
        console.log("Se eliminó el Producto #" + id);
    }

    const cantidadProductos = () => {
        return productos.length;
    }

    // Funciones de Carrito
    const agregarProductoCarrito = (id) => {
        let producto = carrito.find(item => item.id == id);

        if (producto) {
            producto.cantidad++;
            setCarrito([...carrito]);
        } else {
            producto = obtenerProducto(id);
            producto.cantidad = 1;
            setCarrito([...carrito, producto]);
        }        

        console.log("Se agregó al Carrito el Producto #" + id);
    }

    const eliminarProductoCarrito = (id) => {
        const carritoActualizado = carrito.filter(item => item.id != id);
        setCarrito(carritoActualizado);
        console.log("Se eliminó del Carrito el Producto #" + id);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
        console.log("Se vació el Carrito!");
    }

    const incrementarItemCarrito = (id) => {
        let producto = carrito.find(item => item.id == id);

        if (producto) {
            if (producto.cantidad < producto.stock) {
                producto.cantidad++;
                setCarrito([...carrito]);
            }
        }
    }

    const decrementarItemCarrito = (id) => {
        let producto = carrito.find(item => item.id == id);

        if (producto) {
            if (producto.cantidad > 1) {
                producto.cantidad--;
                setCarrito([...carrito]);
            }
        }
    }

    const cantidadProductosCarrito = () => {
        return carrito.reduce((acum, item) => acum += item.cantidad, 0);
    }

    const sumaProductosCarrito = () => {
        return carrito.reduce((acum, item) => acum += item.cantidad * item.precio, 0);
    }

    return <CartContext.Provider value={{productos, carrito, obtenerProducto, agregarProducto, editarProducto, eliminarProducto, cantidadProductos, agregarProductoCarrito, eliminarProductoCarrito, vaciarCarrito, incrementarItemCarrito, decrementarItemCarrito, cantidadProductosCarrito, sumaProductosCarrito}}>
        {children}
    </CartContext.Provider>
}

export default CartContextProvider