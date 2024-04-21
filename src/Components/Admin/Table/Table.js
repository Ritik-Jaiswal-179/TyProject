import React from  'react';

const Table = ({ datas }) => {
  // Function to generate table headers dynamically
  const generateTableHeaders = () => {
    const headers = Object.keys(datas[0]);
    return (
      <tr>
        {headers.map((header) => (
          <th key={header}>{header}</th>
        ))}
      </tr>
    );
  };

  // Function to generate table rows dynamically
  const generateTableRows = () => {
    return datas.map((data, index) => (
      <tr key={index}>
        {Object.values(data).map((value, i) => (
          <td key={i}>{value}</td>
        ))}
      </tr>
    ));
  };

  return (
    <table className='tableview'>
      <thead>{generateTableHeaders()}</thead>
      <tbody>{generateTableRows()}</tbody>
    </table>
  );
};

export default Table;