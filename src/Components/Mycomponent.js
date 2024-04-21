import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://plants10.p.rapidapi.com/plants',
        params: {limit: '10'},
        headers: {
          'X-RapidAPI-Key': 'e53205de62msh1f33f3db5eba86fp114d57jsn45a7571bd260',
          'X-RapidAPI-Host': 'plants10.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        console.log(response)
        setPlants(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once

  console.log(plants)
  return (
    <div>
      <h1>Plant List</h1>
      <ul>
        {plants.map(plant => (
          
          <li key={plant.id}>{plant.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
