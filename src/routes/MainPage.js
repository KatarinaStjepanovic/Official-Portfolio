import React from "react"
import Navbar from "../components/Navbar"
import Title from "../components/Title"


function MainPage(props){
    return(
      <div>
        < Navbar class={"mainPageNav"} loadingAnim = {props.loadingAnim} />
        < Title /> 
      </div>
      
    )
}


export default MainPage