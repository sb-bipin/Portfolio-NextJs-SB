'use client';

import Image from 'next/image';
import { FaGraduationCap, FaHotel, FaUsers, FaChartLine, FaLeaf, FaHeart } from 'react-icons/fa';
import { MdRoomService, MdEventAvailable } from 'react-icons/md';

export default function About() {
    return (
        <div className="min-h-screen py-8 md:py-8">
            <div className="container mx-auto px-2 max-w-2xl">

                {/* Hero Section */}
                <div className="text-center mb-16">
                    <div className="inline-block bg-blue-100 dark:bg-stone-700 text-blue-700 dark:text-amber-300 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                        Get to know me
                    </div>

                    <p className="text-xl text-gray-600 dark:text-stone-300 max-w-3xl mx-auto leading-relaxed">
                        Hotel Management student with a passion for creating memorable guest experiences
                        and optimising hospitality operations through technology and empathy.
                    </p>
                </div>

                {/* Profile & Story Section */}
                <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200 dark:from-stone-600 dark:to-amber-700 rounded-3xl blur-2xl opacity-30 -z-10"></div>
                        <div className="bg-white dark:bg-stone-800 rounded-3xl overflow-hidden shadow-xl">
                            <img
                                src="/images/profile-nani.jpg"
                                alt="Bipana Poudel"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-stone-100">
                            My Journey in Hospitality
                        </h2>
                        <p className="text-gray-600 dark:text-stone-300 mb-4 leading-relaxed">
                            Ever since I was young, I've been fascinated by the art of hospitality – how a warm smile,
                            a thoughtful gesture, or an efficient check‑in can turn a stay into a lifelong memory.
                            This passion led me to pursue a Bachelor's in Hotel Management, where I blend operational
                            excellence with a data‑driven mindset.
                        </p>
                        <p className="text-gray-600 dark:text-stone-300 mb-4 leading-relaxed">
                            Through internships and academic projects, I've worked in front office, event coordination,
                            and revenue analysis. I believe the future of hospitality lies in personalisation, sustainability,
                            and smart technology – and I'm excited to be part of that transformation.
                        </p>
                        <div className="flex flex-wrap gap-4 mt-6">
                            <div className="flex items-center gap-2 text-gray-700 dark:text-stone-200">
                                <FaHeart className="text-red-500" />
                                <span>Guest‑centric</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-700 dark:text-stone-200">
                                <FaLeaf className="text-green-600 dark:text-green-400" />
                                <span>Sustainability advocate</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-700 dark:text-stone-200">
                                <FaChartLine className="text-blue-600 dark:text-amber-400" />
                                <span>Data‑informed</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Education & Experience */}
                <div className="mb-20">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800 dark:text-stone-100">
                        Education & Experience
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Education Card */}
                        <div className="bg-gray-50 dark:bg-stone-700/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                            <div className="flex items-center gap-3 mb-4">
                                <FaGraduationCap className="text-blue-600 dark:text-amber-400 text-3xl" />
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-stone-200">Education</h3>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <p className="font-medium text-gray-900 dark:text-stone-100">Bachelor in Hotel Management</p>
                                    <p className="text-sm text-gray-500 dark:text-stone-400">2022 – 2026 (Expected)</p>
                                    <p className="text-gray-600 dark:text-stone-300 mt-1">Pokhara University, Nepal</p>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900 dark:text-stone-100">Certification in Revenue Management</p>
                                    <p className="text-sm text-gray-500 dark:text-stone-400">2024</p>
                                    <p className="text-gray-600 dark:text-stone-300 mt-1">eCornell / STR Global</p>
                                </div>
                            </div>
                        </div>

                        {/* Experience Card */}
                        <div className="bg-gray-50 dark:bg-stone-700/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                            <div className="flex items-center gap-3 mb-4">
                                <FaHotel className="text-blue-600 dark:text-amber-400 text-3xl" />
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-stone-200">Experience</h3>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <p className="font-medium text-gray-900 dark:text-stone-100">Front Office Intern</p>
                                    <p className="text-sm text-gray-500 dark:text-stone-400">Summer 2024</p>
                                    <p className="text-gray-600 dark:text-stone-300 mt-1">Hotel Annapurna, Kathmandu</p>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900 dark:text-stone-100">Event Planning Assistant</p>
                                    <p className="text-sm text-gray-500 dark:text-stone-400">2023 – Present</p>
                                    <p className="text-gray-600 dark:text-stone-300 mt-1">Freelance for weddings & corporate events</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Core Skills – Hospitality Focused */}
                <div className="mb-20">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800 dark:text-stone-100">
                        Core Competencies
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            { name: 'Front Office Operations', icon: <MdRoomService /> },
                            { name: 'Guest Relations', icon: <FaUsers /> },
                            { name: 'Revenue Management', icon: <FaChartLine /> },
                            { name: 'Event Coordination', icon: <MdEventAvailable /> },
                            { name: 'PMS Software (Opera, Cloudbeds)', icon: <FaHotel /> },
                            { name: 'Sustainability Practices', icon: <FaLeaf /> },
                        ].map((skill) => (
                            <div
                                key={skill.name}
                                className="bg-blue-50 dark:bg-stone-700/70 rounded-xl p-4 text-center hover:scale-105 transition-transform duration-200"
                            >
                                <div className="text-blue-600 dark:text-amber-400 text-2xl mb-2 flex justify-center">
                                    {skill.icon}
                                </div>
                                <p className="text-sm font-medium text-gray-700 dark:text-stone-200">{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quote / Philosophy */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-stone-800 dark:to-stone-700 rounded-2xl p-8 text-center">
                    <p className="text-lg md:text-xl italic text-gray-700 dark:text-stone-200 leading-relaxed">
                        "Hospitality is not just about service – it's about making people feel seen, valued, and cared for.
                        I strive to bring that philosophy into every project I undertake."
                    </p>
                    <p className="mt-4 font-semibold text-blue-600 dark:text-amber-400">— Bipana Poudel</p>
                </div>

                {/* Call to action (optional) */}
                <div className="text-center mt-16">
                    <p className="text-gray-600 dark:text-stone-300 mb-4">
                        Want to collaborate or just chat about hospitality?
                    </p>
                    <a
                        href="/portfolio/contact"
                        className="inline-block bg-blue-600 dark:bg-amber-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 dark:hover:bg-amber-700 transition shadow-md"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>
        </div>
    );
}