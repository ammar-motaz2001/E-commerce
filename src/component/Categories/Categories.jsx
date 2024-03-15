import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick"


export default function Categories() {
  let [categories,setCategories]=useState([])
   async function getCategories(){
      let {data}=await axios.get("https://ecommerce.routemisr.com/api/v1/categories")

      for(let i=0;i<10;i++){
      setCategories(data.data)
        console.log(data.data[i]._id)
      }
    }

    

  useEffect(()=>{
      getCategories()
  },[])

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow:3,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:1200
  };
  
  return (
    <>
   

      <div className='my-4 container'>
        <h5 className='fw-bold'>Show Popular Categories</h5>
      <Slider {...settings}>
       {categories.map((item)=>(
     
          <Link to={`../sub-categories/${item._id}`}>
          
            <div className="px-2">
        <img src={item.image} height={300} className='w-100' alt="" />
        <p className='text-center'>{item.name}</p>
       </div>
          
          </Link>
    ))}
    </Slider>
      </div>
   
    </>
  )
}
