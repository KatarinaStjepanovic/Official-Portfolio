import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faInstagram  } from '@fortawesome/free-brands-svg-icons';
import { faGithub  } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


function ContactLists(props) {
    const classes = `${props.class} contactLinks`
  return (
     <div className={classes}>
            <a className="aLink" href="mailto:katarina22april@gmail.com"> <FontAwesomeIcon icon={faEnvelope} /></a>
            <a className="aLink" target="_blank" rel="noreferrer" href="https://www.instagram.com/stjepanovicc.k/"><FontAwesomeIcon icon={faInstagram} /></a>
            <a className="aLink" target="_blank" rel="noreferrer"  href="https://github.com/KatarinaStjepanovic"><FontAwesomeIcon icon={faGithub} /></a>
            <a className="aLink" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/katarina-stjepanovic/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        </div>
  )
}

export default ContactLists