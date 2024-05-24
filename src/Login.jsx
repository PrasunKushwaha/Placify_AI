import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import 'animate.css';

function Login() {
  const [user, setUser] = useState(null);

  function callLoginApi(values, bag) {
    console.log("calling api", values.email, values.password);
    axios
      .post("https://myeasykart.codeyogi.io/login", {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        console.log(response.data);
        const { user, token } = response.data;
        localStorage.setItem("token", token);
        console.log("Formik bag:", bag);
        console.log("Token:", token);

        // Log full name
        console.log("Full Name:", user.full_name);

        setUser(user);
      })
      .catch(() => {
        console.log("Invalid Credentials");
      });
  }

  const schema = Yup.object().shape({
    email: Yup.string().email("Email must be valid").required("Email is required"),
    password: Yup.string().min(7, "Password must be at least 7 characters").required("Password is required"),
  });

  const {
    handleSubmit,
    values,
    handleChange,
    resetForm,
    errors,
    handleBlur,
    touched,
    isValid,
    dirty,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: callLoginApi,
    validationSchema: schema,
    validateOnMount: true,
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-lg p-8 bg-gray-800 rounded-lg shadow-md">
        <Link to={'/'} className="text-gray-300 hover:text-gray-400">
          <IoIosArrowBack className="text-3xl" />
        </Link>

        <h1 className="mt-4 mb-8 text-3xl font-bold text-center text-gray-300">Log In</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
            <input
              id="email"
              type="email"
              className="w-full p-2 mt-1 bg-gray-700 border-gray-600 rounded-md shadow-sm focus:border-indigo-400 focus:ring-indigo-400"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              name="email"
            />
            {touched.email && errors.email && (
              <div className="text-red-500">{errors.email}</div>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
            <input
              id="password"
              type="password"
              className="w-full p-2 mt-1 bg-gray-700 border-gray-600 rounded-md shadow-sm focus:border-indigo-400 focus:ring-indigo-400"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              name="password"
            />
            {touched.password && errors.password && (
              <div className="text-red-500">{errors.password}</div>
            )}
          </div>

          <div className="flex items-center justify-between">
            <button
              className="w-full p-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              type="submit"
              disabled={!isValid || !dirty}
            >
              SUBMIT
            </button>
            <button
              className="w-full p-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              type="button"
              onClick={resetForm}
            >
              RESET
            </button>
          </div>

          <div className="flex justify-end">
            <Link to={'/forgotPass'} className="text-sm text-indigo-500 hover:text-indigo-700">Forgot password?</Link>
          </div>
          <div className="flex justify-end">
            <Link to={'/signup'} className="text-sm text-indigo-500 hover:text-indigo-700">Don't have an account?</Link>
          </div>
        </form>

        <div className="mt-4">
          {user ? (
            <div className="text-sm font-medium text-gray-300">Welcome, {user.full_name}</div>
          ) : (
            <div className="flex justify-end space-x-4">
              <Link to={'/login'} className="text-sm text-indigo-500 hover:text-indigo-700">Log In</Link>
              <Link to={'/signup'} className="text-sm text-indigo-500 hover:text-indigo-700">Sign Up</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
