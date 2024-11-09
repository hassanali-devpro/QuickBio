import React, { useState } from 'react';
import Header from "../common/header/Header"
import { FiMail, FiUser, FiMessageSquare, FiSend, FiPhone } from 'react-icons/fi';
import ScrollTrigger from 'react-scroll-trigger';
import PhoneInput from 'react-phone-input-2'; // Import the phone input
import 'react-phone-input-2/lib/style.css'; // Import the styles
import "./contact.css"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', // Add phone to formData
    message: '',
  });
  const [isEnter, setIsEnter] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      phone: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form data submitted:', formData);
  };

  return (
    <>
    <Header bgColor="bg-[#CD6104]" heroText="We Are Just a Click Away"/>
    <div className="bg-gradient-to-r from-[#71B543] to-[#e6e6e6]">
      <ScrollTrigger onEnter={() => setIsEnter(true)} onExit={() => setIsEnter(false)} className="w-full flex justify-center items-center min-h-screen">
        <form
          onSubmit={handleSubmit}
          className={`${isEnter ? 'animate-slide-up' : 'opacity-0 translate-y-10'} w-full max-w-lg mx-[5%] bg-white shadow-2xl rounded-lg p-8`}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Get in Touch
          </h2>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              <FiUser className="inline-block mr-2" />
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              <FiMail className="inline-block mr-2" />
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              <FiPhone className="inline-block mr-2" />
              Phone Number
            </label>
            <PhoneInput
              country={'us'} 
              value={formData.phone}
              onChange={handlePhoneChange}
              containerClass="w-full border rounded-md"
              inputClass="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              buttonClass="border rounded-l-md"
              placeholder="Enter Your Number"
              required
            />
          </div>


          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              <FiMessageSquare className="inline-block mr-2" />
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="4"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="flex items-center bg-[#71B543] text-white px-6 py-2 rounded-md shadow-lg hover:from-blue-600 hover:to-purple-600 transition duration-300"
            >
              Send Message
              <FiSend className="ml-2" />
            </button>
          </div>
        </form>
      </ScrollTrigger>
    </div>
    </>
  );
};

export default ContactForm;
