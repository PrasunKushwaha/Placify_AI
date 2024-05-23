import React from 'react';
import 'animate.css';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div className="min-h-screen p-5 text-white bg-gray-900">
            <header className="max-w-screen-xl py-10 mx-auto text-center">
                <h1 className="mb-4 text-5xl font-extrabold animate__animated animate__fadeInDown">Welcome to Placify-AI</h1>
                <p className="mb-8 text-xl animate__animated animate__fadeInUp">Your ultimate placement training platform</p>
            </header>

            <div className="grid max-w-screen-xl grid-cols-1 gap-8 mx-auto sm:grid-cols-2">
                <div className="animate__animated animate__fadeInLeft animate__delay-1s">
                    <div className="overflow-hidden transition-shadow duration-300 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl">
                        <img src="https://via.placeholder.com/400x200" alt="Quiz Generator" className="object-cover w-full h-48"/>
                        <div className="p-6">
                            <h2 className="mb-4 text-3xl font-bold">Quiz Generator Model</h2>
                            <p className="mb-4">Generate custom quizzes to test and improve your skills.</p>
                            <Link to="/quiz" className="inline-block px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">Learn More</Link>
                        </div>
                    </div>
                </div>

                <div className="animate__animated animate__fadeInRight animate__delay-1s">
                    <div className="overflow-hidden transition-shadow duration-300 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl">
                        <img src="https://via.placeholder.com/400x200" alt="Job Interview Model" className="object-cover w-full h-48"/>
                        <div className="p-6">
                            <h2 className="mb-4 text-3xl font-bold">Job Interview Model</h2>
                            <p className="mb-4">Practice with simulated job interviews tailored to your field.</p>
                            <Link to="/jobInterview" className="inline-block px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
