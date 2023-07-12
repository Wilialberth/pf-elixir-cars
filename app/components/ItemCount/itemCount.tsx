import React, { useState, useEffect } from 'react';

interface ItemCountProps {
  initial: number;
  stock: number;
  onAdd: (count: number) => void;
}

const ItemCount: React.FC<ItemCountProps> = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState<number>(initial);

  const decrease = () => {
    setCount(count - 1);
  }

  const increase = () => {
    setCount(count + 1);
  }

  useEffect(() => {
    setCount(initial);
  }, [initial]);

  return (
    <div className='counter'>
      <button disabled={count <= 1} onClick={decrease}>-</button>
      <span>{count}</span>
      <button disabled={count >= stock} onClick={increase}>+</button>
      <div>
        <button disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
      </div>
    </div>
  );
}

export default ItemCount;
