import React, { useEffect, useState } from "react";
import "./Profile.css"
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";


const Profile = (props) => {
  const navigate = useNavigate()

  const [userData, setUserData] = useState({
    id: '',
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const decoded = jwtDecode(localStorage.getItem("token"))

      setUserData({
        id: decoded.payload.id,
        name: decoded.payload.name,
        email: decoded.payload.email,
        password: decoded.payload.password
      })

      navigate("/profile")
    }
    else {
      navigate("/login")
    }
    // eslint-disable-next-line 
  }, [])



  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post("http://127.0.0.1:5000/user/profileupdate", {
      id: userData.id,
      name: userData.name,
      email: userData.email,
      password: userData.password
    });
    const json = response.data;

    if (json.success) {
      props.showalert("Profile Updated ", "success")

      localStorage.removeItem("token")
      const response2 = await axios.post("http://127.0.0.1:5000/user/login", {
        email: userData.email,
        password: userData.password
      });
      const json = response2.data;

      if (json.success) {
        localStorage.setItem("token", json.token)
        props.showalert("Logged in successfully ", "success")
        navigate("/")
      }
      else {
        // alert("Invalid creentials")
        // setCredentials({ email: "", password: "" })
        props.showalert("Invalid credentials", "danger")
      }
      navigate("/profile")
    }
    else {
      props.showalert("Updation Failed", "danger")
    }

  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='pform'>
        <label className='plabel' htmlFor="name">Name:</label>
        <input className='pinput' type="text" id="name" name="name" value={userData.name} onChange={handleChange} />
        <br />

        <label className='plabel' htmlFor="email">Email:</label>
        <input className='pinput' type="email" id="email" name="email" value={userData.email} onChange={handleChange} />
        <br />

        <label className='plabel' htmlFor="password">Password:</label>
        <input className='pinput' type="password" id="password" name="password" value={userData.password} onChange={handleChange} />
        <br />

        <button className='pbutton' type="submit">Update Profile</button>

      </form>
    </div>
  )
}

export default Profile

