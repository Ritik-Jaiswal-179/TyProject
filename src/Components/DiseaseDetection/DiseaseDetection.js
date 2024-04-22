import React, { useEffect, useRef, useState } from 'react'
import "./DiseaseDetection.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function DiseaseDetection() {
  const [selectedFile, setSelectedFile] = useState("")

  const fileInputRef = useRef(null);

  const navigate = useNavigate()
  useEffect(() => {
    if (localStorage.getItem("token")) {
      // getnotes()
      navigate("/diseasedetection")
    }
    else {
      navigate("/login")
    }
    // eslint-disable-next-line 
  }, [])

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0])
    console.log(event.target.files[0])
    console.log(selectedFile)
    const chosenFile = event.target.files[0];
    const fileName = chosenFile.name;

    // Update the span content
    const fileChosenSpan = document.getElementById('file-chosen');
    fileChosenSpan.textContent = fileName;
  };


  const handleImageSummit = async (e) => {
    e.preventDefault()

    const formData = new FormData();
    formData.append('image', selectedFile);
    // formData.append('image', fileInputRef.current.files[0]);
    console.log(formData);


    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", {
        body: formData,
      });
      const json = response.data;


      if (json.success) {
        // props.showalert("Logged in successfully ", "success")
        navigate("/diseasedetectionsubmit",{
          state:{
            image:URL.createObjectURL(selectedFile),
            result: json.results,
          }
        })
      }
      else {
        alert("Error: ",json.error)
        // props.showalert("Invalid credentials", "danger")
      }
    } catch (error) {
      console.log("Upload failed")
    }

  }
  return (
    <div className='dd'>
      <div className="conatainer">
        <div className="top">
          <h3>To know the disease of the plant, its preventive measures and supplements</h3>
          <h4>Try our AI </h4>
        </div>

        <div className="boxes container">

          <div className="dbox left">
            <h5>Simply upload your plant's leaf image</h5>
            <div className="image">
              <img
                src="https://tse3.mm.bing.net/th?id=OIP.xSuXJ4e7bgb0nZZ2JHZgsAHaK0&pid=Api&P=0&h=180"
                height="250" alt="" width="200" className="d-block mx-auto mb-4 rounded-pill" />
            </div>
            {/* <form action="/diseasedetectionsubmit" onSubmit={handleImageSummit} enctype="multipart/form-data"> */}
            <form  onSubmit={handleImageSummit} encType="multipart/form-data">
              <div className="custom-file overflow-hidden">
                <input
                  type="file"
                  id="actual-btn"
                  hidden
                  name="image"
                  ref={fileInputRef}
                  onChange={handleFileChange} />
                <label className='ddlabel' htmlFor="actual-btn">Choose File</label>&nbsp;
                <span id="file-chosen">No file chosen</span>
              </div>

              <center>
                <a className="mx-2"><button type="submit" className="btn btn-outline-success mt-2">Submit</button></a>
              </center>
            </form>

          </div>

          <div className="dbox mid">
            <h5>Why is it necessary to detect disease in plant ?</h5>
            <p>Plant diseases affect the growth of their respective species. In addition, some research gaps are identified from which to obtain greater transparency for detecting diseases in plants, even before their symptoms appear clearly. diagnosis is one of the most important aspects of a plant pathologist's training. Without proper identification of the disease and the disease-causing agent, disease control measures can be a waste of time and money and can lead to further plant losses. Proper disease diagnosis is necessary.</p>
          </div>

          <div className="dbox right">
            <h5>Prevent Plant Disease follow below steps:</h5>
            <p>
              <b>1</b>. Allow the Soil to Warm Before Planting.<br />
              <b>2</b>. Fertilize to Keep Your Plants Healthy.<br />
              <b>3</b>. Provide Good Air Circulation.<br />
              <b>4</b>. Follow Good Sanitation Practices.<br />
              <b>5</b>. Ensure a Healthy Vegetable Garden By Rotating Crops.<br />
              <b>6</b>. Inspect Plants for Diseases Before You Bring Them Home.<br />
              <b>7</b>. Remove Diseased Stems and Foliage.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiseaseDetection
