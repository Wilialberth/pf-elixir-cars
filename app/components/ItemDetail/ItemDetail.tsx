/* import React, { useState } from 'react';
import "./ItemDetail.css";
import ItemCount from '../ItemCount/itemCount';
import Link from 'next/link';
import { useCartContext } from '../../Context/CartContext'; 
import { Product } from '../../types';


interface ItemDetailProps {
  data: Product;
}

const ItemDetail: React.FC<ItemDetailProps> = ({ data }) => {
  const [goToCart, setGoToCart] = useState<boolean>(false);
  const { addProduct } = useCartContext();

  const onAdd = (quantity: number) => { // la fn onAdd setea el estado de la variable goToCart a true y llama a la funcion addProduct con los parametros data y quantity
    setGoToCart(true);                   // los parametros data y quantity son de tipo Product
    addProduct(data, quantity); // llama a la funcion addProduct con los parametros data y quantity
  }

  return (
    <div className='container' >
      <div className='detail' >
        <img className='detail__image' src={data.image} alt="detalle de imagen" /> 
        <div className='content' >
          <h1>{data.name}</h1>
          {
            goToCart
              ? <Link to='/cart' className='finalizar_compra' >Finalizar compra</Link>
              : <ItemCount initial={1} stock={data.stock} onAdd={onAdd} />
          }
        </div>
        <center>
          <Link to='/cart'>Ir al carrito</Link> // Buscar el boton en carrito -Alejandro-
        </center>
      </div>
    </div>
  )
}

export default ItemDetail;
 */