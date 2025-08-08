import React from "react"
import Navbar from "../components/Navbar"
import ContactLists from "../components/ContactLists"





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
       <ContactLists class = "abtMeLink" />

       </div>
       
    )
}

export default AboutMe