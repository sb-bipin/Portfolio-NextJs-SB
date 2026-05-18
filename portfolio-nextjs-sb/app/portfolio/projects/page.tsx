// src/app/projects/page.tsx
import { Container, Row, Col } from 'react-bootstrap';
import ProjectGrid from '@/components/ProjectGrid'; // Adjust the import path if your folder structure is different

export const metadata = {
    title: 'Projects | Bipin Paudel',
    description: 'Explore my web development projects – from React apps to full‑stack solutions.',
};

export default function ProjectsPage() {
    return (
        <Container className="py-5">
            <Row className="mb-5 text-center">
                <Col>
                    <h1 className="display-4 fw-bold">My Projects</h1>
                    <p className="lead text-muted">
                        A collection of my work – from frontend experiments to full‑stack applications.
                    </p>
                </Col>
            </Row>
            {/* The client-side interactive part is imported here */}
            <ProjectGrid />
            {/* ... Your call-to-action section ... */}
        </Container>
    );
}