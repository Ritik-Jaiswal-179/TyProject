import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Login = (props) => {
    let navigate = useNavigate()
    const [credentials, setCredentials] = useState({ email: "", password: "" })

    const handlesummit = async (e) => {
        e.preventDefault()
        const response = await axios.post("http://127.0.0.1:5000/user/login", {
                email: credentials.email,
                password: credentials.password
            });
            const json = response.data;

        if (json.success) {
            localStorage.setItem("token", json.token)
            props.showalert("Logged in successfully ", "success")
            navigate("/")
        }
        else {
            // alert("Invalid creentials")
            setCredentials({ email: "", password: "" })
            props.showalert("Invalid credentials", "danger")
        }
    }

    const onchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className='container mt-5' style={{width:"400px", border:"2px solid rgb(173, 170, 170)", padding:"20px", borderRadius:"20px", marginTop:"50px"}}>


            <h2 style={{margin:"10px", marginBottom:"40px"}}>Login to use Farmfrnd</h2>

            <form  onSubmit={handlesummit} className='container' >
                <div className="mb-3">

                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email"  name="email" value={credentials.email} onChange={onchange}  placeholder="Enter email"  aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onchange} placeholder="Password" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login
