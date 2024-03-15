import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from '../Loading/Loading'
import { storeContext } from '../storeContext/context'

export default function ProductDetails() {
    let x=useParams()
    let [product,setProduct]=useState({})
    let [loading,setLoading]=useState(true)
    let {getProductToCart,setCounter,addToCart,DeleteProductFromCart,UpdateProduct,clearCart}= useContext(storeContext)

  async function getProduct(){
     let {data}=  await  axios.get(`https://ecommerce.routemisr.com/api/v1/products/${x.id}`)
     setProduct(data.data)
     setLoading(false)
    }

  
    
    useEffect(() => {
        getProduct()
    },[])
    if(loading) return <Loading/>
  return (
    
    <>
     <div className="container">
        <div className="row">
            <div className="col-md-4">
                <img src={product.imageCover} className='w-100' alt="" />
            </div>

            <div className="col-md-6 my-5">
                <h3 className='fw-bold'>{product.title}</h3>
                <p className='mt-2'>{product.description}</p>
                <p>{product.category.name}</p>
                <div className='d-flex justify-content-between'>
                    <div>
                    <p>{product.price} EGP</p>
                    </div>
                    <div>
                        <i class="fa-solid fa-star rating-color "></i>
                        <span>{product.ratingsAverage}</span>
                    </div>
                </div>
                <Link to={'../Products'} className='btn bg-main text-white w-100'>Previous</Link>
            </div>
        </div>
     </div>
    </>
  )
}
