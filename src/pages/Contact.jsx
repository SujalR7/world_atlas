import React from 'react'

const Contact = () => {
    const handleFormSubmit=(formData)=>{
        const Data=Object.fromEntries(formData.entries());
        console.log(Data);
    }
  return (
    <section className="section-contact">
        <h2 className="container-title">Contact Us</h2>
        <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
            <input type="text"
            className='form-control'
            placeholder="enter your name"
            name="username"
            required
            autoComplete="off"
             />
              <input type="email"
            className='form-control'
            placeholder="enter your email"
            name="email"
            required
            autoComplete="off"
             />
              <textarea
            className='form-control'
            rows="15"
            placeholder="enter your message"
            name="message"
            required
            autoComplete="off"
             >
                </textarea>
             <button type='submit' value="send">Send</button>
        </form>
        </div>
    </section>
  )
}

export default Contact;