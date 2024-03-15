import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ForgetPassword() {
    let[message,setMessage]=useState(false)
    let Navigate=useNavigate()
   function updateUserData(values) {

        return axios.put("https://ecommerce.routemisr.com/api/v1/users/changeMyPassword",values,{
            headers:{
                token:localStorage.getItem("token")
        }}).then(({data})=>{
            console.log(data)
            if(data.message="success"){
                setMessage(data.message)
            }
            return data
            
            
        }).catch(err=>{
            console.log(err)
            
        })
    }
    //   async  function updatePassword(values){
    //        try {
    //         let data=await axios.put("https://ecommerce.routemisr.com/api/v1/users/changeMyPassword",values,{
    //             headers:{
    //                 token:localStorage.getItem("token")}
    //         })
    //         let result=await data.json()
    //         console.log(result)
    //        } catch (error) {
    //         console.log(error)
    //        }
    //     }
    let change=useFormik({
        initialValues:{
            currentPassword:'',
            password:'',
            rePassword:'',
    },

        onSubmit:(values)=>{
            updateUserData(values)
            // updatePassword(values)
            console.log(values)
           

        }
    })
  return (
    <>
      <div className="container bg-main-light p-3 pb-5 mt-4">
        <h3 className='my-4' >Update Your Password</h3>

        <form onSubmit={change.handleSubmit}>
            <label htmlFor="currentPassword">Current Password:</label>
            <input onChange={change.handleChange} type="password" id='currentPassword' className='form-control w-75 mt-2' name='currentPassword' />
            <label htmlFor="password">Password:</label>
            <input onChange={change.handleChange} type="password" id='password' className='form-control w-75 mt-2' name='password' />
            <label htmlFor="rePassword">rePassword:</label>
            <input onChange={change.handleChange} type="password" id='rePassword' className='form-control w-75 mt-2' name='rePassword' />
            <button type='submit' className='btn bg-main text-white mt-3'  >Update</button>
            {message?<p className='text-main text-center fw-bold pt-2'>Password Changed Successfully</p>:""}
        </form>
      </div>
    </>
  )
}

