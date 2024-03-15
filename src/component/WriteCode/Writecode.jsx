import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Writecode() {
   let goTo=     useNavigate()
 async   function writeCode(value){

    let {data}=await axios.post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",value)
    console.log(data)
    if(data.status="Success"){
        goTo("../NewPassword")
    }
    }

let reset=useFormik({
initialValues:{
resetCode:""
},
onSubmit:(value)=>{
    writeCode(value)
}
})
    return (
        <>
           <div className="container my-5 bg-main-light p-4 mt-5">
            <h1>Reset Code</h1>
            <form onSubmit={reset.handleSubmit}>
                <label htmlFor="resetCode" className='ps-1 pb-1'>resetCode:</label>
                <input onChange={reset.handleChange} type="text" id='resetCode' placeholder='Enter Your resetCode:' name='resetCode' className='form-control' />
                <button type='submit' className='btn bg-main text-white my-3'>Reset</button>
            </form>
        </div> 
        </>
      )
}
