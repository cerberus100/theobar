import { useState, type FormEvent } from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import SEO from '../components/SEO';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        // Create mailto link with pre-filled data
        const subject = encodeURIComponent(`Inquiry from ${formData.name}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\n\nMessage:\n${formData.message}`
        );

        window.location.href = `mailto:admin@o-nola.com?subject=${subject}&body=${body}`;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <Layout>
            <SEO
                title="Contact"
                description="Contact The O Bar for inquiries and reservations. Visit us at 141 N Carrollton Ave, New Orleans."
            />

            <div className="section" style={{ paddingTop: '150px' }}>
                <div className="container">
                    <h1 className="mb-large" style={{ textAlign: 'center' }}>Get In Touch</h1>

                    {/* Contact Form */}
                    <div style={{ maxWidth: '600px', margin: '0 auto 4rem' }}>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-accent)', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
                                    NAME *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(212, 175, 55, 0.3)',
                                        color: 'var(--color-text)',
                                        fontSize: '1rem',
                                        fontFamily: 'inherit'
                                    }}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-accent)', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
                                    EMAIL *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(212, 175, 55, 0.3)',
                                        color: 'var(--color-text)',
                                        fontSize: '1rem',
                                        fontFamily: 'inherit'
                                    }}
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-accent)', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
                                    PHONE
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(212, 175, 55, 0.3)',
                                        color: 'var(--color-text)',
                                        fontSize: '1rem',
                                        fontFamily: 'inherit'
                                    }}
                                />
                            </div>

                            <div>
                                <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-accent)', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
                                    MESSAGE *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={6}
                                    value={formData.message}
                                    onChange={handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(212, 175, 55, 0.3)',
                                        color: 'var(--color-text)',
                                        fontSize: '1rem',
                                        fontFamily: 'inherit',
                                        resize: 'vertical'
                                    }}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn"
                                style={{
                                    padding: '1rem 2rem',
                                    background: 'transparent',
                                    border: '2px solid var(--color-accent)',
                                    color: 'var(--color-accent)',
                                    fontSize: '0.9rem',
                                    letterSpacing: '0.1em',
                                    textTransform: 'uppercase',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    fontFamily: 'inherit'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'var(--color-accent)';
                                    e.currentTarget.style.color = 'var(--color-bg)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.color = 'var(--color-accent)';
                                }}
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Visit Us Section */}
                    <div className="grid-2-col-wide" style={{ marginTop: '4rem' }}>
                        <div style={{ alignSelf: 'center' }}>
                            <h2 className="mb-manual">Visit Us</h2>

                            <div className="contact-details mb-medium">
                                <h3 className="mb-manual">Address</h3>
                                <p className="mb-medium" style={{ color: '#ccc' }}>
                                    141 N Carrollton Ave<br />
                                    New Orleans, LA 70119
                                </p>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <Button to="https://maps.google.com/?q=141+N+Carrollton+Ave,+New+Orleans,+LA+70119">Google Maps</Button>
                                <Button to="https://maps.apple.com/?q=141+N+Carrollton+Ave,+New+Orleans,+LA+70119">Apple Maps</Button>
                            </div>

                            <div style={{ marginTop: '3rem' }}>
                                <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>Follow us on Instagram</p>
                                <a href="https://instagram.com/the_o_nola" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)', fontSize: '1.2rem' }}>@the_o_nola</a>
                            </div>
                        </div>

                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.634739564614!2d-90.09986322359487!3d29.97548762018269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620a5c1c0c0c0c1%3A0x1234567890abcdef!2s141%20N%20Carrollton%20Ave%2C%20New%20Orleans%2C%20LA%2070119!5e0!3m2!1sen!2sus!4v1703060000000!5m2!1sen!2sus"
                                width="100%"
                                height="500"
                                style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
