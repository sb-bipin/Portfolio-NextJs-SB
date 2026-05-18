// src/app/about/page.tsx
import Image from 'next/image';

export const metadata = {
    title: 'About Me | Bipin Paudel',
    description: 'Learn more about Bipin Paudel – web developer, tech writer, and problem solver from Nepal.',
};

export default function AboutPage() {
    const skills = [
        { name: 'JavaScript / TypeScript', level: 90 },
        { name: 'React / Next.js', level: 88 },
        { name: 'Node.js / Express', level: 75 },
        { name: 'Python / Django', level: 70 },
        { name: 'Bootstrap / Tailwind', level: 85 },
        { name: 'MongoDB / PostgreSQL', level: 80 },
    ];

    const interests = [
        '📖 Reading tech blogs',
        '✍️ Writing articles',
        '🏔️ Trekking in Nepal',
        '☕ Open source contributor',
    ];

    return (
        <div className="container py-5">
            {/* Hero section */}
            <div className="row align-items-center mb-5">
                <div className="col-md-4 text-center mb-4 mb-md-0">
                    <div className="position-relative mx-auto" style={{ width: '250px', height: '250px' }}>
                        <Image src="/images/profile.jpg" alt="..." fill className="rounded-circle object-fit-cover border border-3 border-primary shadow" />
                    </div>
                </div>
                <div className="col-md-8">
                    <h1 className="display-4 fw-bold">Bipin Paudel</h1>
                    <p className="lead text-primary">Full‑Stack Developer & Technical Writer</p>
                    <p className="text-muted">
                        Building fast, scalable web applications with modern JavaScript. Sharing knowledge through articles
                        and open source.
                    </p>
                    <div className="mt-3">
                        <a href="/contact" className="btn btn-primary me-2">Hire Me</a>
                        <a href="/projects" className="btn btn-outline-secondary">View Projects</a>
                    </div>
                </div>
            </div>

            {/* Bio Section */}
            <div className="row mb-5">
                <div className="col">
                    <h2 className="border-bottom pb-2 mb-4">Who Am I?</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                        I&apos;m a passionate developer from <strong>Pokhara, Nepal</strong> with over 4 years of experience
                        in building responsive, user‑centric web applications. I love turning complex problems into simple,
                        elegant solutions. Currently, I focus on <strong>Next.js</strong> and the modern React ecosystem,
                        while also exploring backend technologies like Node.js and Python.
                    </p>
                    <p>
                        When I&apos;m not coding, you&apos;ll find me writing technical articles (right here on this site),
                        contributing to open source, or planning my next Himalayan trek. I believe in continuous learning
                        and sharing knowledge with the community.
                    </p>
                </div>
            </div>

            {/* Skills Section */}
            <div className="row mb-5">
                <div className="col">
                    <h2 className="border-bottom pb-2 mb-4">Technical Skills</h2>
                    <div className="row">
                        {skills.map((skill, idx) => (
                            <div key={idx} className="col-md-6 mb-3">
                                <div className="d-flex justify-content-between mb-1">
                                    <span>{skill.name}</span>
                                    <span>{skill.level}%</span>
                                </div>
                                <div className="progress">
                                    <div
                                        className="progress-bar bg-primary"
                                        role="progressbar"
                                        style={{ width: `${skill.level}%` }}
                                        aria-valuenow={skill.level}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        {skill.level}%
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Experience & Education */}
            <div className="row mb-5">
                <div className="col-md-6 mb-4 mb-md-0">
                    <h2 className="border-bottom pb-2 mb-4">Experience</h2>
                    <div className="card shadow-sm mb-3">
                        <div className="card-body">
                            <h5>Senior Frontend Developer</h5>
                            <p className="text-muted">TechStart Pvt. Ltd. | 2023 – Present</p>
                            <ul>
                                <li>Lead the rewrite of the company dashboard using Next.js 14 and TypeScript.</li>
                                <li>Improved performance by 40% through code splitting and image optimisation.</li>
                                <li>Mentored two junior developers and conducted weekly code reviews.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5>Junior Web Developer</h5>
                            <p className="text-muted">WebSolutions Nepal | 2020 – 2023</p>
                            <ul>
                                <li>Built and maintained 10+ client websites using React, Bootstrap, and WordPress.</li>
                                <li>Implemented responsive designs and cross‑browser compatibility.</li>
                                <li>Collaborated with design team to deliver pixel‑perfect interfaces.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h2 className="border-bottom pb-2 mb-4">Education</h2>
                    <div className="card shadow-sm mb-3">
                        <div className="card-body">
                            <h5>Bachelor’s in Computer Science</h5>
                            <p className="text-muted">Pokhara University | 2018 – 2022</p>
                            <p>Graduated with First Division. Coursework included Data Structures, Web Technologies, and Database Design.</p>
                        </div>
                    </div>
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5>Full‑Stack Web Development Bootcamp</h5>
                            <p className="text-muted">Le Wagon (Remote) | 2021</p>
                            <p>Intensive 9‑week program covering Ruby on Rails, JavaScript, HTML/CSS, and agile methodologies.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fun Facts / Interests */}
            <div className="row mb-5">
                <div className="col">
                    <h2 className="border-bottom pb-2 mb-4">Beyond the Code</h2>
                    <div className="d-flex flex-wrap gap-3">
                        {interests.map((interest, idx) => (
                            <span key={idx} className="badge bg-secondary p-3 fs-6 rounded-pill">
                                {interest}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="row text-center bg-light p-5 rounded-4">
                <div className="col">
                    <h3>Want to work together?</h3>
                    <p className="mb-4">I&apos;m always open to discussing new projects or freelance opportunities.</p>
                    <a href="/contact" className="btn btn-primary btn-lg">Get In Touch →</a>
                </div>
            </div>
        </div>
    );
}