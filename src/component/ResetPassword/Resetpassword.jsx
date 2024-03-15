import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Resetpassword() {
 let navigate= useNavigate()
 async   function writeCode(value){
        let {data}= await axios.post("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",value)
        console.log(data)

        if(data.statusMsg="success"){
                navigate("../WriteCode")
        }

    }

    let reset=useFormik({
        initialValues:{
        email:""
        },
        onSubmit:(value)=>{
            writeCode(value)
        }
        })
    return (
        <>
           <div className="container my-5 bg-main-light p-4 mt-4">
            <h1>Reset Password</h1>
            <form onSubmit={reset.handleSubmit}>
                <label htmlFor="email" className='ps-1 pb-1'>email:</label>
                <input onChange={reset.handleChange} type="text" id='email' placeholder='Enter Your email:' name='email' className='form-control' />
                <button type='submit' className='btn bg-main text-white my-3'>Send Code</button>
            </form>
        </div> 
        </>
      )
}
