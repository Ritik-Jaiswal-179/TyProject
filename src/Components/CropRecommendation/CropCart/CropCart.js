import React, { useState } from 'react'
import "./CropCart.css"
import { Link } from 'react-router-dom';

function CropCart({ crop }) {
    // console.log(crops)
    // const [selectedCrop, setSelectedCrop] = useState(null)

    // const handleCropClick = (crop) => {
    //     setSelectedCrop(crop)
    // }
    // let {crop} = props
    return (
        <div className='container cropcart col-md-3'>
            {/* <Link to="/cropdetail" state= {{ cropdata: selectedCrop }} >
                <div className="card" onClick={()=>handleCropClick(crop)}>
                    <img src={crop.cropImgUrl} className="card-img-top" alt={crop.cropName} />
                    <div className="card-body">
                        <p className="card-text">{crop.cropName}</p>
                    </div>
                </div>
            </Link> */}

            {/* <Link to="/cropdetail" state={{ cropdata: selectedCrop }} > */}
            {/* {
                crops.map(crop => {
                    return (
                        <Link to="/cropdetail" key={crop.id} className="card" onClick={() => handleCropClick(crop)}> 
                            <img src={crop.cropImgUrl} className="card-img-top" alt={crop.cropName} />
                            <div className="card-body">
                                <p className="card-text">{crop.cropName}</p>
                            </div>
                        </Link>
                    )
                })
            } */}
            {/* </Link> */}



            <Link to="/cropdetail" state={{cropdata:crop}} className="card my-3">
                <div className="card-body">
                    <div className="">
                        <img src={crop.cropImgUrl} className="card-img-top" alt={crop.cropName} />
                        <h5 className="card-title">{crop.cropName}</h5>

                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CropCart
