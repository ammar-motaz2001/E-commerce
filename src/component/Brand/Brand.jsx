import React from 'react'
import { Link } from 'react-router-dom'

export default function Brand({item}) {
  return (
    <>
       
        
        <div className="col-2 product my-5">
        <Link to={`../brand-details/${item._id}`}>
            <img src={item.image} className='w-100' alt="" />
            <p className='text-main text-center fw-bold'>{item.name}</p>
            </Link>  
          </div> 
        
        
    </>
  )
}
