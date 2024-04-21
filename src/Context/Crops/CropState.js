// import React, { useState } from 'react'
// import AllContext from '../AllContext'

// const CropState = (props) => {
//     const initialCrop = []
//     const [crops, setCrops] = useState(initialCrop)

//     const Crops = [
//         { srNo: 1, cropName: 'Wheat', bestPlaceToGrow: 'Field', growthDuration: '3 months' },
//         { srNo: 2, cropName: 'Rice', bestPlaceToGrow: 'Paddy field', growthDuration: '4 months' },
//         { srNo: 3, cropName: 'Corn', bestPlaceToGrow: 'Field', growthDuration: '3 months' },
//         { srNo: 4, cropName: 'Tomato', bestPlaceToGrow: 'Greenhouse', growthDuration: '2 months' },
//         { srNo: 5, cropName: 'Potato', bestPlaceToGrow: 'Field', growthDuration: '4 months' },
//         { srNo: 6, cropName: 'Carrot', bestPlaceToGrow: 'Garden', growthDuration: '2 months' },
//         { srNo: 7, cropName: 'Lettuce', bestPlaceToGrow: 'Greenhouse', growthDuration: '1 month' },
//         { srNo: 8, cropName: 'Apple', bestPlaceToGrow: 'Orchard', growthDuration: '6 months' },
//         { srNo: 9, cropName: 'Orange', bestPlaceToGrow: 'Orchard', growthDuration: '5 months' },
//         { srNo: 10, cropName: 'Grapes', bestPlaceToGrow: 'Vineyard', growthDuration: '4 months' },
//       ];

//     const getcrops=()=>{
//         setCrops(Crops)
//     }


//     return (
//         <AllContext.Provider value={{crops,getcrops}}>
//             {props.children}
//         </AllContext.Provider>
//     )
// }

// export default CropState
