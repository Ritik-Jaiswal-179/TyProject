// import React, { useState } from 'react';

// const Adminsearchbar = ({ datas }) => {

//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState(datas);

//   const handleSearch = (e) => {
//     const term = e.target.value.toLowerCase();
//     setSearchTerm(term);

//     const matchingUsers = datas.filter((data) =>
//       data.username.toLowerCase().includes(term)
//     );

//     setSearchResults(matchingUsers);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={handleSearch}
//       />

//       <table id="zctb" class="display table table-striped table-bordered table-hover" cellspacing="0" width="100%">
//         <thead>
//           <tr>
//             <th>Sr no.</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Registration Date</th>
//             <th>Feedback</th>
//           </tr>
//         </thead>
//         <tbody>
//         {searchResults.map((data, index) => (
//           <tr>
//             <td key={index}>{data.srNo}</td>
//             <td key={index}>{data.username}</td>
//             <td key={index}>{data.email}</td>
//             <td key={index}>{data.joinDate}</td>
//             <td key={index}>{data.feedback?data.feedback:""}</td>
//           </tr>
//         ))}
//         </tbody>
//       </table>
//       <ul>
//         {/* {searchResults.map((data, index) => (
//           <li key={index}>{data}</li>
//         ))} */}
//       </ul>
//     </div>
//   )
// }

// export default Adminsearchbar


import React from 'react';

// const UserSearch = ({ users }) => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [searchResults, setSearchResults] = useState(users);

//     const handleSearch = (e) => {
//         const term = e.target.value.toLowerCase();
//         setSearchTerm(term);

//         const matchingUsers = users.filter((user) =>
//             user.username.toLowerCase().includes(term)
//         );

//         setSearchResults(matchingUsers);
//     };

//     const generateTableHeaders = () => {
//         const headers = Object.keys(users[0]);
//         return (
//             <tr>
//                 {headers.map((header) => (
//                     <th key={header}>{header.charAt(0).toUpperCase() + header.slice(1)}</th>
//                 ))}
//             </tr>
//         );
//     };

//     const generateTableRows = () => {
//         return users.map((user, index) => (
//             <tr key={index}>
//                 {/* {setSearchResults(Object.values(user))} */}
//                 {Object.values(user).map((value, index) => (
//                     <td key={index}>{value}</td>
//                 ))}
//             </tr>
//         ));
//     };
//     return (
//         <div>
//             <input
//                 type="text"
//                 placeholder="Search users..."
//                 value={searchTerm}
//                 onChange={handleSearch}
//             />
//             {/* <ul>
//         {searchResults.map((user, index) => (
//           <li key={index}>{user}</li>
//         ))}
//       </ul> */}


//             <table>
//                 <thead>{generateTableHeaders()}</thead>
//                 <tbody>{generateTableRows()}</tbody>
//             </table>
//         </div>
//     );
// };

const Adminsearchbar = ({ datas, setSearchResults }) => {
  const determineSearchField = () => {
    if (datas.length > 0) {
      const firstData = datas[0];
      const searchableFields = Object.keys(firstData);
      // Assuming the second field is the one to search on
      return searchableFields.length > 1 ? searchableFields[1] : searchableFields[0];
    }
    return '';
  };

  const searchField = determineSearchField();
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    const matchingUsers = datas.filter((data) =>
      data[searchField].toLowerCase().includes(term)


    );
    //   Object.keys(matchingUsers).

    setSearchResults(matchingUsers);
  };

  return (

    <div className='adminsearchpage'>

      <div className='searchtext'>Search here: </div>
      <div className="searchinput">
        <input
          type="text"
          placeholder="Search users..."
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};
export default Adminsearchbar;