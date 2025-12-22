import Layout from '../components/Layout';
import SEO from '../components/SEO';
import './Home.css'; // Reusing some styles

const About = () => {
    return (
        <Layout>
            <SEO
                title="About"
                description="The O Bar is a cocktail lounge on North Carrollton Avenue in New Orleans. It’s a relaxed space for drinks, good music, and easy nights out."
            />

            <div className="section" style={{ paddingTop: '150px' }}>
                <div className="container" style={{ maxWidth: '1200px' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '4rem',
                        alignItems: 'center'
                    }} className="about-grid">

                        {/* Text Column */}
                        <div style={{ textAlign: 'left' }}>
                            <h1 className="mb-medium">Our Story</h1>

                            <div style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
                                <p className="mb-medium">
                                    The "O" Bar is a cocktail lounge on North Carrollton Avenue in New Orleans. It’s a place to sit down, order a drink, and stay a while. The room stays calm, the lighting stays low, and the bar is meant to feel familiar even on a first visit.
                                </p>

                                <p>
                                    Drinks are straightforward, the music sets the tone without taking over, and the space stays comfortable as the night moves along. It’s built for conversation, late evenings, and nights that don’t need much planning.
                                </p>
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="about-image-container">
                            <img
                                src="/assets/about_cocktail.jpg"
                                alt="O Bar Cocktail Detail"
                                style={{
                                    width: '100%',
                                    borderRadius: '4px',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                                    display: 'block'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .about-grid {
                        grid-template-columns: 1fr !important;
                        gap: 3rem !important;
                    }
                    .about-image-container {
                        order: -1;
                    }
                }
            `}</style>
        </Layout>
    );
};

export default About;
