// src/components/ProjectGrid.tsx
'use client';

import { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import Image from 'next/image';

// The same project data from your original file goes here.
const allProjects = [
    {
        id: 1,
        title: 'Portfolio Website',
        description: 'Personal portfolio built with Next.js, TypeScript, and Bootstrap. Features a blog module and responsive design.',
        tech: ['Next.js', 'TypeScript', 'Bootstrap'],
        image: '/projects/portfolio.jpg', // put your image in public/projects/
        liveUrl: 'https://www.bipinpaudel.com.np',
        githubUrl: 'https://github.com/bipin/portfolio',
        category: 'frontend',
    },
    {
        id: 2,
        title: 'E‑Commerce Dashboard',
        description: 'Admin dashboard for managing products, orders, and users. Includes charts and real‑time updates.',
        tech: ['React', 'Redux', 'Node.js', 'MongoDB'],
        image: '/projects/dashboard.jpg',
        liveUrl: 'https://demo-dashboard.example.com',
        githubUrl: 'https://github.com/bipin/ecommerce-dashboard',
        category: 'fullstack',
    },
    {
        id: 3,
        title: 'Weather App',
        description: 'Simple weather app that displays current weather and 5‑day forecast using OpenWeatherMap API.',
        tech: ['JavaScript', 'HTML/CSS', 'API Integration'],
        image: '/projects/weather.jpg',
        liveUrl: 'https://weather.bipinpaudel.com.np',
        githubUrl: 'https://github.com/bipin/weather-app',
        category: 'frontend',
    },
    {
        id: 4,
        title: 'Task Management API',
        description: 'RESTful API for task management with JWT authentication, built with Node.js and Express.',
        tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
        image: '/projects/api.jpg',
        liveUrl: null,
        githubUrl: 'https://github.com/bipin/task-api',
        category: 'backend',
    },
    {
        id: 5,
        title: 'Blog Platform',
        description: 'Full‑stack blog platform where users can write, edit, and comment on posts. Markdown support.',
        tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind'],
        image: '/projects/blog.jpg',
        liveUrl: 'https://blog.bipinpaudel.com.np',
        githubUrl: 'https://github.com/bipin/blog-platform',
        category: 'fullstack',
    },
    {
        id: 6,
        title: 'Real‑time Chat App',
        description: 'Chat application with rooms, direct messages, and typing indicators using Socket.io.',
        tech: ['React', 'Socket.io', 'Node.js', 'CSS Modules'],
        image: '/projects/chat.jpg',
        liveUrl: null,
        githubUrl: 'https://github.com/bipin/chat-app',
        category: 'frontend',
    },
];
const categories = ['all', ...new Set(allProjects.map(p => p.category))];

export default function ProjectGrid() {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredProjects = activeCategory === 'all'
        ? allProjects
        : allProjects.filter(p => p.category === activeCategory);

    return (
        <>
            {/* Filter Buttons */}
            <Row className="mb-4 justify-content-center">
                <Col xs="auto" className="d-flex flex-wrap gap-2 justify-content-center">
                    {categories.map(cat => (
                        <Button
                            key={cat}
                            variant={activeCategory === cat ? 'primary' : 'outline-secondary'}
                            size="sm"
                            onClick={() => setActiveCategory(cat)}
                            className="text-capitalize"
                        >
                            {cat}
                        </Button>
                    ))}
                </Col>
            </Row>

            {/* Projects Grid */}
            <Row xs={1} md={2} lg={3} className="g-4">
                {filteredProjects.map(project => (
                    <Col key={project.id}>
                        {/* ... Your project card JSX, identical to before ... */}
                    </Col>
                ))}
            </Row>
        </>
    );
}