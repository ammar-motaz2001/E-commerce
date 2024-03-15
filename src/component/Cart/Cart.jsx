import React, { useContext, useEffect, useState } from 'react'
import { storeContext } from '../storeContext/context'
import axios from 'axios'
import Loading from '../Loading/Loading'
import { toast } from 'react-toastify'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'

export default function Cart() {

 let {getProductToCart,setCounter,counter,DeleteProductFromCart,UpdateProduct,clearCart}= useContext(storeContext)
  let [cartItems,setCartItems]=useState([])
  let [loading,setLoding]=useState(true)
  

   async function deleteItem(id){
      let data=await DeleteProductFromCart(id)
      setCartItems(data)
      setCounter(data.numOfCartItems)
      toast.error("Product Removed From Cart")
    }
      useEffect(()=>{
        (async ()=>{
            let data=await getProductToCart()
            console.log(data)
            localStorage.setItem("userID",data.data?.cartOwner)
            setCartItems(data)
            setLoding(false)
        })()
      },[])

        async function UpdateProductInCart(productId,count){
        let data=await UpdateProduct(productId,count)
        console.log(data)
          if(data.status="success"){
            setCartItems(data)

          }
      }
      async function clearCartFromProducts(){
        let data=await clearCart()
        console.log(data)
          if(data.status="success"){
            setCartItems(data)
            console.log(data.numOfCartItems)
            setCounter(data.numOfCartItems)


          }
      }

       

  
      
        
          if(cartItems?.numOfCartItems==0) return <h2 className='text-center my-3 text-danger fw-bold fs-2'>Your Cart Now is Empty</h2>
          if (cartItems?.numOfCartItems==undefined) {
          if(loading) return <Loading/>
            return <h1 className='text-center my-3 text-danger fw-bold fs-2' >Your Cart Is Empty Now ,Select Product To Buy</h1>
          }
      
          if(loading) return <Loading/>
  return (
    <>
        <div className="container bg-main-light my-4">
            <h1>My Cart</h1>
            <p className='text-main'>Total Cart Price : {cartItems?.data?.totalCartPrice}</p>

           {cartItems ?.data?.products.map(item=>{
            return  <div key={item._id} className="row border-bottom my-3">
            <div className="col-1 my-2 ">
              <img src={item.product.imageCover} className='w-100' alt="" />
            </div>
            <div className="col-11 d-flex justify-content-between">
              <div className="div">
              <p className='m-0 p-0'>{item.product.title}</p>
              <span className='m-0 p-0 text-main'>Price :{item.price}</span>
              <br />
              <button className='btn m-0 p-0 ' onClick={()=>deleteItem(item?.product?. _id)}><i className="fa-solid fa-trash-can text-main cursor-pointer"></i> Remove</button>
              </div>
              <div>
              <button  class="fa-solid fa-plus brdr p-1 mt-5 cursor-pointer" onClick={()=>UpdateProductInCart(item.product. _id,item.count+1)}></button>
              <button className='btn'>{item.count}</button>
              <button disabled={item.count<=1}  class="fa-solid fa-minus brdr p-1 cursor-pointer"  onClick={()=>UpdateProductInCart(item.product. _id,item.count-1)}></button>
              </div>
            </div>
            
          </div>
           })}
           <div className='d-flex justify-content-around w-100'>
            <div>
            <Link to={`/address/${cartItems.data._id}`} className='btn bg-main text-white  mb-3'>Place Order</Link>

            </div>
            <div>
            
              <button  onClick={()=>clearCartFromProducts()}className='btn bg-main text-white  mb-3'>Clear Cart</button>
              
            </div>
           </div>
        </div>
    </>
  )
}
