import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Adminsearchbar from '../Adminsearchbar/Adminsearchbar';
import Table from "../Table/Table"

const Crops = (props) => {
  const location = useLocation();
  console.log(location)
  console.log(location.state)
  const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem("token")) {
            // getnotes()
            navigate("/admin/crops")
        }
        else {
            navigate("/login")
        }
        // eslint-disable-next-line 
    }, [])
  // console.log(location.state.data)

  const Crops = [
    { srNo: 1, cropName: 'Wheat', bestPlaceToGrow: 'Field', growthDuration: '3 months' },
    { srNo: 2, cropName: 'Rice', bestPlaceToGrow: 'Paddy field', growthDuration: '4 months' },
    { srNo: 3, cropName: 'Corn', bestPlaceToGrow: 'Field', growthDuration: '3 months' },
    { srNo: 4, cropName: 'Tomato', bestPlaceToGrow: 'Greenhouse', growthDuration: '2 months' },
    { srNo: 5, cropName: 'Potato', bestPlaceToGrow: 'Field', growthDuration: '4 months' },
    { srNo: 6, cropName: 'Carrot', bestPlaceToGrow: 'Garden', growthDuration: '2 months' },
    { srNo: 7, cropName: 'Lettuce', bestPlaceToGrow: 'Greenhouse', growthDuration: '1 month' },
    { srNo: 8, cropName: 'Apple', bestPlaceToGrow: 'Orchard', growthDuration: '6 months' },
    { srNo: 9, cropName: 'Orange', bestPlaceToGrow: 'Orchard', growthDuration: '5 months' },
    { srNo: 10, cropName: 'Grapes', bestPlaceToGrow: 'Vineyard', growthDuration: '4 months' },
  ];

  const [searchResults, setSearchResults] = useState([]);


  return (
    <div className='cropspage'>
      <div className="sidebar">
        <img src="https://logodix.com/logo/649370.png" alt="admin" className="adminimg" />
        <Link className='navitem' to="/admin/users"><h3>User</h3></Link>
        <Link className='navitem' to="/admin/crops"><h3>Crops</h3></Link>
        <Link className='navitem' to="/admin/userfeedback"><h3>Feedback</h3></Link>
        <Link className='navitem' to="/admin/profile"><h3>Profile</h3></Link>
      </div>
      
      <div className=" tableview crops">
      <Adminsearchbar datas={Crops} setSearchResults={setSearchResults} />
      {searchResults.length > 0 ? (
        <Table datas={searchResults} />
      ) : (
        <Table datas={Crops} />
      )}
      </div>
    </div>
  )
}

export default Crops
