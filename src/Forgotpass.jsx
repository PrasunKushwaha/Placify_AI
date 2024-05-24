import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from 'emailjs-com';

function Login({ setUser }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        // Add your success message or redirect logic here
      }, (error) => {
        console.error('Error sending email:', error.text);
        // Add your error handling logic here
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-5 text-white bg-gray-900">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-md">
        <Link to={'/'} className="text-gray-300 hover:text-gray-400">
          <IoIosArrowBack className="text-3xl" />
        </Link>

        <h2 className="mb-6 text-3xl font-bold text-center animate__animated animate__fadeInDown">Log In</h2>

        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full p-2 mt-1 bg-gray-700 border-gray-600 rounded-md shadow-sm focus:border-indigo-400 focus:ring-indigo-400"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="block w-full p-2 mt-1 bg-gray-700 border-gray-600 rounded-md shadow-sm focus:border-indigo-400 focus:ring-indigo-400"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <Link to={'/forgotPass'} className="text-sm text-indigo-500 hover:text-indigo-700">Forgot password?</Link>
            <Link to={'/signup'} className="text-sm text-indigo-500 hover:text-indigo-700">Don't have an account?</Link>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 animate__animated animate__pulse"
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
