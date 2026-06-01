'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaHome, FaUser, FaProjectDiagram, FaNewspaper, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from '@/app/context/ThemeContext';

const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const { darkMode, toggleTheme } = useTheme();

    const navItems = [
        { name: 'Home', path: '/', icon: FaHome },
        { name: 'About', path: '/portfolio/about', icon: FaUser },
        { name: 'Projects', path: '/portfolio/projects', icon: FaProjectDiagram },
        { name: 'Articles', path: '/portfolio/articles', icon: FaNewspaper },
        { name: 'Contact', path: '/portfolio/contact', icon: FaEnvelope },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white/80 dark:bg-stone-800/90 backdrop-blur-md shadow-sm transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-3">
                    {/* Logo – blue in light, amber in dark */}
                    <Link
                        href="/"
                        className="text-2xl font-bold text-blue-600 dark:text-amber-400 hover:text-blue-700 dark:hover:text-amber-300 transition"
                    >
                        Bipana Poudel
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navItems.map(({ name, path, icon: Icon }) => {
                            const isActive = pathname === path;
                            return (
                                <Link
                                    key={path}
                                    href={path}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 ${isActive
                                            ? 'bg-blue-100 dark:bg-stone-700 text-blue-700 dark:text-amber-200 font-semibold'
                                            : 'text-gray-700 dark:text-stone-200 hover:bg-blue-50 dark:hover:bg-stone-700/60'
                                        }`}
                                >
                                    <Icon size={16} />
                                    <span>{name}</span>
                                </Link>
                            );
                        })}
                        {/* Theme toggle button */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-gray-200 dark:bg-stone-700 text-gray-700 dark:text-amber-300 hover:bg-gray-300 dark:hover:bg-stone-600 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {darkMode ? '☀️' : '🌙'}
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center gap-2 md:hidden">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-gray-200 dark:bg-stone-700 text-gray-700 dark:text-amber-300 hover:bg-gray-300 dark:hover:bg-stone-600 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {darkMode ? '☀️' : '🌙'}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg text-gray-700 dark:text-stone-200 hover:bg-blue-50 dark:hover:bg-stone-700 focus:outline-none"
                        >
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200 dark:border-stone-700">
                        {navItems.map(({ name, path, icon: Icon }) => {
                            const isActive = pathname === path;
                            return (
                                <Link
                                    key={path}
                                    href={path}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${isActive
                                            ? 'bg-blue-50 dark:bg-stone-700 text-blue-700 dark:text-amber-200 font-medium'
                                            : 'text-gray-700 dark:text-stone-200 hover:bg-blue-50 dark:hover:bg-stone-700/60'
                                        }`}
                                >
                                    <Icon size={18} />
                                    <span>{name}</span>
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;