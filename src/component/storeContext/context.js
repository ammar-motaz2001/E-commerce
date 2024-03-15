import axios from "axios";
import { createContext, useState } from "react";


 async function addToCart(productId){
     
  
    return  axios.post("https://ecommerce.routemisr.com/api/v1/cart",{productId},{
        headers:{
            token:localStorage.getItem("token")
        }
    }).then(function({data}){
            return data
    }).catch(err=>{
        console.log(err)
    })
  
}
async function getProductToCart(){
     
    
    return  axios.get("https://ecommerce.routemisr.com/api/v1/cart",{
        headers:{
            token:localStorage.getItem("token")
        }
    }).then(function({data}){
            return data
    }).catch(err=>{
        return err
    })
  
}
async function UpdateProduct(productId,count){
   return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{count},{
        headers:{
            token:localStorage.getItem("token")
        }
    }).then(({data})=>{return data}).catch(err=>{
        console.log(err)
    })
}

async function DeleteProductFromCart(productId){
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
        headers:{
            token:localStorage.getItem("token")
        }
    }).then(function({data}){
            return data
    }).catch(err=>{
        console.log(err)
    })
  
}


async function checkOutSession(id,shippingAddress){
    return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}`,{shippingAddress},{
         headers:{
             token:localStorage.getItem("token")
         }
     }).then(({data})=>{return data}).catch(err=>{
         console.log(err)
     })
 }

async function clearCart(){
    return  axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`,{
        headers:{
            token:localStorage.getItem("token")
        }
    }).then(function({data}){
            return data
    }).catch(err=>{
        console.log(err)
    })
}

async function addToWishlist(productId){
  return  axios.post("https://ecommerce.routemisr.com/api/v1/wishlist", {productId},{
        headers:{
            token:localStorage.getItem("token")
        }
    }).then(({data})=>{
        return data
    }).then((err)=>{
        return err
    })
}
async function getLogged(){
    return  axios.get("https://ecommerce.routemisr.com/api/v1/wishlist",{
          headers:{
              token:localStorage.getItem("token")
          }
      }).then(({data})=>{
          return data
      }).then((err)=>{
          return err
      })
  }
  async function deleteProductFromWishList(productId){
    return  axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,{
        headers:{
            token:localStorage.getItem("token")
        }
    }).then(function({data}){
            return data
    }).catch(err=>{
       return err
    })
  
}
export let storeContext=createContext(0)
export default function StoreContextProvider({children}){
    let [counter,setCounter]=useState(0)
    let [count,setCount]=useState(0)
    return <storeContext.Provider value={{counter,setCounter,addToCart,
        getProductToCart,DeleteProductFromCart,UpdateProduct,clearCart,checkOutSession,count,setCount,addToWishlist,getLogged,deleteProductFromWishList}}>
                {children}
            </storeContext.Provider>
}