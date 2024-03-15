import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Branddetails() {
    let para=useParams()
    let[details,setDetails]=useState({})
  async function getBrandDetails(){
        let {data}= await axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${para.id}`)
        setDetails(data?.data)
        console.log(data?.data)
    }

    useEffect(()=>{
        getBrandDetails()
    },[])
  return (
    <>
      <div className="container">
        <div className="row">
            <div className="col-md-9">
                <img src={details.image} className='w-50 ' alt="" />
                <h3 className='fw-bold text-main ms-5 mb-5'>Name of Company: {details.name}</h3>
            </div>

           
        </div>
      </div>
    </>
  )
}
