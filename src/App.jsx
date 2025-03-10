import React, { useState } from 'react';
import ProductCard from './Components/ProductCard'

const productos = [
  { id: 1, nombre: 'Camiseta Colombia', precio: 20, imagen: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/dd3211ccf3b8485091d5825e4b2bc913_9366/Camiseta_Local_Seleccion_Colombia_24_Version_Jugador_Amarillo_IP8280_21_model.jpg' },
  { id: 2, nombre: 'Camiseta Argentina', precio: 20, imagen: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/05596cc5f7724da8946f5362652319d0_9366/Camiseta_Local_Seleccion_Argentina_24_Blanco_IP8409_21_model.jpg' },
  { id: 3, nombre: 'Camiseta Deportiva', precio: 20, imagen: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5ee24b019f8640e886ffd3e19a6f2fc8_9366/Camiseta_de_Entrenamiento_Power_Rosa_IX9092_HM1.jpg' },
  { id: 4, nombre: 'croissant', precio: 12, imagen: 'https://e00-telva.uecdn.es/assets/multimedia/imagenes/2020/10/05/16018972663315.jpg' },

];

const TiendaVirtual = () => {
  const [carrito, setCarrito] = useState([]);
  const [buscar, setBuscar] = useState("");

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };
    const vaciarCarrito = () => {
      setCarrito([]);
  };
  const eliminarDelCarrito = (productoId) => {
    const index = carrito.findIndex(item => item.id === productoId);
    if (index !== -1) {
      const nuevoCarrito = [...carrito];
      nuevoCarrito.splice(index, 1);
      setCarrito(nuevoCarrito);
    }
  };

  const filter= productos.filter((producto)=> producto.nombre.toLowerCase())
  console.log(filter)

  return (
    <div className="container">
      <h1>Mi Tienda Virtual</h1>
      
      <div className="productos-grid">
        {productos.map((producto) => (
          <ProductCard 
            key={producto.id} 
            producto={producto} 
            onAgregarAlCarrito={agregarAlCarrito}
          />
        ))}
      </div>
      
      <div className="carrito">
        <h2>Carrito</h2>
        <div className="boton-agregar">
          <p>{carrito.length} artículos</p>
          <button onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
        </div>
        <ul className="mt-2">
          {carrito.map((item, index) => (
            <div key={index} className="carrito-item ">
              <img 
                src={item.imagen} 
                alt={item.nombre} 
                className="carrito-item-imagen"
              />
              <span>{item.nombre} - ${item.precio}</span>
              <button onClick={()=>eliminarDelCarrito(item.id)}>eliminarDelCarrito</button>
            </div>
          ))}
        </ul>
        <p className="carrito-total">
          Total: ${carrito.reduce((sum, item) => sum + item.precio, 0)}
        </p>
      </div>
    </div>
  );
};

export default TiendaVirtual;