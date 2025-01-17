import React, { useState } from 'react';
import './styles/contact.css';
import cs from './images/cs.jpg'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    const url = 'http://localhost:3001/contactdetails';
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.status == 201) {
        alert('Form submitted successfully!');
        setFormData({ name: '', email: '', message: '' }); 
      } else {
        
        alert('Failed to submit the form');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className='main_contact_form'>
    <div className='contact_image'>
      <img  src={cs} alt='contact us image' style={{width:"600px",height:"400px"}}/>
    </div>
    <div className="footer_section">
      <form className="contact_form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        
        <button type="submit" className="form_button">
          Submit
        </button>
        
      </form>
    </div>
    </div>
  );
};

export default ContactForm;
