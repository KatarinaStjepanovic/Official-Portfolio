import React from "react"
import Navbar from "../components/Navbar"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faInstagram  } from '@fortawesome/free-brands-svg-icons';
import { faGithub  } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'




function AboutMe(props){
    return(
       <div>
        < Navbar class="aboutMeNav" loadingAnim = { props.loadingAnim}/>
        <div className="firstP">
            My name is Katarina Stjepanović, a high school student from Bosnia and Herzegovina with a strong passion for design and frontend development.
        </div>
        <div className="secondP">
            I actively work with technologies such as HTML, CSS, JavaScript, and React, and I’m also expanding my skills in C and C++. 
        </div>
        <div className="thirdP">
         Additionally, I use Figma for UI/UX design and enjoy bringing ideas to life through clean and functional interfaces.
        </div>
        <div className="contactLinks">
            <a className="aLink" href="mailto:katarina22april@gmail.com"> <FontAwesomeIcon icon={faEnvelope} /></a>
            <a className="aLink" target="_blank" rel="noreferrer" href="https://www.instagram.com/stjepanovicc.k/"><FontAwesomeIcon icon={faInstagram} /></a>
            <a className="aLink" target="_blank" rel="noreferrer"  href="https://github.com/KatarinaStjepanovic"><FontAwesomeIcon icon={faGithub} /></a>
            <a className="aLink" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/katarina-stjepanovic/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        </div>

       </div>
       
    )
}

export default AboutMe