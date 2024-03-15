import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Brand from '../Brand/Brand'
import Loading from '../Loading/Loading'

export default function Brands() {
  let [brand,setBrand]=useState([])
  let [loading,setLoading]=useState(true)
async  function getBrands(){
    let{ data}=await axios.get("https://ecommerce.routemisr.com/api/v1/brands")
      setBrand(data.data)
      console.log(data.data)
      setLoading(false)
  }

  useEffect(()=>{
    getBrands()
  },[])
  if(loading) return <Loading/>
  return (
    <>
      <div className="container">
        <div className="row">
          {brand.map((item)=>{
            return <Brand key={item._id} item={item}/>
          })}
        </div>
      </div>
    </>
  )
}
