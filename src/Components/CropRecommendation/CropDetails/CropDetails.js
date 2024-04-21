import React, { useEffect } from 'react'
import { useLocation, useNavigate } from "react-router-dom"
import "./CropDetails.css"

function CropDetails() {
  
  const navigate = useNavigate()
  const location = useLocation()
  // console.log(location.state?.cropdata)
  const cropdata = location.state?.cropdata
  console.log(cropdata)

  useEffect(() => {
    if (localStorage.getItem("token")) {
        // getnotes()
        navigate("/cropdetail")
    }
    else {
        navigate("/login")
    }
    // eslint-disable-next-line 
}, [])

  return (
    <div>
      <img src={cropdata.cropImgUrl} alt="cropdata.cropName" />
      crop details
      
      
    </div>

  )
}

export default CropDetails
