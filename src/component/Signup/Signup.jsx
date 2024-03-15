import axios from 'axios';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
export default function Signup() {
    let [errorMessage,setError]=useState('')
    let [loading,setLoading]=useState(true)
    let navigate=useNavigate()
    function getDataofUser(data){
        setLoading(false)
        axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup",data).then(({data})=>{
            console.log(data)
            if(data.message="success"){
                navigate('../Signin')
                localStorage.setItem('token',data.token)
            }
        }).catch(err=>{
                setError(err.response.data.message)
                console.log(err.response.data.message)
                setLoading(true)
            })
        
    }

   function validationSchema(){

    let errors=Yup.object({
        name:Yup.string().min(2).max(10).required(),
        email:Yup.string().email().required(),
        password:Yup.string().min(6).max(20).required("RePassword and Password Should Match"),
        rePassword:Yup.string().oneOf([Yup.ref("password")]).required()
    })

    return errors

   }

    let register=useFormik({
        initialValues:{
            name:'',
            email:'',
            password:'',
            rePassword:''
        },

       validationSchema,
       

        onSubmit:(data)=>{
            console.log(data)
            getDataofUser(data)
        },
        
    })
  return (
    <>
        <div className="container bg-main-light p-3 mt-4">
        <div className="Register my-5 mx-4 w-75">
            <h2>Register Now:</h2>
            <form onSubmit={register.handleSubmit}>

                <label htmlFor="Name">Name:</label>
                <input onChange={register.handleChange}  className='form-control' type="text" id='Name' name='name' onBlur={register.handleBlur} />
                {register.errors.name&&register.touched.name?<div className='alert alert-danger'>{register.errors.name}</div>:''}
                <label htmlFor="Email">Email:</label>
                <input onChange={register.handleChange} className='form-control' type="email" id='Email' name='email' onBlur={register.handleBlur} />
                {register.errors.email && register.touched.email?<div className='alert alert-danger'>{register.errors.email}</div>:''}

                <label htmlFor="Password">Password:</label>
                <input onChange={register.handleChange} className='form-control' type="password" id='Password' name='password' onBlur={register.handleBlur} />
                <label htmlFor="RePassword">RePassword:</label>
                <input onChange={register.handleChange} className='form-control' type="password" id='RePassword' name='rePassword' onBlur={register.handleBlur} />
                {register.errors.password&&register.touched.password?<div className='alert alert-danger'>{register.errors.password}</div>:''}
                <button  type='submit' disabled={!(register.dirty&&register.isValid)} className='btn btn-success my-3'>
                    {loading?"Sign Up":<i className='fa fa-spinner fa-spin'></i>}
                </button>
               {errorMessage?<div className="alert alert-danger">{errorMessage}</div>:''}
            </form>
          
        </div> 
        </div>
        
    </>
  )
}
