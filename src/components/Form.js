import React, { useState } from 'react'
import { send } from 'emailjs-com'


function Form() {

  const [form, setForm] = useState(
    {
      name: "",
      surname: "",
      email: "",
      message: ""
    }
  )

  const [isSent, setSent] = useState(false)
  const [error, setError] = useState(false)
  const [clicked, setClicked] = useState(false)

  function onChange(e) {
    if( !Object.values(form).includes("")){
      setError(false)
    }
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  function submitForm(e) {
    e.preventDefault()
    setClicked(true)
    if (!Object.values(form).includes("")) {
    setSent(true)
      send(
        "service_yyi0la3",
        "template_form",
        form,
        "93q1WUEj0fnbfNw1o"
      ).then(response => {
        console.log("Success!", response.status, response.text)
      }).catch((err => {
        console.error("Failed", err)
      }))
    } else {
      console.log("Failed to send")
      setError(true)

    }

  }

  return (
    isSent ? <div className='sentMessage'>
      <div style={{ padding: "30px", lineHeight: "30px", fontSize: "20px" }}>Thank your for contacting me! Expect my answer in the near future.</div>
      <div className='signature'>Katarina</div>
    </div> :
      <form className='form' onSubmit={submitForm}>
        <div className='formPadding'>
          <label for="name">Name</label>
          <input type='text' name='name' onChange={onChange} value={form.name} style={{border: form.name === "" && clicked && "1px solid red"}} />
          <label for="surname">Surname</label>
          <input type='text' name='surname' onChange={onChange} value={form.surname} style={{border: form.surname === ""  && clicked &&  "1px solid red"}} />
          <label for="email">Email</label>
          <input type='mail' name='email' onChange={onChange} value={form.email} style={{border: form.email === ""  && clicked && "1px solid red"}} />
          <label for="message">Message</label>
          <input className='formDesc' type='text' name='message' onChange={onChange} value={form.message} style={{border: form.message === ""  && clicked && "1px solid red"}} />
          <button className='submitBtn' style={{backgroundColor: error && "#F52E14", cursor: error && "not-allowed"}}>Submit</button>
        </div>
      </form>
  )
}

export default Form