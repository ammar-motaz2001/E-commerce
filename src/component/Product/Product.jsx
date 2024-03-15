import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { storeContext } from '../storeContext/context'
import { toast } from 'react-toastify';
// import { useQuery } from 'react-query';

export default function Product({item}) {
let {counter,setCounter,addToCart,count,setCount,addToWishlist,getLogged}=  useContext(storeContext)
let [loading,setBtnLoading]=useState(true)
let [color,setColor]=useState(false)
 useEffect(() => {
 try {
  const storedWishlist = localStorage.getItem('IDS');
  setColor(storedWishlist.includes(item._id));
 } catch (error) {
  console.log(error)
 }
}, [item._id]);

 async function addProductToWishlist(id){
    try {
    
    let data= await addToWishlist(id)
    let datat=await getLogged()
    let index=[]
    
      console.log(id)
      for(let i=0;i<datat.data.length;i++){
        console.log(datat.data[i]._id)
        index.push(datat.data[i]._id)
      }
      console.log(index)
      localStorage.setItem("IDS",index)
      if(index.includes(id)){
        setColor(true)
        
      }else{
        setColor(false)
      }
    
      
      
    if(data.status="success"){
      toast.success("Product added successfully to your wishlist")
      setCount(data.data.length)
    

    }

   
    

    } catch (error) {
      console.log(error)
     
    }
  }

  

// useEffect(()=>{
//   (async ()=>{
//   let dataT= await getLogged()
//   console.log(dataT)

//   if(dataT.status="success"){
//     setColor(true)
//   }
//   })()

// },[])
 

  


  
 async function addProductToCart(productId){
  try {
  setBtnLoading(false)
   let data= await addToCart(productId)
   console.log(data)
   if(data?.status=="success"){
    setBtnLoading(true)
      toast.success("Product added successfully to your cart")
      setCounter(data?.numOfCartItems)
   }
  } catch (error) {
    console.log(error)
  }
  }
  return (
    
    <>
     <div className="col-md-2">
            <Link to={'../Product-details/'+item._id}>
            <div className="product my-3 p-2 cursor-pointer">
              <img src={item.imageCover} className='w-100' alt="" />
              <span className='text-main '>{item.category.name}</span>
              
              {/* <span className='fw-bold'>{item.title.split(' ').slice(0,3).join(" ")}</span> */}
                 
              <div className='d-flex justify-content-between'>
                <div>
                  <p>{item.price} EGP</p>
                </div>
                <div>
                  <i className="fa-solid fa-star rating-color"></i>
                  {item.ratingsAverage}
                </div>
                
              </div>
              
            </div> 
            </Link>
              <span  onClick={()=>addProductToWishlist(item._id)} style={{fontSize:"20px",color:"black"}} ><i id='wish' className={color?"fa-solid fa-heart cursor-pointer text-danger":"fa-solid fa-heart cursor-pointer"}> </i> <span>WishList</span> </span>
              <button onClick={()=>addProductToCart(item._id)} className='btn  bg-main w-100 text-white'>
                {loading?`Add To Cart`:"Loading"}
                
                </button>

            </div>
           
    </>
  )
}
