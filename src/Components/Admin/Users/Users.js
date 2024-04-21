import React, { useContext, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Adminsearchbar from '../Adminsearchbar/Adminsearchbar'
import Table from "../Table/Table"
import allContext from '../../../Context/allContext'

const Users = () => {
  const ucontext = useContext(allContext)
  const { users, getusers } = ucontext
  const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem("token")) {
            // getnotes()
            navigate("/admin/users")
        }
        else {
            navigate("/login")
        }
        // eslint-disable-next-line 
    }, [])
  useEffect(() => {
    getusers()
    // eslint-disable-next-line 
  }, [])
  console.log(users)
  // const datas= ['Alice', 'Bob', 'Charlie', 'David',"Ritik", "Ravi", "Bindesh", "Rachana", "Aman", "Shiva", "Pushpa", "Deepnaraan", "Deepak", "Depesh", "Ritesh", "Shivam"]; 

  // const datas = [
  //   {
  //     srNo: 1,
  //     username: 'JohnDoe123',
  //     email: 'john.doe@example.com',
  //     joinDate: '2022-01-01T12:34:56.789Z',
  //   },
  //   {
  //     srNo: 2,
  //     username: 'AliceSmith',
  //     email: 'alice.smith@example.com',
  //     joinDate: '2022-02-05T08:15:30.123Z',
  //   },
  //   {
  //     srNo: 3,
  //     username: 'BobJohnson',
  //     email: 'bob.johnson@example.com',
  //     joinDate: '2022-03-10T16:45:00.456Z',
  //   },
  //   {
  //     srNo: 4,
  //     username: 'EmilyDavis',
  //     email: 'emily.davis@example.com',
  //     joinDate: '2022-04-15T09:27:14.567Z',
  //     feedback: 'Great user experience!',
  //   },
  //   {
  //     srNo: 5,
  //     username: 'DavidBrown',
  //     email: 'david.brown@example.com',
  //     joinDate: '2022-05-20T18:00:00.000Z',
  //   },
  //   {
  //     srNo: 6,
  //     username: 'GraceWhite',
  //     email: 'grace.white@example.com',
  //     joinDate: '2022-06-25T11:11:11.111Z',
  //   },
  //   {
  //     srNo: 7,
  //     username: 'HenryMiller',
  //     email: 'henry.miller@example.com',
  //     joinDate: '2022-07-30T14:30:45.678Z',
  //     feedback: 'Excellent service!',
  //   },
  //   {
  //     srNo: 8,
  //     username: 'IsabelClark',
  //     email: 'isabel.clark@example.com',
  //     joinDate: '2022-08-01T20:20:20.202Z',
  //   },
  //   {
  //     srNo: 9,
  //     username: 'FrankTaylor',
  //     email: 'frank.taylor@example.com',
  //     joinDate: '2022-09-05T06:45:30.987Z',
  //   },
  //   {
  //     srNo: 10,
  //     username: 'OliviaJones',
  //     email: 'olivia.jones@example.com',
  //     joinDate: '2022-10-10T15:15:15.555Z',
  //   },
  //   {
  //     srNo: 11,
  //     username: 'SamuelWilliams',
  //     email: 'samuel.williams@example.com',
  //     joinDate: '2022-11-15T09:09:09.999Z',
  //     feedback: 'Fast delivery!',
  //   },
  //   {
  //     srNo: 12,
  //     username: 'SophieMoore',
  //     email: 'sophie.moore@example.com',
  //     joinDate: '2022-12-20T12:12:12.121Z',
  //   },
  //   {
  //     srNo: 13,
  //     username: 'LucasAnderson',
  //     email: 'lucas.anderson@example.com',
  //     joinDate: '2023-01-01T00:00:00.000Z',
  //   },
  //   {
  //     srNo: 14,
  //     username: 'AvaHill',
  //     email: 'ava.hill@example.com',
  //     joinDate: '2023-02-05T05:05:05.555Z',
  //     feedback: 'Highly recommended!',
  //   },
  //   {
  //     srNo: 15,
  //     username: 'MichaelCook',
  //     email: 'michael.cook@example.com',
  //     joinDate: '2023-03-10T10:10:10.101Z',
  //   },
  //   {
  //     srNo: 16,
  //     username: 'EmmaScott',
  //     email: 'emma.scott@example.com',
  //     joinDate: '2023-04-15T15:15:15.151Z',
  //   },
  //   {
  //     srNo: 17,
  //     username: 'LiamBaker',
  //     email: 'liam.baker@example.com',
  //     joinDate: '2023-05-20T20:20:20.202Z',
  //     feedback: 'Fantastic product!',
  //   },
  //   {
  //     srNo: 18,
  //     username: 'CharlotteWard',
  //     email: 'charlotte.ward@example.com',
  //     joinDate: '2023-06-25T13:13:13.131Z',
  //   },
  //   {
  //     srNo: 19,
  //     username: 'BenjaminEvans',
  //     email: 'benjamin.evans@example.com',
  //     joinDate: '2023-07-30T22:22:22.222Z',
  //   },
  //   {
  //     srNo: 20,
  //     username: 'MiaRogers',
  //     email: 'mia.rogers@example.com',
  //     joinDate: '2023-08-01T19:19:19.191Z',
  //   },
  // ];

  // const Users = [
  //   {
  //     srNo: 1,
  //     username: 'EmilyDavis',
  //     email: 'emily.davis@example.com',
  //     joinDate: '2022-04-15T09:27:14.567Z',
  //     feedback: 'Great user experience!',
  //   },
  //   {
  //     srNo: 2,
  //     username: 'JohnDoe123',
  //     email: 'john.doe@example.com',
  //     joinDate: '2022-01-01T12:34:56.789Z',
  //   },
  //   {
  //     srNo: 3,
  //     username: 'AliceSmith',
  //     email: 'alice.smith@example.com',
  //     joinDate: '2022-02-05T08:15:30.123Z',
  //   },
  //   {
  //     srNo: 4,
  //     username: 'BobJohnson',
  //     email: 'bob.johnson@example.com',
  //     joinDate: '2022-03-10T16:45:00.456Z',
  //   },
  //   {
  //     srNo: 5,
  //     username: 'DavidBrown',
  //     email: 'david.brown@example.com',
  //     joinDate: '2022-05-20T18:00:00.000Z',
  //   },
  //   {
  //     srNo: 6,
  //     username: 'GraceWhite',
  //     email: 'grace.white@example.com',
  //     joinDate: '2022-06-25T11:11:11.111Z',
  //   },
  //   {
  //     srNo: 7,
  //     username: 'HenryMiller',
  //     email: 'henry.miller@example.com',
  //     joinDate: '2022-07-30T14:30:45.678Z',
  //     feedback: 'Excellent service!',
  //   },
  //   {
  //     srNo: 8,
  //     username: 'IsabelClark',
  //     email: 'isabel.clark@example.com',
  //     joinDate: '2022-08-01T20:20:20.202Z',
  //   },
  //   {
  //     srNo: 9,
  //     username: 'FrankTaylor',
  //     email: 'frank.taylor@example.com',
  //     joinDate: '2022-09-05T06:45:30.987Z',
  //   },
  //   {
  //     srNo: 10,
  //     username: 'OliviaJones',
  //     email: 'olivia.jones@example.com',
  //     joinDate: '2022-10-10T15:15:15.555Z',
  //   },
  //   {
  //     srNo: 11,
  //     username: 'SamuelWilliams',
  //     email: 'samuel.williams@example.com',
  //     joinDate: '2022-11-15T09:09:09.999Z',
  //     feedback: 'Fast delivery!',
  //   },
  //   {
  //     srNo: 12,
  //     username: 'SophieMoore',
  //     email: 'sophie.moore@example.com',
  //     joinDate: '2022-12-20T12:12:12.121Z',
  //   },
  //   {
  //     srNo: 13,
  //     username: 'LucasAnderson',
  //     email: 'lucas.anderson@example.com',
  //     joinDate: '2023-01-01T00:00:00.000Z',
  //   },
  //   {
  //     srNo: 14,
  //     username: 'AvaHill',
  //     email: 'ava.hill@example.com',
  //     joinDate: '2023-02-05T05:05:05.555Z',
  //     feedback: 'Highly recommended!',
  //   },
  //   {
  //     srNo: 15,
  //     username: 'MichaelCook',
  //     email: 'michael.cook@example.com',
  //     joinDate: '2023-03-10T10:10:10.101Z',
  //   },
  //   {
  //     srNo: 16,
  //     username: 'EmmaScott',
  //     email: 'emma.scott@example.com',
  //     joinDate: '2023-04-15T15:15:15.151Z',
  //   },
  //   {
  //     srNo: 17,
  //     username: 'LiamBaker',
  //     email: 'liam.baker@example.com',
  //     joinDate: '2023-05-20T20:20:20.202Z',
  //     feedback: 'Fantastic product!',
  //   },
  //   {
  //     srNo: 18,
  //     username: 'CharlotteWard',
  //     email: 'charlotte.ward@example.com',
  //     joinDate: '2023-06-25T13:13:13.131Z',
  //   },
  //   {
  //     srNo: 19,
  //     username: 'BenjaminEvans',
  //     email: 'benjamin.evans@example.com',
  //     joinDate: '2023-07-30T22:22:22.222Z',
  //   },
  //   {
  //     srNo: 20,
  //     username: 'MiaRogers',
  //     email: 'mia.rogers@example.com',
  //     joinDate: '2023-08-01T19:19:19.191Z',
  //   },
  // ];

  const [searchResults, setSearchResults] = useState([]);
  return (
    <div className='userspage'>
      <div className="sidebar">
        <img src="https://logodix.com/logo/649370.png" alt="admin" className="adminimg" />
        <Link className='navitem' to="/admin/users"><h3>User</h3></Link>
        <Link className='navitem' to="/admin/crops"><h3>Crops</h3></Link>
        <Link className='navitem' to="/admin/userfeedback"><h3>Feedback</h3></Link>
        <Link className='navitem' to="/admin/profile"><h3>Profile</h3></Link>
      </div>


      <div className="users">
        {/* <Adminsearchbar datas={datas} /> */}
        <Adminsearchbar datas={users} setSearchResults={setSearchResults} />
        {searchResults.length > 0 ? (
          <Table datas={searchResults} />
        ) : (
          <Table datas={users} />
        )}

        {/* <table id="zctb" class="display table table-striped table-bordered table-hover" cellspacing="0" width="100%">
                    <thead>
                        <tr>
                            <th>Sno.</th>
                            <th>Reg no</th>
                            <th>Student Name</th>
                            <th>Specialization</th>
                            <th>Registration Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                        </tr>
                        <tr>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                        </tr>
                        <tr>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                        </tr>
                        <tr>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                        </tr>
                        <tr>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                        </tr>
                    </tbody>
                </table> */}
      </div>
    </div>
  )
}

export default Users
