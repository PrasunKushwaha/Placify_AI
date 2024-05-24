import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Signup() {
    function callSignupApi(values) {
        console.log(
            'name is',
            values.fullName,
            'username is',
            values.userName,
            'pass is',
            values.pass,
            'confirmpass is',
            values.confirmPass,
            'email is',
            values.email,
        );
    }

    const schema = Yup.object().shape({
        email: Yup.string().email('Email must be valid').required('Email is required'),
        pass: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
        fullName: Yup.string().required('Full Name is required'),
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
    } = useFormik({
        initialValues: {
            fullName: '',
            userName: '',
            email: '',
            pass: '',
            confirmPass: '',
        },
        onSubmit: callSignupApi,
        validationSchema: schema,
        validateOnMount: true,
    });

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="w-full max-w-lg p-8 bg-gray-800 rounded-lg shadow-md">
                <Link to={'/'} className="text-gray-300 hover:text-gray-400">
                    <IoIosArrowBack className="text-3xl" />
                </Link>

                <h1 className="mt-4 mb-8 text-3xl font-bold text-center text-gray-300">Sign Up</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-300">Full Name</label>
                        <input
                            id="fullName"
                            type="text"
                            className="w-full p-2 mt-1 bg-gray-700 border-gray-600 rounded-md shadow-sm focus:border-indigo-400 focus:ring-indigo-400"
                            value={values.fullName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="fullName"
                        />
                        {touched.fullName && errors.fullName && (
                            <div className="text-red-500">{errors.fullName}</div>
                        )}
                    </div>

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
                        <label htmlFor="pass" className="block text-sm font-medium text-gray-300">Password</label>
                        <input
                            id="pass"
                            type="password"
                            className="w-full p-2 mt-1 bg-gray-700 border-gray-600 rounded-md shadow-sm focus:border-indigo-400 focus:ring-indigo-400"
                            value={values.pass}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="pass"
                        />
                        {touched.pass && errors.pass && (
                            <div className="text-red-500">{errors.pass}</div>
                        )}
                    </div>

                    <div>
                        <label htmlFor="confirmPass" className="block text-sm font-medium text-gray-300">Confirm Password</label>
                        <input
                            id="confirmPass"
                            type="password"
                            className="w-full p-2 mt-1 bg-gray-700 border-gray-600 rounded-md shadow-sm focus:border-indigo-400 focus:ring-indigo-400"
                            value={values.confirmPass}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="confirmPass"
                        />
                        {touched.confirmPass && errors.confirmPass && (
                            <div className="text-red-500">{errors.confirmPass}</div>
                        )}
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            className="w-full p-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            type="submit"
                            disabled={!isValid}
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
                        <Link to={'/login'} className="text-sm text-indigo-500 hover:text-indigo-700">Already have an account?</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
