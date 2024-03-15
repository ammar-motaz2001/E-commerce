import axios from 'axios';
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { storeContext } from '../storeContext/context';
export default function Address() {
    let [errorMessage,setError]=useState('')
    let [loading,setLoading]=useState(true)
    let navigate=useNavigate()
    let {id}=   useParams()

let {checkOutSession}=  useContext(storeContext)
    async function getDataofUser(data){
      
    try {
        let dataofdata=  await checkOutSession(id,data)
        console.log(dataofdata)
        setLoading(false)
        if(dataofdata.status="success"){
            window.location.href=dataofdata.session.url
        }
    } catch (error) {
        console.log(error)
    }
        
    }


    let address=useFormik({
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
        <div className="container">
        <div className="login my-5 mx-4 w-75">
            <h2>address Now:</h2>
            <form onSubmit={address.handleSubmit}>

                <label htmlFor="details">Details:</label>
                <textarea onChange={address.handleChange} className='form-control' type="text" id='details' name='details' />
                <label htmlFor="phone">Phone:</label>
                <input onChange={address.handleChange} className='form-control' type="text" id='phone' name='phone' />
                <label htmlFor="city">City:</label>
                <input onChange={address.handleChange} className='form-control' type="text" id='city' name='city' />
                <button  type='submit' className='btn btn-success my-3'>
                    {loading?"Pay":<i className='fa fa-spin fa-spinner'></i>}
                </button>
               {errorMessage?<p className=" alert alert-danger text-center fs-1 ">{errorMessage}</p>:''}
            </form>
        </div> 
        </div>
        
    </>
  )
}
