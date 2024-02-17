import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './Contact.css';
import Footer from '../components/Footer';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Trigger the animation after component mounts
    setShowForm(true);
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://6rcov7u4a2zkzp4ozt53g2fvxa0uhmif.lambda-url.ap-southeast-2.on.aws/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Handle successful submission, e.g., show success message
        console.log('Form submitted successfully');
      } else {
        // Handle error, e.g., show error message
        console.error('Form submission failed');
      }
    } catch (error) {
      // Handle network error, e.g., show error message
      console.error('Network error:', error);
    }
  };

  return (
    <div className="page-container"> {/* Wrapping content in a container */}
      <div className="form-container">
        <h3>Feedback Appreciated</h3> {/* Changed form title */}
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="name">Name:</Label>
            <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email:</Label>
            <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </FormGroup>
          <FormGroup>
            <Label for="message">Message:</Label>
            <Input type="textarea" id="message" name="message" value={formData.message} onChange={handleChange} required />
          </FormGroup>
          <Button type="submit" color="primary">Submit</Button>
        </Form>
      </div>
      <Footer className="footer" /> {/* Add className for the footer */}
    </div>
  );
};

export default ContactForm;
