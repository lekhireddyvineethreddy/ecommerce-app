import React, { useState } from 'react';
import './Contactus.css'; 
import axios from 'axios'; // Import Axios for making HTTP requests

const Contactus = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Construct the data object to be sent to Firebase
      const formData = { name, email, phone };

      // Make a POST request to Firebase Realtime Database
      await axios.post(
        'https://ecommerce-b4248-default-rtdb.firebaseio.com/contactus.json', 
        formData
      );

      window.alert('Submitted successfully!');
      setName('');
      setEmail('');
      setPhone('');
    } catch (error) {
      console.error('Error occurred:', error.message); // Log the error message
      console.error('Error details:', error.response.data); // Log detailed error data if available
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
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br/><br/>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br/><br/>
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        /><br/><br/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Contactus;
