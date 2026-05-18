// src/components/ContactForm.tsx
'use client';

import { useState, FormEvent } from 'react';
import { Form, Button, Alert, Card, Row, Col } from 'react-bootstrap';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMsg('');

        if (!formData.name || !formData.email || !formData.message) {
            setStatus('error');
            setErrorMsg('Please fill in all fields.');
            return;
        }
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            setStatus('error');
            setErrorMsg('Please enter a valid email address.');
            return;
        }

        // Mock submission (replace with real endpoint later)
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log('Form submitted:', formData);
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch {
            setStatus('error');
            setErrorMsg('Something went wrong. Please try again later.');
        }
    };

    return (
        <Card className="shadow-sm border-0 rounded-4 p-4">
            <Card.Body>
                {status === 'success' && (
                    <Alert variant="success" onClose={() => setStatus('idle')} dismissible>
                        Thank you! Your message has been sent. I’ll get back to you soon.
                    </Alert>
                )}
                {status === 'error' && (
                    <Alert variant="danger" onClose={() => setStatus('idle')} dismissible>
                        {errorMsg}
                    </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-4" controlId="name">
                        <Form.Label>Your Name *</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                            disabled={status === 'loading'}
                        />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="email">
                        <Form.Label>Email Address *</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="hello@example.com"
                            required
                            disabled={status === 'loading'}
                        />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="message">
                        <Form.Label>Message *</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            placeholder="Tell me about your project or idea..."
                            required
                            disabled={status === 'loading'}
                        />
                    </Form.Group>

                    <div className="d-grid gap-2">
                        <Button
                            variant="primary"
                            type="submit"
                            size="lg"
                            disabled={status === 'loading'}
                        >
                            {status === 'loading' ? 'Sending...' : 'Send Message'}
                        </Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    );
}