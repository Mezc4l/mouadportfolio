import React from 'react'
import Lottie from 'lottie-react'
import contact from '../assets/Contact.json'
import { FaUpwork } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import Swal from 'sweetalert2'
import { useRef } from 'react';


const Contact = () => {
  // Create refs for each input field
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();

    const object = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
      access_key: "242be2ac-bfad-413d-a2e3-d85e05a30363",
    };

    console.log(object); // Check form data
    if (!object.name || !object.email || !object.message) {
      Swal.fire({
        title: "Warning!",
        text: "Please fill in all fields.",
        icon: "warning",
      });
      return;
    }

    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        Swal.fire({
          title: "Success!",
          text: "Your email has been sent.",
          icon: "success",
        });

        // Clear the form by resetting the refs
        nameRef.current.value = '';
        emailRef.current.value = '';
        messageRef.current.value = '';
      } else {
        Swal.fire({
          title: "Error!",
          text: "There was an issue sending your email.",
          icon: "error",
        });
      }
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        title: "Error!",
        text: "There was an issue sending your email.",
        icon: "error",
      });
    }
  };

  return (
    <section id='contact' className='z-50 bg-gray-800 relative py-10 px-5 md:px-0'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='md:w-1/2 mb-8 ml-2 md:mb-0'>
            <h2 className='text-3xl font-bold mb-3 text-red-500'>Get in Touch</h2>
            <p className='mb-4 text-white/85'>I'm always open to new opportunities and collaboration. Feel free to reach out!</p>

            <div className='flex space-x-4'>
              <a href="https://www.upwork.com/freelancers/~019c2e686b79ea9110?mp_source=share" target="_blank"
                rel="noopener noreferrer" className='text-foreground/60 hover:text-foreground/80'>
                <FaUpwork className='h-5 w-5 text-red-500 pt-1' /></a>
              <a href="https://www.linkedin.com/in/lakhnatimouad/"
                target="_blank"
                rel="noopener noreferrer" className='text-foreground/60 hover:text-foreground/80'>
                <FaLinkedinIn className='h-5 w-5 text-red-500' /></a>
            </div>
            <Lottie animationData={contact} className='w-[350px] mx-auto lg:w-[500px]' />
          </div>
          <form
            onSubmit={onSubmit}
            className='w-full md:w-1/2 bg-gray-100 rounded-lg border border-red-300 shadow-lg shadow-red-500 p-10'>
            <h1 className='text-gray-900 text-4xl font-bold mb-7'>Contact Me</h1>
            <div className='mb-4'>
              <label htmlFor="name" className='block text-sm font-medium text-gray-700'>Name</label>
              <input
                type="text"
                id='name'
                name="name"
                placeholder='Full Name'
                ref={nameRef} // Attach ref
                className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email</label>
              <input
                type="email"
                id='email'
                name="email"
                placeholder='Email'
                ref={emailRef} // Attach ref
                className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor="message" className='block text-sm font-medium text-gray-700'>Message</label>
              <textarea
                id='message'
                name="message"
                placeholder='Enter Your Message'
                ref={messageRef} // Attach ref
                className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
              />
            </div>
            <div className='flex justify-center'>
              <button type='submit' className='bg-red-500 text-white px-3 py-2 rounded-lg '>Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
