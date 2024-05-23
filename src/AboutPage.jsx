import React from 'react';
import 'animate.css';

function AboutPage() {
    return (
        <div className="min-h-screen p-5 text-white bg-gray-900">
            <header className="max-w-screen-xl py-10 mx-auto text-center">
                <h1 className="mb-4 text-5xl font-extrabold animate__animated animate__fadeInDown">About Placify-AI</h1>
                <p className="mb-8 text-xl animate__animated animate__fadeInUp">Your ultimate placement training platform</p>
            </header>

            <div className="grid max-w-screen-xl grid-cols-1 gap-8 py-10 mx-auto md:grid-cols-2">
                <div className="animate__animated animate__fadeInLeft">
                    <h2 className="mb-4 text-3xl font-bold">Technologies Used</h2>
                    <ul className="pl-5 space-y-2 list-disc">
                        <li className="text-xl">React.js</li>
                        <li className="text-xl">Tailwind CSS</li>
                        <li className="text-xl">Axios</li>
                        <li className="text-xl">JavaScript (JS)</li>
                        <li className="text-xl">Gemini API</li>
                    </ul>
                </div>

                <div className="animate__animated animate__fadeInRight">
                    <h2 className="mb-4 text-3xl font-bold">Project Details</h2>
                    <p className="mb-2 text-xl">Created by: Prasun Kushwaha and Aakash Kumar</p>
                    <p className="mb-2 text-xl">Minor Project for B.Tech CSE at DevBhoomi Uttarakhand University</p>
                    <p className="mb-2 text-xl">Guided by: Sumit Bhumbak (Assistant Professor)</p>
                    <p className="text-xl">Department of Computer Science and Engineering</p>
                </div>
            </div>

            <div className="max-w-screen-xl py-10 mx-auto">
                <h2 className="mb-6 text-3xl font-bold text-center animate__animated animate__fadeInUp">Our Mission</h2>
                <p className="text-xl text-center animate__animated animate__fadeInUp">
                    At Placify-AI, we aim to provide the best training resources for students and professionals to excel in their placement interviews and exams. Our tools are designed to offer practical and interactive learning experiences.
                </p>
            </div>
        </div>
    );
}

export default AboutPage;
