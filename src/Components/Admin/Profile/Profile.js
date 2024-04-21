import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Profile = () => {
  const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem("token")) {
            // getnotes()
            navigate("/admin/profile")
        }
        else {
            navigate("/login")
        }
        // eslint-disable-next-line 
    }, [])
  return (
    <div>
        <div className="sidebar">
                    <img src="https://logodix.com/logo/649370.png" alt="admin" className="adminimg" />
                    <Link className='navitem' to="/admin/users"><h3>User</h3></Link>
                    <Link className='navitem' to="/admin/crops"><h3>Crops</h3></Link>
                    <Link className='navitem' to="/admin/userfeedback"><h3>Feedback</h3></Link>
                    <Link className='navitem' to="/admin/profile"><h3>Profile</h3></Link>
                </div>
      Admin profile
    </div>
  )
}

export default Profile
