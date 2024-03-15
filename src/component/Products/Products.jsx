import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from '../Product/Product'
import Loading from '../../component/Loading/Loading'
import { useQuery } from 'react-query'

export default function Products() {

    function getData(){
     return axios.get("https://ecommerce.routemisr.com/api/v1/products")
        
      
    }

  let {data,isLoading}=  useQuery("getData",getData)
  if(isLoading) return  <Loading/>
  return (
    <>
      <div className="container">
        <div className="row">
          {data?.data.data.map(item=>{
            return <Product item={item} key={item._id} product={getData}/>
          })}
        </div>
      </div>
    </>
  )
}
