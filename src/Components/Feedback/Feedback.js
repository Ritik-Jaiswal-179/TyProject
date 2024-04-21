import React, { useEffect, useState } from 'react'
import "./Feedback.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'

function Feedback(props) {

  const [feedback, setFeedback] = useState("")
  // let id = ""
  const navigate = useNavigate()
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/feedback")
    }
    else {
      navigate("/login")
    }
    // eslint-disable-next-line 
  }, [navigate])

  const handlefeedbacksummit = async (e) => {
    e.preventDefault()
    const decoded = jwtDecode(localStorage.getItem("token"))
    console.log(feedback)
    if (feedback !== null && feedback !== undefined) {

      const response = await axios.post('http://localhost:5000/user/feedback', { id: decoded.payload.id, feedback: feedback });

      const json = await response.data

      if (json.success) {
        props.showalert("Feedback uploaded ", "success")
        setFeedback("")
        // navigate("/feedback")
      }
      else {
        props.showalert("Feedback uploaded Failed", "danger")
      }
      setFeedback("");
      console.log("////// feedack: ",feedback);
    } else {
      props.showalert("Please enter feedback", "danger")
    }

  }

  const handleInputChange = (e) => {
    setFeedback(e.target.value);
  };

  return (
    <div className="feedback">

      <div className='container'>
        <h1>Feedback</h1>
        <p>Ask your any query or leave your feedback.</p>
        <p>Your Feedback help to improve us.</p>


        <form >
          <label className='label' for="message">Enter your message:</label><br />

          <textarea
            className='textarea'
            name="message" id="message"
            onChange={handleInputChange}
            value={feedback}
          ></textarea><br />
{
  console.log(feedback)
}
          <input className='submit' type="submit" value="Submit" onClick={handlefeedbacksummit} />
        </form>


        <br /><p>or</p>
        <h6>To contact us <a target="_blank" href="mailto:ritiktp@gmail.com">  Mail us</a></h6>
      </div>
    </div>
  )
}

export default Feedback
