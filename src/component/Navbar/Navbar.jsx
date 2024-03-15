import React, { useContext, useEffect, useState } from 'react'
import image from '../../assets/images/freshcart-logo.svg'
import { NavLink } from 'react-router-dom'
import {storeContext } from '../storeContext/context'

export default function Navbar() {

   let{counter,setCounter,getProductToCart,count,setCount,getLogged}= useContext(storeContext)
  
      
   useEffect(()=>{

    (async () => {
      try {
        let data=await getProductToCart()
        console.log(data)
       
        if(data.status="success"){
          setCounter(data.numOfCartItems)
        }
        
      } catch (error) {
        console.log(error)
      }
       

    })()

   },[])
   
   let[wish,setWish]=useState([])
  useEffect(()=>{
    (async ()=>{
      try {
        let data=await getLogged()
      console.log(data.data)
      setWish(data.data)
      setCount(data.data.length)
      } catch (error) {
        console.log(error)
      }
    })()
  },[])
   

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
    <div className="container-fluid">
      <NavLink className="navbar-brand" to="/">
        <img src={image} alt="logo" />
      </NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link " aria-current="page" to="/home">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " aria-current="page" to="/cart">Cart</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " aria-current="page" to="/products">Products</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " aria-current="page" to="/categories">Categories</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " aria-current="page" to="/brands">Brands</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " aria-current="page" to="/allOrders"> All Orders</NavLink>
          </li>
        </ul>

        <ul className="navbar-nav ms-auto mb-1 mb-lg-0">
        <li className="nav-item">
          <button type="button" class="btn  position-relative ">
          <NavLink className="nav-link " aria-current="page" to="/cart"> 
          <i className="fa-solid fa-cart-shopping text-warning" style={{fontSize:"25px"}}></i>
           </NavLink>
      {counter?<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success" style={{fontSize:"14px"}}>
      {counter}
    </span>:""}
  </button>
          </li>
          <li className="nav-item">
          <button type="button" class="btn  position-relative ">
          <NavLink className="nav-link " aria-current="page" to="/Wishlist"> 
          <i class="fa-solid fa-heart text-danger" style={{fontSize:"25px"}}></i>
           </NavLink>
        {count? <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success" style={{fontSize:"14px"}}>
{count}</span>:""}
    
    
  </button>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link  ps-4" aria-current="page" to="/signin">LogOut</NavLink>
          </li>
        </ul>

      </div>
    </div>
      </nav>
    </>
  )
}
