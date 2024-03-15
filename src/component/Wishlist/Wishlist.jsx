import React, { useContext, useEffect, useState } from 'react'
import { storeContext } from '../storeContext/context'
import Loading from '../Loading/Loading'
import axios from 'axios'

export default function Wishlist() {

 let{getLogged,setCount,deleteProductFromWishList} =  useContext(storeContext)
  let [wishContent,setWishContent]=useState([])
  let [loading,setLoading]=useState(true)
 async function deleteItems(productId){
    let data= await deleteProductFromWishList(productId)
    let dataTwo=await getLogged()
    console.log(dataTwo)
    console.log(data)
    setWishContent(dataTwo.data)
    setCount(data.data.length)
    localStorage.removeItem(`IDS`)
  }
 
  useEffect(() => {
    (async()=>{
      let data= await getLogged()
      console.log(data.data)
      setWishContent(data.data)
      setCount(data.data.length)
      setLoading(false)
    })()
  }, [])  
    if(loading) return <Loading/>
    if(wishContent.length==0) return <h1 className='text-center my-5 text-danger'>No Items in WishList</h1>
    
  return (
    <>
    <div className="container bg-main-light my-4">
            <h1 className='text-center'>My WishList</h1>
           {wishContent.map(item=>{
            return  <div key={item._id} className="row border-bottom my-3">
            <div className="col-1 my-2 ">
              <img src={item.imageCover} className='w-100' alt="" />
            </div>
            <div className="col-11 d-flex justify-content-between">
              <div className="div">
              <p className='m-0 p-0'>{item.title}</p>
              <span className='m-0 p-0 text-main'>Price :{item.price}</span>
              <br />
              <button className='btn m-0 p-0 ' onClick={()=>deleteItems(item?._id)}><i className="fa-solid fa-trash-can text-main cursor-pointer"></i> Remove</button>
              </div>
            
            </div>
            
          </div>
           })}
          
        </div>
    </>
  )
}
