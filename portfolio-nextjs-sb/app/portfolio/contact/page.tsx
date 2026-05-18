// src/app/contact/page.tsx
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from '@/components/ContactForm';

export const metadata = {
    title: 'Contact Me | Bipin Paudel',
    description: 'Get in touch with Bipin Paudel for collaborations, freelance projects, or just a friendly hello.',
};

export default function ContactPage() {
    return (
        <Container className="py-5">
            <Row className="mb-5 text-center">
                <Col>
                    <h1 className="display-4 fw-bold">Get In Touch</h1>
                    <p className="lead text-muted">
                        I’d love to hear from you. Whether it’s a project, a question, or just a hello.
                    </p>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col lg={8}>
                    <ContactForm />
                </Col>
            </Row>

            <Row className="mt-5 text-center">
                <Col md={4} className="mb-3">
                    <div className="p-3 bg-light rounded-4">
                        <h5>📧 Email</h5>
                        <a href="mailto:bipin@example.com">bipin@example.com</a>
                    </div>
                </Col>
                <Col md={4} className="mb-3">
                    <div className="p-3 bg-light rounded-4">
                        <h5>📱 Social</h5>
                        <a href="https://github.com/bipin" target="_blank" rel="noopener noreferrer">GitHub</a>{' '}
                        <span className="mx-1">•</span>{' '}
                        <a href="https://linkedin.com/in/bipin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </Col>
                <Col md={4} className="mb-3">
                    <div className="p-3 bg-light rounded-4">
                        <h5>📍 Location</h5>
                        <span>Pokhara, Nepal</span>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}