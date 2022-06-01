import React, { createContext, useContext, useState } from 'react'
import { AuthContext } from './AuthContext';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
  
    const {isAuthorized} = useContext(AuthContext)

 const [count , setCount] = useState(0)
 
 const buy =() =>{
  //user is login or not
   
    if(isAuthorized){

        console.log("can buy")
    }else{
        console.log("con not buy without login")
    }

 }
    return (
    <CartContext.Provider 
      value = {{count,setCount,buy}} 
      >
          {children}
     </CartContext.Provider>)
}