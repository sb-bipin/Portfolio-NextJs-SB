'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/portfolio/about' },
        { name: 'Projects', path: '/portfolio/projects' },
        { name: 'Articles', path: '/portfolio/articles' },
        { name: 'Contact', path: '/portfolio/contact' },
    ];

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" href="/">
                    Bipin Poudel
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {navItems.map((item) => (
                            <li className="nav-item" key={item.path}>
                                <Link
                                    className={`nav-link ${pathname === item.path ? 'active' : ''}`}
                                    href={item.path}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;