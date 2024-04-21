import React, { useEffect } from 'react'
import "./Home.css"
// import MyComponent from '../Mycomponent'
import { useNavigate } from 'react-router-dom'
function Home() {
  
  const navigate = useNavigate()
  // console.log(localStorage.getItem("token"))
  useEffect(() => {
    if (localStorage.getItem("token")) {
        // getnotes()
        navigate("/")
    }
    else {
        navigate("/login")
    }
    // eslint-disable-next-line 
}, [])
  return (
    <div>
      {/* Hello ritik from Home */}
      <div className="container cou-height">
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://tse2.mm.bing.net/th?id=OIP.MQufTi3m0MXBLFus6VMoSwHaE8&pid=Api&P=0&h=180" className="d-block w-100" alt="first " />
          </div>
          <div className="carousel-item">
            <img src="https://tse4.mm.bing.net/th?id=OIP.Qot1_3cdtiuApPdojjMV3AHaEX&pid=Api&P=0&h=180" className="d-block w-100" alt="second " />
          </div>
          <div className="carousel-item">
            <img src="https://tse4.mm.bing.net/th?id=OIP.0bfLYGuPML-aLwOhK_BkcQHaE8&pid=Api&P=0&h=180" className="d-block w-100" alt="third " />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
     
    
    {/* <MyComponent /> */}
    </div>
  )
}

export default Home
