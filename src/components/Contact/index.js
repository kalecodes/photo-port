import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [errorMessage, setErrorMessage] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState)
        // target email input element
        if (e.target.name === 'email') {
            // use validateEmail helper to return true or false if email is valid and store it in isValid constant
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is involved.');
            } else {
                setErrorMessage('');
            }
        // target remaining two elements
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }
        // state only updates if the form data has passed the quality tests
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }


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

    return (
        <section>
            <h1 data-testid="contact">Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="name">Email address:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                </div>
            </form>
            {errorMessage && (
                // conditional error message only if errorMessage contains a message
                <div>
                    <p className='error-text'>{errorMessage}</p>
                </div>
            )}
            <button type="submit" data-testid='submit'>Submit</button>
        </section>
    )


}

export default ContactForm;