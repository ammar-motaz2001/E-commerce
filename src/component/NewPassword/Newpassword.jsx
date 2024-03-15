import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { string } from 'yup'

export default function Newpassword() {
    let routing=        useNavigate()
          async  function rePassword(values){
                let {data}= await axios.put("https://ecommerce.routemisr.com/api/v1/auth/resetPassword",values)
                console.log(data)

                if(data.token){
                    routing("../Signin")
                }
            }

  let resetPass=  useFormik({
        initialValues:{
            email:"",
            newPassword:""


        },

        onSubmit:(values)=>{
            rePassword(values)

        }
    })
  return (
    <>
    <div className="container my-5 bg-main-light p-4 mt-5">

        <h1>New Password</h1>

        <form onSubmit={resetPass.handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input onChange={resetPass.handleChange} type="email" name="email" id="email" className='form-control' />
            <label htmlFor="newPassword">newPassword:</label>
            <input onChange={resetPass.handleChange} type="password" name="newPassword" id="newPassword" className='form-control' />
            <button type='submit' className='btn bg-main text-white my-3'>Submit</button>
        </form>
    </div>
    </>
  )
}
