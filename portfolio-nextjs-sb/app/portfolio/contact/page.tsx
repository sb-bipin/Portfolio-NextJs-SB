'use client';
import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaHotel, FaClock } from 'react-icons/fa';
import { MdRoomService } from 'react-icons/md';

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Add your email sending logic here (Formspree, EmailJS, etc.)
        // For demo, we just simulate submission
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    return (
        <div className="min-h-screen py-8 md:py-8 bg-white dark:bg-stone-800">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Header Section */}
                <div className="text-center mb-12 md:mb-8">
                    <div className="inline-block bg-blue-100 dark:bg-stone-700 text-blue-700 dark:text-amber-300 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                        Let's Connect
                    </div>

                    <p className="text-lg text-gray-600 dark:text-stone-300 max-w-2xl mx-auto">
                        Have a question, collaboration idea, or internship opportunity?
                        I'd love to hear from you.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

                    {/* Contact Information & Social Links */}
                    <div className="space-y-8">
                        {/* Contact Details */}
                        <div className="bg-gray-50 dark:bg-stone-700/50 rounded-2xl p-6 md:p-8 shadow-sm">
                            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-stone-100">
                                Contact Info
                            </h2>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-100 dark:bg-stone-600 p-3 rounded-full">
                                        <FaEnvelope className="text-blue-600 dark:text-amber-400 text-xl" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-stone-400">Email</p>
                                        <a href="mailto:bipanapoudel404@gmail.com" className="text-gray-800 dark:text-stone-200 hover:text-blue-600 dark:hover:text-amber-400 transition">
                                            bipanapoudel404@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-100 dark:bg-stone-600 p-3 rounded-full">
                                        <FaPhone className="text-blue-600 dark:text-amber-400 text-xl" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-stone-400">Phone</p>
                                        <a href="tel:+977-9822653980" className="text-gray-800 dark:text-stone-200 hover:text-blue-600 dark:hover:text-amber-400 transition">
                                            +977 9822653980
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-100 dark:bg-stone-600 p-3 rounded-full">
                                        <FaMapMarkerAlt className="text-blue-600 dark:text-amber-400 text-xl" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-stone-400">Location</p>
                                        <p className="text-gray-800 dark:text-stone-200">Kathmandu, Nepal</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-100 dark:bg-stone-600 p-3 rounded-full">
                                        <FaClock className="text-blue-600 dark:text-amber-400 text-xl" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-stone-400">Response Time</p>
                                        <p className="text-gray-800 dark:text-stone-200">Within 24–48 hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="bg-gray-50 dark:bg-stone-700/50 rounded-2xl p-6 md:p-8 shadow-sm">
                            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-stone-100">
                                Connect Online
                            </h2>
                            <div className="flex gap-6 justify-center md:justify-start">

                                <a
                                    href="https://linkedin.com/bipana-poudel"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-100 dark:bg-stone-600 p-3 rounded-full text-gray-700 dark:text-stone-200 hover:bg-blue-200 dark:hover:bg-stone-500 hover:text-blue-600 dark:hover:text-amber-400 transition-all"
                                >
                                    <FaLinkedin size={24} />
                                </a>
                                <a href="mailto:bipanapoudel404@example.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-100 dark:bg-stone-600 p-3 rounded-full text-gray-700 dark:text-stone-200 hover:bg-blue-200 dark:hover:bg-stone-500 hover:text-blue-600 dark:hover:text-amber-400 transition-all"
                                >
                                    <FaEnvelope size={24} />
                                </a>
                            </div>
                        </div>

                        {/* Hospitality Quote / Illustration */}
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-stone-800 dark:to-stone-700 rounded-2xl p-6 text-center">
                            <FaHotel className="text-blue-600 dark:text-amber-400 text-4xl mx-auto mb-3" />
                            <p className="text-gray-700 dark:text-stone-200 italic">
                                “The best way to predict the future of hospitality is to create it – together.”
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <div className="bg-gray-50 dark:bg-stone-700/50 rounded-2xl p-6 md:p-8 shadow-sm">
                            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-stone-100">
                                Send a Message
                            </h2>

                            {submitted ? (
                                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 rounded-xl p-4 text-center">
                                    <MdRoomService className="text-3xl mx-auto mb-2" />
                                    <p className="font-semibold">Message sent!</p>
                                    <p className="text-sm">Thanks for reaching out. I'll get back to you soon.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-stone-300 mb-1">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 dark:border-stone-600 rounded-xl bg-white dark:bg-stone-800 text-gray-900 dark:text-stone-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-stone-300 mb-1">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 dark:border-stone-600 rounded-xl bg-white dark:bg-stone-800 text-gray-900 dark:text-stone-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                            placeholder="hello@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-stone-300 mb-1">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 dark:border-stone-600 rounded-xl bg-white dark:bg-stone-800 text-gray-900 dark:text-stone-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                            placeholder="Tell me about your project, opportunity, or just say hi..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 dark:bg-amber-600 hover:bg-blue-700 dark:hover:bg-amber-700 text-white px-6 py-3 rounded-xl transition shadow-md font-semibold flex items-center justify-center gap-2"
                                    >
                                        <FaEnvelope /> Send Message
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}