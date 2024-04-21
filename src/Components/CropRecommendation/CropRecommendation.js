import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import CropCart from './CropCart/CropCart'
import "./CropRecommendation.css"
import { Link, useNavigate } from 'react-router-dom';
import CropDetails from './CropDetails/CropDetails';

function CropRecommendation() {
    
  const navigate = useNavigate()
    
    const [selectedCrop, setSelectedCrop] = React.useState(null);
    useEffect(() => {
        if (localStorage.getItem("token")) {
            // getnotes()
            navigate("/croprecommendation")
        }
        else {
            navigate("/login")
        }
        // eslint-disable-next-line 
    }, [])
    const handleCropClick = (crop) => {
        setSelectedCrop(crop);
    };

    let crops = [
        { "id": 1, "cropImgUrl": "https://tse1.mm.bing.net/th?id=OIP.zDP0EwRDmljtVnQkDODCIAHaEK&pid=Api&rs=1&c=1&qlt=95&w=179&h=100", "cropName": "wheat" },
        { "id": 2, "cropImgUrl": "https://tse1.mm.bing.net/th?id=OIP._XTTSzlOw8MPoP7vEHN7ewHaEK&pid=Api&rs=1&c=1&qlt=95&w=172&h=97", "cropName": "rice" },
        { "id": 3, "cropImgUrl": "https://tse1.mm.bing.net/th?id=OIP.ieatCf-CMeeTBmrLW6iymQHaE7&pid=Api&rs=1&c=1&qlt=95&w=146&h=97", "cropName": "bajra" }
    ]
    // console.log(crops,"///////////////////////////")
    return (
        <div className='container'>
            <div className="searchbardiv">
                <div className="searchbar">
                    <input
                        className='searchinput'
                        type="text"
                        placeholder="Search..."
                    />
                </div>
                <div className="icon">
                    <FaSearch className='ico' />
                </div>
            </div>

            <div className="row" >
                {/* {
                    crops.map((crop) => {
                        console.log(crop)
                        return (
                            <div key={crop.id} className="col-md-4">

                                <Link to="/cropdetail">
                                    <CropCart crop={crop} />
                                </Link>
                                <CropCart crop={crop} onCropClick={handleCropClick}/> 
                                 {selectedCrop && <CropDetails crop={selectedCrop} />} 
                            </div>
                        )
                    })
                } */}
                {/* <CropCart crops={crops} /> */}
                {/* {selectedCrop && <CropDetails crop={selectedCrop} />} */}
                
                {
                    crops.map(crop=>{
                        return(
                            <CropCart key={crop.id} crop={crop} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CropRecommendation;