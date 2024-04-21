import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import CropRecommendation from './Components/CropRecommendation/CropRecommendation';
import DiseaseDetection from './Components/DiseaseDetection/DiseaseDetection';
import DiseaseDetectionsubmit from './Components/DiseaseDetection/DiseaseDetectionsubmit';
import Feedback from './Components/Feedback/Feedback';
import CropDetails from './Components/CropRecommendation/CropDetails/CropDetails';
import ProfilePage from './Components/Profile/Profile';

import Admin from './Components/Admin/Admin';
import Crops from './Components/Admin/Crops/Crops';
import Users from './Components/Admin/Users/Users';
import Userfeedback from './Components/Admin/UserFeedback/Userfeedback';
import Login from './Components/Login';
import Profile from './Components/Admin/Profile/Profile';
import Signup from './Components/Signup';
import { useState } from 'react';
import Alert from './Components/Alert';

function App() {
  
  const [alert, setAlert] = useState(null)
  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Alert alert={alert} />
        <Routes>
          

          <Route path="/login" element={<Login showalert={showalert}/>}></Route>
          <Route path="/signup" element={<Signup  showalert={showalert}/>}></Route>
          <Route path='/' element={<Home showalert={showalert}/>} ></Route>
          <Route path='/admin' element={<Admin showalert={showalert}/>} ></Route>

          <Route path='/croprecommendation' element={<CropRecommendation showalert={showalert}/>} ></Route>
          <Route path='/cropdetail' element={<CropDetails showalert={showalert}/>} />

          <Route path='/diseasedetection' element={<DiseaseDetection showalert={showalert}/>} ></Route>
          <Route path='/diseasedetectionsubmit' element={<DiseaseDetectionsubmit />} />

          <Route path='/feedback' element={<Feedback showalert={showalert}/>} ></Route>

          <Route path='/profile' element={<ProfilePage showalert={showalert}/>} ></Route>

          <Route path='/admin/users' element={<Users showalert={showalert}/>} ></Route>
          <Route path='/admin/crops' element={<Crops showalert={showalert}/>} ></Route>
          <Route path='/admin/userfeedback' element={<Userfeedback showalert={showalert}/>} ></Route>
          <Route path='/admin/profile' element={<Profile showalert={showalert}/>} ></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
