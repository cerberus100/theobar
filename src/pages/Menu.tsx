import Layout from '../components/Layout';
import SEO from '../components/SEO';
import './Menu.css';

const Menu = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Menu",
        "name": "The O Bar Menu",
        "url": "https://theobarnola.com/menu",
        "hasMenuSection": [
            {
                "@type": "MenuSection",
                "name": "Signature Cocktails",
                "hasMenuItem": [
                    { "@type": "MenuItem", "name": "The O Martini", "price": "18" },
                    { "@type": "MenuItem", "name": "Golden Hour", "price": "16" }
                ]
            }
        ]
    };

    return (
        <Layout>
            <SEO
                title="Menu"
                description="Explore our curated selection of signature cocktails, premium champagne, and rare spirits."
                canonical="/menu"
                schema={schema}
            />

            {/* Hero */}
            <div className="menu-hero">
                <div className="text-center">
                </div>
            </div>

            <div className="section">
                <div className="container narrow">

                    {/* Signatures */}
                    <div className="menu-section">
                        <h2 className="menu-category-title">Signature Cocktails</h2>
                        <div className="menu-item">
                            <div className="menu-item-header">
                                <span>The "O" Martini</span>
                                <span className="menu-price">$18</span>
                            </div>
                            <p className="menu-item-desc">Grey Goose Vodka or Hendrick’s Gin, dry vermouth rinse, blue cheese stuffed olive, lemon twist.</p>
                        </div>
                        <div className="menu-item">
                            <div className="menu-item-header">
                                <span>Golden Hour</span>
                                <span className="menu-price">$16</span>
                            </div>
                            <p className="menu-item-desc">Buffalo Trace Bourbon, honey-saffron syrup, lemon juice, aromatic bitters, gold flake.</p>
                        </div>
                        <div className="menu-item">
                            <div className="menu-item-header">
                                <span>Mid-City Negroni</span>
                                <span className="menu-price">$15</span>
                            </div>
                            <p className="menu-item-desc">Botanist Gin, Campari, Carpano Antica, orange peel, smoked rosemary.</p>
                        </div>
                        <div className="menu-item">
                            <div className="menu-item-header">
                                <span>Velvet Espresso</span>
                                <span className="menu-price">$16</span>
                            </div>
                            <p className="menu-item-desc">Ketel One Vodka, fresh espresso, Kahlúa, vanilla bean.</p>
                        </div>
                    </div>

                    {/* Champagne */}
                    <div className="menu-section">
                        <h2 className="menu-category-title">Champagne & Sparkling</h2>
                        <div className="menu-item">
                            <div className="menu-item-header">
                                <span>Veuve Clicquot Yellow Label</span>
                                <span className="menu-price">$28 / $130</span>
                            </div>
                            <p className="menu-item-desc">Brut, Reims, France</p>
                        </div>
                        <div className="menu-item">
                            <div className="menu-item-header">
                                <span>Moët & Chandon Imperial</span>
                                <span className="menu-price">$24 / $110</span>
                            </div>
                            <p className="menu-item-desc">Brut, Épernay, France</p>
                        </div>
                        <div className="menu-item">
                            <div className="menu-item-header">
                                <span>La Marca Prosecco</span>
                                <span className="menu-price">$12 / $48</span>
                            </div>
                            <p className="menu-item-desc">Veneto, Italy</p>
                        </div>
                        <div className="menu-item">
                            <div className="menu-item-header">
                                <span>Dom Pérignon 2012</span>
                                <span className="menu-price">$450 (Btl)</span>
                            </div>
                            <p className="menu-item-desc">Epernay, France</p>
                        </div>
                    </div>

                    {/* Spirits */}
                    <div className="menu-section">
                        <h2 className="menu-category-title">Selected Spirits</h2>
                        <div className="menu-grid">
                            <div>
                                <h4 style={{ color: 'var(--color-accent)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Whiskey & Bourbon</h4>
                                <div className="menu-item-header"><span>Macallan 12yr</span> <span className="menu-price">$18</span></div>
                                <div className="menu-item-header"><span>Blanton's</span> <span className="menu-price">$22</span></div>
                                <div className="menu-item-header"><span>Woodford Reserve</span> <span className="menu-price">$14</span></div>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--color-accent)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Tequila & Mezcal</h4>
                                <div className="menu-item-header"><span>Don Julio 1942</span> <span className="menu-price">$38</span></div>
                                <div className="menu-item-header"><span>Clase Azul Reposado</span> <span className="menu-price">$42</span></div>
                                <div className="menu-item-header"><span>Casamigos Blanco</span> <span className="menu-price">$14</span></div>
                            </div>
                        </div>
                    </div>

                    <p className="menu-note">Selection and vintage subject to change.</p>

                </div>
            </div>
        </Layout>
    );
};

export default Menu;
