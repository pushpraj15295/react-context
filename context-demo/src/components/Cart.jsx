import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {
 
  const {count,setCount} = useContext(CartContext)

  return (
    <div>Cart

          <button onClick={()=>setCount(count+1)}>add To Card</button>
          <button onClick={()=>setCount(count-1)}>remove To Card</button>
    </div>
  )
}

export default Cart