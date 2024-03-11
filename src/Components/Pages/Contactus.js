import React, { useRef } from 'react';
import './Contactus.css'; 
import axios from 'axios'; 

const Contactus = () => {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const phoneRef = useRef('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        phone: phoneRef.current.value
      };

      await axios.post(
        'https://ecommerce-b4248-default-rtdb.firebaseio.com/contactus.json', 
        formData
      );

      window.alert('Submitted successfully!');
      nameRef.current.value = '';
      emailRef.current.value = '';
      phoneRef.current.value = '';
    } catch (error) {
      console.error('Error occurred:', error.message); 
      console.error('Error details:', error.response.data); 
      window.alert('An error occurred while submitting the form. Please try again.');
    }
  };

  return (
    <div className="ContactForm">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          ref={nameRef}
          required
        /><br/><br/>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          ref={emailRef}
          required
        /><br/><br/>
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          ref={phoneRef}
          required
        /><br/><br/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Contactus;
