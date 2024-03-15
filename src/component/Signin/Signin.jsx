import axios from 'axios';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
export default function Signin() {
    let [errorMessage,setError]=useState('')
    let navigate=useNavigate()
    function getDataofUser(data){
        axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin",data).then(({data})=>{
            console.log(data)
            if(data.message="success"){
                navigate('../Home')
            }
        }).catch(err=>{
                setError(err.response.data.message)
                console.log(err.response.data.message)
            })
        
    }


    let login=useFormik({
        initialValues:{
            email:'',
            password:''
        },

        onSubmit:(data)=>{
            console.log(data)
            getDataofUser(data)
        },
        
    })
  return (
    <>
        <div className="container bg-main-light p-3 mt-5 ">
        <div className="login my-5 mx-4 w-75 ">
            <h2 className='text-center'>Login Now:</h2>
            <form onSubmit={login.handleSubmit}>

                <label htmlFor="Email">Email:</label>
                <input onChange={login.handleChange} className='form-control' type="email" id='Email' name='email' />
                <label htmlFor="Password">Password:</label>
                <input onChange={login.handleChange} className='form-control' type="password" id='Password' name='password' />
               <div className='d-flex justify-content-between'>
                <div>
                <button  type='submit' className='btn btn-success my-3'>Sign in</button>

               {errorMessage?<p className=" alert fw-bold  text-danger">Email or Password is invalid</p>:''}
               <br />
                {/* <Link className='fw-bold pt-4' to={'/changeMyPassword'}>Update Password?</Link> */}

                </div>
                <div className='my-3'>
                <Link className='fw-bold ms-2' to={'/resetPassword'}>Forget Password?</Link>
                    <br />
                <br />
                <br />

                </div>
               </div>

            </form>
        </div> 
        </div>
        
    </>
  )
}
