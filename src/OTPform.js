import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'                                                       

function OTPform() {
    const [otp, setOtp] = useState("")
    const [error, setError] = useState("") 
    const navigate = useNavigate()

    const handlechange=(e)=>{
      setOtp(e.target.value)
      setError("")
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      if(otp.length<4){
        setError("Enter 4 digit OTP")
      }
      else{
        alert("OTP Verified")
        setOtp("")
        navigate("/home")
      
      }
    }
  return (
  <>
  <h1>Enter OTP</h1>
  <form onSubmit={handleSubmit}>
     <input type='text'
      value={otp} placeholder='Enter OTP'
      onChange={handlechange} 
      maxLength={4}>
     </input>
     <button type="submit">Submit</button>

  </form>
  <p>{error}</p>
  </>
  )
}

export default OTPform
