import { useState } from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import './Home.css';

const Home = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };



    // Accurate Schema Data
    const schema = {
        "@context": "https://schema.org",
        "@type": "BarOrPub",
        "name": "The O Bar",
        "description": "Refined cocktail lounge in New Orleans. 141 N Carrollton Ave.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "141 N Carrollton Ave",
            "addressLocality": "New Orleans",
            "addressRegion": "LA",
            "postalCode": "70119",
            "addressCountry": "US"
        },
        "openingHours": [
            "Mo-Th 17:00-00:00",
            "Fr-Sa 17:00-02:00",
            "Su 17:00-00:00"
        ]
    };

    return (
        <Layout>
            <SEO
                title="The O Bar | New Orleans Cocktail Lounge"
                description="Refined cocktail lounge in New Orleans. Open 5 PM nightly at 141 N Carrollton Ave."
                canonical="/"
                schema={[schema]}
            />

            {/* Hero Section */}
            <section className="hero-strict">
                <div className="hero-overlay-strict"></div>
                <div className="hero-content-strict">
                    <h1><span style={{ color: 'var(--color-accent)' }}>The "O" Bar</span></h1>
                    <p className="hero-subtitle-strict">A cocktail bar on North Carrollton. Open 5 PM nightly.</p>

                    <div className="hero-buttons-strict">
                        <a href="https://www.google.com/maps/dir/?api=1&destination=141+N+Carrollton+Ave,+New+Orleans,+LA+70119" target="_blank" rel="noopener noreferrer" className="btn-outline-strict">Get Directions</a>
                        <a href="#hours" className="btn-outline-strict">View Hours</a>
                    </div>
                </div>


            </section>

            {/* Signature Experience */}
            <section className="section-experience-strict">
                <h2>Signature Experience</h2>
                <div className="experience-grid-strict">
                    <div className="experience-card-strict">
                        <div className="card-img-strict" style={{ backgroundImage: "url('/assets/cocktail.webp')" }}></div>
                        <h3>Cocktails</h3>
                        <p>Craft Cocktails and<br />Classic Pours</p>
                    </div>
                    <div className="experience-card-strict">
                        <div className="card-img-strict" style={{ backgroundImage: "url('/assets/champagne.webp')" }}></div>
                        <h3>Champagne</h3>
                        <p>A short list.<br />Good bottles, opened late.</p>
                    </div>
                    <div className="experience-card-strict">
                        <div className="card-img-strict" style={{ backgroundImage: "url('/assets/music.webp')" }}></div>
                        <h3>Curated Music</h3>
                        <p>Hip-Hop, R&B, and House.</p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section" style={{ padding: '80px 0', backgroundColor: '#0a0a0a' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h3 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem', fontFamily: 'var(--font-heading)', color: 'var(--color-accent)' }}>FAQ</h3>
                    <div className="faq-list-strict">
                        <div className={`faq-item-strict ${openFaq === 0 ? 'active' : ''}`} onClick={() => toggleFaq(0)}>
                            <div className="faq-q-strict">
                                <span>Do you take reservations?</span>
                                <span className="faq-toggle-strict">{openFaq === 0 ? '−' : '+'}</span>
                            </div>
                            {openFaq === 0 && (
                                <div className="faq-a-strict">
                                    <p>We are open seating. Just walk in.</p>
                                </div>
                            )}
                        </div>
                        <div className={`faq-item-strict ${openFaq === 1 ? 'active' : ''}`} onClick={() => toggleFaq(1)}>
                            <div className="faq-q-strict">
                                <span>Is there a dress code?</span>
                                <span className="faq-toggle-strict">{openFaq === 1 ? '−' : '+'}</span>
                            </div>
                            {openFaq === 1 && (
                                <div className="faq-a-strict">
                                    <p>Come as you are. We prefer smart casual.</p>
                                </div>
                            )}
                        </div>
                        <div className={`faq-item-strict ${openFaq === 2 ? 'active' : ''}`} onClick={() => toggleFaq(2)}>
                            <div className="faq-q-strict">
                                <span>Where can I park?</span>
                                <span className="faq-toggle-strict">{openFaq === 2 ? '−' : '+'}</span>
                            </div>
                            {openFaq === 2 && (
                                <div className="faq-a-strict">
                                    <p>Neighborhood parking around the establishment.</p>
                                </div>
                            )}
                        </div>
                        <div className={`faq-item-strict ${openFaq === 3 ? 'active' : ''}`} onClick={() => toggleFaq(3)}>
                            <div className="faq-q-strict">
                                <span>Do you host private events?</span>
                                <span className="faq-toggle-strict">{openFaq === 3 ? '−' : '+'}</span>
                            </div>
                            {openFaq === 3 && (
                                <div className="faq-a-strict">
                                    <p>We host private gatherings. Contact us for details.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    );
};

export default Home;
