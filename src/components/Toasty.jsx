import React from 'react'
import { ToastContainer } from 'react-toastify';

function Toasty() {
  return (
    <div>
        <ToastContainer autoClose={3000} theme="colored" newestOnTop={true}/>
    </div>
  )
}

export default Toasty