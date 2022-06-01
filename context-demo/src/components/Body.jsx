import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';


import Cart from './Cart'
const Body = () => {
  const {isAuthorized} = useContext(AuthContext);
  return (
    <div> Body
     Product : { isAuthorized ? "LoggedIN" : "LoggedOut" }
      <Cart/>
           
    </div>
  )
}

export default Body