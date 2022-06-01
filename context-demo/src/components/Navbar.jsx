import React, { useContext } from 'react'
import Wishlist from './Wishlist'
import {AuthContext} from "../context/AuthContext"

const Navbar = () => {
  const {isAuthorized,login,logout} = useContext(AuthContext);
  return (
    <div>Navbar
      <button type="button"
      onClick = {() => { 
        if(isAuthorized){
          logout()
         ;
        }
        else{
          login("P","P")
        }
      }}
      > {isAuthorized ? "Logout" : "Login"} </button>
         <Wishlist/>
    </div>
  )
}

export default Navbar