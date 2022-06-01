import React, { createContext, useState } from 'react'

export const CartContext = createContext();

export const CartProvider = ({children}) => {
  
 const [count , setCount] = useState(0)
 
 const buy =() =>{
  //user is login or not

 }
    return (
    <CartContext.Provider 
      value = {{count,setCount,buy}} 
      >
          {children}
     </CartContext.Provider>)
}