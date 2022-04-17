import React, { useState } from 'react';

function ContactForm() {
    // initialize values of the state, and clear the input fields on component load
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    // destructure formState into its named properties
    const { name, email, message } = formState;

    // sync internal state of component with user input from the DOM
    // will ensure handleChange fires whenever a keystroke is typed into the input field
    function handleChange(e) {
        // spread operator (...formState) allows us to retain other key-value pairs in the object
        // name property refers to the name attribute of the form element (not the name input)
        setFormState({...formState, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState)
    }

    return (
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="name">Email address:</label>
                    <input type="email" name="email" defaultValue={email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onChange={handleChange} />
                </div>
            </form>
            <button type="submit">Submit</button>
        </section>
    )


}

export default ContactForm;