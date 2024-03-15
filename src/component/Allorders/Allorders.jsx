import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Allorders() {

    let[allorder,setAllOrder]=useState(null)

   async function getAllOrders(){
    let userId=localStorage.getItem("userID")
    let data=await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`)
    console.log(data)
      setAllOrder(data.data)
    }
    useEffect(()=>{
      getAllOrders()
    },[])
  return (
    <>
     <div className="container">
      <div className="row">
        {allorder?.map(item=>{
          return <div className="col-md-6">
            <div className='p-3 bg-success rounded-2 m-3 g-3'>
            <p className=' fw-bold'> Price : {item.totalOrderPrice}</p>
            <p className=' fw-bold'>Phone : {item.shippingAddress?.phone}</p>
            <p className=' fw-bold'>City : {item.shippingAddress?.city}</p>
            <p className=' fw-bold'>Payment : {item. paymentMethodType}</p>

            <div className="row">
              {item.cartItems.map(items=>{
                return <div className="col-4">
                <img src={items.product.imageCover} className='w-100 p-3' alt="" />
                <h5 className='text-center'>{items.product.title.split(" ").slice(0,2).join(" ")}</h5>
                </div>
              })}
            </div>
            </div>
        </div>
        })}
      
      </div>
      </div> 
    </>
  )
}
