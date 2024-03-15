import React from 'react'
import MainLayout from './component/MainLayout/MainLayout'
import Cart from './component/Cart/Cart'
import Products from './component/Products/Products'
import Categories from './component/Categories/Categories'
import Brands from './component/Brands/Brands'
import Home from './component/Home/Home'
import PageNotFound from './component/PageNotFound/PageNotFound'
import { RouterProvider,createBrowserRouter, createHashRouter } from 'react-router-dom'
import Signup from './component/Signup/Signup'
import Signin from './component/Signin/Signin'
import AuthLayout from './component/AuthLayout/AuthLayout'
import ProtectLayer from './component/ProtectLayer/ProtectLayer'
import ProductDetails from './component/ProductDetails/ProductDetails'
import StoreContext from './component/storeContext/context'
import StoreContextProvider from './component/storeContext/context'
import { ToastContainer, toast } from 'react-toastify';
import Address from './component/Address/Address'
import ForgetPassword from './component/ForgetPassword/ForgetPassword'
import Branddetails from './component/BrandDetails/Branddetails'
import Resetpassword from './component/ResetPassword/Resetpassword'
import Writecode from './component/WriteCode/Writecode'
import Newpassword from './component/NewPassword/Newpassword'
import Wishlist from './component/Wishlist/Wishlist'
import SubCategories from './component/SubCategories/SubCategories'
import Allorders from './component/Allorders/Allorders'

let routes=createHashRouter([
  {
    path:'/',element:<MainLayout/>,children:[
      {path:'Home',element:<ProtectLayer><Home/></ProtectLayer>},
      {path:'Cart',element:<ProtectLayer><Cart/></ProtectLayer>},
      {path:'Products',element:<ProtectLayer><Products/></ProtectLayer>},
      {path:'Categories',element:<ProtectLayer><Categories/></ProtectLayer>},
      {path:'Brands',element:<ProtectLayer><Brands/></ProtectLayer>},
      {path:'Product-details/:id',element:<ProtectLayer><ProductDetails/></ProtectLayer>},
      {path:'address/:id',element:<ProtectLayer><Address/></ProtectLayer>},
      {path:'brand-details/:id',element:<ProtectLayer><Branddetails/></ProtectLayer>},
      {path:'sub-categories/:id',element:<ProtectLayer><SubCategories/></ProtectLayer>},
      {path:'Wishlist',element:<ProtectLayer><Wishlist/></ProtectLayer>},
      {path:'/allorders',element:<Allorders/>},
      {path:'*',element:<PageNotFound/>}
    ]
  },
  {
    path:'/',element:<AuthLayout/>,children:[
      {path:'Signup',element:<Signup/>},
      {index:true,element:<Signin/>},
      {path:'Signin',element:<Signin/>},
      {path:'changeMyPassword',element:<ForgetPassword/>},
      {path:'resetPassword',element:<Resetpassword/>},
      {path:'WriteCode',element:<Writecode/>},
      {path:'NewPassword',element:<Newpassword/>},


      

    ]
  }
])
export default function App() {
  return (
    <>
    <ToastContainer theme='colored' position='top-center' autoClose={100}/>
    
    <StoreContextProvider>
    <RouterProvider router={routes}/>
    </StoreContextProvider>
    </>
  )
}
