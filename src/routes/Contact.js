import React from 'react'
import Navbar from '../components/Navbar'
import Form from '../components/Form'
import ContactLists from '../components/ContactLists'

function Contact() {
  return (
    <>
      <Navbar class="contactNav" />
      <div className='contactMe'>Contact me</div>
      <div className='contactText'>Got a project in mind, a question to ask, or just want to say hi?<br/> I’d love to hear from you!<br/>
Feel free to reach out through the form or connect with me directly via email or social media. I’ll get back to you as soon as I can.</div>
       <ContactLists class = "contactLink" />
       < Form />
    </>

  )
}

export default Contact