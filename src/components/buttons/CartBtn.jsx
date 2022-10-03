import React from 'react'
import {NavLink} from 'react-router-dom';
import { useSelector } from 'react-redux';

const CartBtn = () => {
  const quantity = useSelector((state)=> state.cart.quantity)
  return (
    <>
    <NavLink to="/cart" className="btn btn-outline-primary ms-2">
      <span className='fa fa-shopping-cart me-2'>Cart ({quantity})</span>
    </NavLink>
    </>
  )
}

export default CartBtn