import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-stone-800 border-t border-gray-200 dark:border-stone-700 py-8 transition-colors duration-300">
            <div className="container mx-auto px-4 text-center">
                <div className="flex justify-center gap-6 mb-4">

                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"
                        className="text-gray-600 dark:text-stone-400 hover:text-blue-600 dark:hover:text-amber-400 transition">
                        <FaLinkedin size={24} />
                    </a>

                    <a href="mailto:bipanapoudel404@example.com"
                        className="text-gray-600 dark:text-stone-400 hover:text-blue-600 dark:hover:text-amber-400 transition">
                        <FaEnvelope size={24} />
                    </a>
                </div>
                <p className="text-gray-500 dark:text-stone-400 text-sm">
                    © {new Date().getFullYear()} Bipana Poudel ❤. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;