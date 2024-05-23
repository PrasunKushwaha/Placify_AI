import React, { useState } from 'react';
import 'animate.css';

function FeedbackForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        rating: '',
        comments: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Feedback submitted:', formData);
        // Add your form submission logic here
    };

    return (
        <div className="flex items-center justify-center min-h-screen p-5 text-white bg-gray-900">
            <div className="w-full max-w-lg p-8 bg-gray-800 rounded-lg shadow-md animate__animated animate__fadeIn">
                <h2 className="mb-6 text-3xl font-bold text-center animate__animated animate__fadeInDown">Feedback Form</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="block w-full p-2 mt-1 bg-gray-700 border-gray-600 rounded-md shadow-sm focus:border-indigo-400 focus:ring-indigo-400 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="block w-full p-2 mt-1 bg-gray-700 border-gray-600 rounded-md shadow-sm focus:border-indigo-400 focus:ring-indigo-400 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="rating" className="block text-sm font-medium text-gray-300">Rating</label>
                        <select
                            id="rating"
                            name="rating"
                            value={formData.rating}
                            onChange={handleChange}
                            className="block w-full p-2 mt-1 bg-gray-700 border-gray-600 rounded-md shadow-sm focus:border-indigo-400 focus:ring-indigo-400 sm:text-sm"
                            required
                        >
                            <option value="">Select a rating</option>
                            <option value="1">1 - Poor</option>
                            <option value="2">2 - Fair</option>
                            <option value="3">3 - Good</option>
                            <option value="4">4 - Very Good</option>
                            <option value="5">5 - Excellent</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="comments" className="block text-sm font-medium text-gray-300">Comments</label>
                        <textarea
                            id="comments"
                            name="comments"
                            value={formData.comments}
                            onChange={handleChange}
                            className="block w-full p-2 mt-1 bg-gray-700 border-gray-600 rounded-md shadow-sm focus:border-indigo-400 focus:ring-indigo-400 sm:text-sm"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 animate__animated animate__pulse"
                    >
                        Submit Feedback
                    </button>
                </form>
            </div>
        </div>
    );
}

export default FeedbackForm;
