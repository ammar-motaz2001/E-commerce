import React from 'react'
import amazom from '../../assets/images/download.png'
import paypal from '../../assets/images/paypal-icon-2048x547-tu0aql1a.png'
import masterCard from '../../assets/images/png-transparent-logo-mastercard-product-font-mastercard-text-orange-logo.png'
import american from '../../assets/images/image_processing20210616-28548-aa9lot.png'
import googlePlay from '../../assets/images/images.png'
import appStore from '../../assets/images/images (1).png'

export default function Footer() {
  return (
    <>
    <div className="container-fluid bg-main-light">
        <h3 className='pt-3'>Get The FreshCart app</h3>
        <p>We will Send you a link ,open it to dowload the app</p>
        <div className="div d-flex justify-content-between ms-3 mb-2">
            <div className='w-100 me-4'>
                <input type="email" className='form-control w-100' placeholder='E-mail:' />
            </div>
            <div className='w-50'>
                <button className='bg-main text-white btn w-50'>Share Link</button>
            </div>
        </div>

        <div className='d-flex justify-content-between border-top border-bottom '>
            <div className=''>
                <h5 className='fw-bold' >Payment Partenrs <span className='text-main'><img src={paypal} width={30} alt="" /></span> <span className='text-main pe-3'><img src={amazom} width={30} alt="" /></span> <span className='text-main pe-3'><img src={masterCard} width={10} alt="" /></span> <span><img src={american} width={30} alt="" /></span> </h5>
                
            </div>
            <div className=''>
               <h5 className='fw-bold'>Get deliveries with FreshCart <span><img src={googlePlay} width={30} img alt="" /></span> <span><img src={appStore} width={30} alt="" /></span> </h5> 
            </div>
        </div>
    </div>
    </>
  )
}
