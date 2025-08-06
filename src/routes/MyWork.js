import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons"

import Navbar from '../components/Navbar'
import Project from '../components/Project'

function MyWork(props) {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/highlated.json")
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        response.json()
          .then(data => {
            setProjects(data)

          })

      } catch (err) {
        console.error(err)
      }
    }

    fetchData()


  }, [])

  return (
    <> 
      <Navbar class="myWorkNav" loadingAnim = {props.loadingAnim} />
      <div className='projects'>
        {projects.map( (pr, id) => { return < Project key={id} project = {pr} />})}
      <div className='seeMoreDiv'>
       <a href='https://github.com/KatarinaStjepanovic' target='_blank' rel="noreferrer"> <div className='seeMore'>See More <div className='moreIcon'><FontAwesomeIcon icon={faAnglesRight} /></div></div></a>
      </div>
      </div>
    </>
  )
}

export default MyWork

