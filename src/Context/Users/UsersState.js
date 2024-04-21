import React, { useState } from 'react'
import AllContext from '../allContext'

const UsersState = (props) => {
    const host = "http://localhost:5000"
    const initialUser = []
    const [users, setUsers] = useState(initialUser)

    const Users = [
        {
            srNo: 1,
            username: 'JohnDoe123',
            email: 'john.doe@example.com',
            joinDate: '2022-01-01T12:34:56.789Z',
        },
        {
            srNo: 2,
            username: 'AliceSmith',
            email: 'alice.smith@example.com',
            joinDate: '2022-02-05T08:15:30.123Z',
        },
        {
            srNo: 3,
            username: 'BobJohnson',
            email: 'bob.johnson@example.com',
            joinDate: '2022-03-10T16:45:00.456Z',
        },
        {
            srNo: 4,
            username: 'EmilyDavis',
            email: 'emily.davis@example.com',
            joinDate: '2022-04-15T09:27:14.567Z',
            feedback: 'Great user experience!',
        },
        {
            srNo: 5,
            username: 'DavidBrown',
            email: 'david.brown@example.com',
            joinDate: '2022-05-20T18:00:00.000Z',
        },
        {
            srNo: 6,
            username: 'GraceWhite',
            email: 'grace.white@example.com',
            joinDate: '2022-06-25T11:11:11.111Z',
        },
        {
            srNo: 7,
            username: 'HenryMiller',
            email: 'henry.miller@example.com',
            joinDate: '2022-07-30T14:30:45.678Z',
            feedback: 'Excellent service!',
        },
        {
            srNo: 8,
            username: 'IsabelClark',
            email: 'isabel.clark@example.com',
            joinDate: '2022-08-01T20:20:20.202Z',
        },
        {
            srNo: 9,
            username: 'FrankTaylor',
            email: 'frank.taylor@example.com',
            joinDate: '2022-09-05T06:45:30.987Z',
        },
        {
            srNo: 10,
            username: 'OliviaJones',
            email: 'olivia.jones@example.com',
            joinDate: '2022-10-10T15:15:15.555Z',
        },
        {
            srNo: 11,
            username: 'SamuelWilliams',
            email: 'samuel.williams@example.com',
            joinDate: '2022-11-15T09:09:09.999Z',
            feedback: 'Fast delivery!',
        },
        {
            srNo: 12,
            username: 'SophieMoore',
            email: 'sophie.moore@example.com',
            joinDate: '2022-12-20T12:12:12.121Z',
        },
        {
            srNo: 13,
            username: 'LucasAnderson',
            email: 'lucas.anderson@example.com',
            joinDate: '2023-01-01T00:00:00.000Z',
        },
        {
            srNo: 14,
            username: 'AvaHill',
            email: 'ava.hill@example.com',
            joinDate: '2023-02-05T05:05:05.555Z',
            feedback: 'Highly recommended!',
        },
        {
            srNo: 15,
            username: 'MichaelCook',
            email: 'michael.cook@example.com',
            joinDate: '2023-03-10T10:10:10.101Z',
        },
        {
            srNo: 16,
            username: 'EmmaScott',
            email: 'emma.scott@example.com',
            joinDate: '2023-04-15T15:15:15.151Z',
        },
        {
            srNo: 17,
            username: 'LiamBaker',
            email: 'liam.baker@example.com',
            joinDate: '2023-05-20T20:20:20.202Z',
            feedback: 'Fantastic product!',
        },
        {
            srNo: 18,
            username: 'CharlotteWard',
            email: 'charlotte.ward@example.com',
            joinDate: '2023-06-25T13:13:13.131Z',
        },
        {
            srNo: 19,
            username: 'BenjaminEvans',
            email: 'benjamin.evans@example.com',
            joinDate: '2023-07-30T22:22:22.222Z',
        },
        {
            srNo: 20,
            username: 'MiaRogers',
            email: 'mia.rogers@example.com',
            joinDate: '2023-08-01T19:19:19.191Z',
        },
    ];

    const getusers = async () => {
        // setUsers(Users)
        const response = await fetch(`${host}/users/getuser`, {
            method: "GET",
            headers:{
              "Content-Type":"application/json"
            }
        })
        console.log(response)
        const jsondata = await response.json()
        console.log(jsondata)
        // setUsers(jsondata)
        setUsers(Users)
    }

    return (
        <AllContext.Provider value={{ users, getusers }}>
            {props.children}
        </AllContext.Provider>
    )
}

export default UsersState
