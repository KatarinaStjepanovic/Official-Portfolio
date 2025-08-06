import React from 'react'

function Project(props) {
  console.log(props.project)
  return (
    <div className='project'>
      <div className='title'>
            {props.project.title}
        </div>
        <img className='img' src={props.project.img} alt='Image'/>
        <div className='date'>{props.project.date}</div>
        <div className='desc'>{props.project.desc}</div>
    </div>
  )
}

export default Project