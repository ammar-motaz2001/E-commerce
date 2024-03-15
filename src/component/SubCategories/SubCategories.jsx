import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Categories from '../Categories/Categories'
import Loading from '../Loading/Loading'
export default function SubCategories() {
        let [categ,setcateg]=useState([])
        let [title,setTitle]=useState([])
        let [loading,setLoading]=useState(true)

        let para=useParams()
   async function getSpecificCategoris(){
        let {data}= await axios.get(`https://ecommerce.routemisr.com/api/v1/products?category[in]=${para.id}`)
        console.log(data.data)
        if(data.data.length==0){
         console.log("hello")
         setLoading(false)
         
        }
        for(let i=0;i<data.data.length;i++){ 
            console.log(data.data[i].images)
            setcateg(data.data[i].images)
            setLoading(false)
        }
       
    }
    useEffect(()=>{
        getSpecificCategoris()
    },[])
    
    if(categ.length==0) return <Loading/>

  return (
    <>
      <div className="container">
        <div className="row m-3 ">
            {categ.map(item=>{
                return <div className="col-4 g-3">
                <img  src={item} className='w-100 bg-main-light' alt="" />
            </div>
            })}
           
            
        </div>
      </div>
    </>
  )
}
