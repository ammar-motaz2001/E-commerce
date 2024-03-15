import React from 'react'
import ErrorImg from '../../assets/images/error.svg'
export default function PageNotFound() {
  return (
    <>
      <div className='text-center my-3'>
        <img src={ErrorImg} alt="" />
        <h3>Page Not Found <i className="fa-regular fa-face-frown"></i></h3>
      </div>
    </>
  )
}
