import React, { useEffect } from 'react'
import "./DiseaseDetection.css"
import { useNavigate } from 'react-router-dom'
function DiseaseDetectionsubmit() {
    
  const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem("token")) {
            // getnotes()
            navigate("/diseasedetectionsubmit")
        }
        else {
            navigate("/login")
        }
        // eslint-disable-next-line 
    }, [])
    return (
        <div className='container'>
            <div className="image">
                <h3>Image</h3>
            </div>
            
            <div className="desc">
                <h3>Description</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, eligendi accusantium, voluptates similique dolores reprehenderit dignissimos odit tempora sunt voluptatum ratione explicabo nostrum mollitia, consequuntur omnis quae deserunt. Qui, eveniet.</p>
            </div>

            <div className="prevent">
                <div className="prev pre">
                    <h3>Prevention</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad molestiae quasi obcaecati molestias tempora sequi sapiente soluta magnam! Quae assumenda ab, quis perspiciatis vel ratione vitae. Magni quaerat necessitatibus nam!</p>
                </div>
                <div className="prev supplement">
                   <h3>Supplement</h3>
                </div>
            </div>
        </div>
    )
}

export default DiseaseDetectionsubmit
