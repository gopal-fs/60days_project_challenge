import React from 'react'

const ContactForm = () => {
  return (
    <div>
        <h1>Fill the form</h1>
        <form >
            <input type='text' />
            <input type='email' />
            <textarea rows={4} color={8}></textarea>
            <button>Submit Form</button>
        </form>
    </div>
  )
}

export default ContactForm