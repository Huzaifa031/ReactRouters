import React from 'react';

export default function Contact() {
    return (
        <div className="relative flex items-top justify-center min-h-[700px] bg-gray-50 sm:items-center sm:pt-10">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="mt-8 overflow-hidden rounded-lg shadow-lg bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Contact Info Section */}
                        <div className="p-8 bg-gradient-to-r from-orange-400 to-orange-600 text-white sm:rounded-lg">
                            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                                Get in Touch
                            </h1>
                            <p className="mt-4 text-lg sm:text-xl font-medium">
                                Let's collaborate! Feel free to reach out for any inquiries or just to say hello.
                            </p>

                            <div className="mt-8 space-y-4">
                                <div className="flex items-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8 text-gray-100"
                                    >
                                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <div className="ml-4 text-lg">
                                        <span>Gulshan-e-iqbal Block 13/C</span>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8 text-gray-100"
                                    >
                                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <div className="ml-4 text-lg">
                                        <span>+92 3171101176</span>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8 text-gray-100"
                                    >
                                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <div className="ml-4 text-lg">
                                        <span>huzaifas790@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <form className="p-8 flex flex-col justify-center space-y-4">
                            <h2 className="text-2xl font-bold text-gray-800">Contact Form</h2>
                            <p className="text-gray-600">
                                Send us a message and we’ll get back to you as soon as possible.
                            </p>

                            <div className="flex flex-col">
                                <label htmlFor="name" className="hidden">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Full Name"
                                    className="mt-2 py-3 px-4 rounded-lg border border-gray-300 text-gray-700 focus:border-orange-500 focus:ring focus:ring-orange-200"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="email" className="hidden">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email Address"
                                    className="mt-2 py-3 px-4 rounded-lg border border-gray-300 text-gray-700 focus:border-orange-500 focus:ring focus:ring-orange-200"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="message" className="hidden">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    placeholder="Your Message"
                                    rows="4"
                                    className="mt-2 py-3 px-4 rounded-lg border border-gray-300 text-gray-700 focus:border-orange-500 focus:ring focus:ring-orange-200"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 mt-4 text-white font-bold bg-orange-500 hover:bg-orange-600 rounded-lg transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
