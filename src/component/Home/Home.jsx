import React, { useState } from 'react'
import Slider from "react-slick"
import SlideOne from "../../assets/images/slider-image-1.jpeg"
import SlideTwo from "../../assets/images/slider-image-2.jpeg"
import SlideThree from "../../assets/images/slider-image-3.jpeg"
import Categories from '../Categories/Categories'
import Footer from '../Footer/Footer'
import Product from '../Product/Product'
import Products from '../Products/Products'

export default function Home() {
 
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:100,
    

 };
  return (
    <>
    
    <Slider {...settings}>
    
    <div>
        <img src={SlideOne} height={300} className='w-100' alt="" />
      </div>
      <div>
        <img src={SlideTwo} height={300} className='w-100' alt="" />
      </div>
      <div>
        <img src={SlideThree} className='w-100' height={300} alt="" />
      </div>
       
      </Slider>
      <Categories/>
      <Products/>
     
    </>

    
  )
}
