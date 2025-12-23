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

                    {/* Oysters */}
                    <div className="menu-section">
                        <h2 className="menu-category-title">Oysters</h2>
                        <div className="menu-item">
                            <div className="menu-item-header">
                                <span>Raw Oysters</span>
                                <span className="menu-price">Market Price</span>
                            </div>
                            <p className="menu-item-desc">Served raw on the half shell with house made cocktail sauce, lemon, and horseradish. Ask your server for today's varieties.</p>
                            <p className="menu-item-desc" style={{ fontSize: '0.8rem', marginTop: '0.5rem', fontStyle: 'italic' }}>*Consuming raw or undercooked meats, poultry, seafood, or eggs may increase risk of foodborne illness especially if you have certain medical conditions.</p>
                        </div>
                        <div className="menu-item">
                            <div className="menu-item-header">
                                <span>Big Easy Oysters</span>
                                <span className="menu-price">$18</span>
                            </div>
                            <p className="menu-item-desc">1/2 Dozen of freshly shucked oysters, oven-baked in a rich blend of melted butter, garlic, and our signature house seasoning. Finished with a golden crust of Parmesan cheese and a touch of fresh parsley. (+$6 Prosciutto Wrapped)</p>
                        </div>
                    </div>

                    {/* Flatbreads */}
                    <div className="menu-section">
                        <h2 className="menu-category-title">Flatbreads</h2>
                        <div className="menu-item">
                            <div className="menu-item-header">
                                <span>Cheese</span>
                                <span className="menu-price">$14</span>
                            </div>
                            <p className="menu-item-desc">The traditional mozzarella pizza — simple, cheesy, and delicious.</p>
                        </div>
                        <div className="menu-item">
                            <div className="menu-item-header">
                                <span>Margherita</span>
                                <span className="menu-price">$16</span>
                            </div>
                            <p className="menu-item-desc">A twist on tradition with mozzarella, burrata, basil, and cherry tomatoes.</p>
                        </div>
                        <div className="menu-item">
                            <div className="menu-item-header">
                                <span>Pepperoni</span>
                                <span className="menu-price">$16</span>
                            </div>
                            <p className="menu-item-desc">Spicy pepperoni and zesty marinara with mozzarella.</p>
                        </div>
                        <div className="menu-item">
                            <div className="menu-item-header">
                                <span>Prosciutto & Arugula</span>
                                <span className="menu-price">$18</span>
                            </div>
                            <p className="menu-item-desc">A refined balance of garlic butter, salty prosciutto, peppery arugula, and sweet balsamic.</p>
                        </div>
                    </div>

                    {/* Specialties */}
                    <div className="menu-section">
                        <h2 className="menu-category-title">Specialties</h2>
                        <div className="menu-item">
                            <div className="menu-item-header">
                                <span>Crab and Artichoke Dip</span>
                                <span className="menu-price">$15</span>
                            </div>
                            <p className="menu-item-desc">Lump crabmeat and tender artichoke hearts with a creamy blend of cheeses. Baked until golden and served with toasted crostini.</p>
                        </div>
                        <div className="menu-item">
                            <div className="menu-item-header">
                                <span>Shrimp Cocktail</span>
                                <span className="menu-price">$16</span>
                            </div>
                            <p className="menu-item-desc">Chilled jumbo shrimp served with zesty cocktail sauce.</p>
                        </div>
                        <div className="menu-item">
                            <div className="menu-item-header">
                                <span>Oven Roasted Shrimp</span>
                                <span className="menu-price">$18</span>
                            </div>
                            <p className="menu-item-desc">Succulent shrimp oven-roasted in garlic infused butter. Finished with fresh herbs and a lemon twist.</p>
                        </div>
                        <div className="menu-item">
                            <div className="menu-item-header">
                                <span>Truffle Parmesan Fries</span>
                                <span className="menu-price">$10</span>
                            </div>
                            <p className="menu-item-desc">Crispy oven-baked fries tossed in truffle oil and grated parmesan, served with housemade aioli.</p>
                        </div>
                        <div className="menu-item">
                            <div className="menu-item-header">
                                <span>Cajun Spicy Fries</span>
                                <span className="menu-price">$9</span>
                            </div>
                            <p className="menu-item-desc">Crispy oven-baked Cajun style fries with spicy sauce. (+$3 Cheese / +$3 Prosciutto)</p>
                        </div>
                        <div className="menu-item">
                            <div className="menu-item-header">
                                <span>Bavarian Pretzel</span>
                                <span className="menu-price">$7</span>
                            </div>
                            <p className="menu-item-desc">Oven baked, buttered and salted pretzel served with Dijon mustard and queso.</p>
                        </div>
                    </div>

                    {/* Specialty Cocktails */}
                    <div className="menu-section">
                        <h2 className="menu-category-title">Specialty Cocktails</h2>
                        <div className="menu-item">
                            <div className="menu-item-header">
                                <span>Bayou Belle</span>
                                <span className="menu-price">$17</span>
                            </div>
                            <p className="menu-item-desc">Watermelon, Lime, Tito's Handmade Vodka. Juicy watermelon and bright lime blend with chilled Tito's.</p>
                        </div>
                        <div className="menu-item">
                            <div className="menu-item-header">
                                <span>Bayou Siren</span>
                                <span className="menu-price">$17</span>
                            </div>
                            <p className="menu-item-desc">Tequila, Blueberries, Coconut, Citrus. Tequila, blueberries, coconut, and citrus swirl into a tropical blend.</p>
                        </div>
                        <div className="menu-item">
                            <div className="menu-item-header">
                                <span>Midnight Magnolia</span>
                                <span className="menu-price">$18</span>
                            </div>
                            <p className="menu-item-desc">Gin, Strawberry, Elderflower, Lemon. Muddled strawberry and lemon laced with elderflower liqueur.</p>
                        </div>
                    </div>

                    {/* Decadent Ends */}
                    <div className="menu-section">
                        <h2 className="menu-category-title">Decadent Ends</h2>
                        <div className="menu-item">
                            <div className="menu-item-header">
                                <span>S'mores Martini</span>
                                <span className="menu-price">$17</span>
                            </div>
                            <p className="menu-item-desc">Marshmallow and chocolate with a graham cracker rim.</p>
                        </div>
                        <div className="menu-item">
                            <div className="menu-item-header">
                                <span>Oreo Cookie Dream Martini</span>
                                <span className="menu-price">$17</span>
                            </div>
                            <p className="menu-item-desc">Espresso kick with Oreo flavor and vanilla hints.</p>
                        </div>
                    </div>

                    {/* Wines */}
                    <div className="menu-section">
                        <h2 className="menu-category-title">Wines</h2>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '4rem',
                            maxWidth: '900px',
                            margin: '0 auto'
                        }}>
                            <div>
                                <h4 style={{ color: 'var(--color-accent)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Cabernet</h4>
                                <div className="menu-item-header"><span>Prati by Louis Martin</span> <span className="menu-price">$13/46</span></div>
                                <div className="menu-item-header"><span>Justin</span> <span className="menu-price">$17/60</span></div>

                                <h4 style={{ color: 'var(--color-accent)', marginBottom: '1rem', marginTop: '1.5rem', fontFamily: 'var(--font-heading)' }}>Pinot Noir</h4>
                                <div className="menu-item-header"><span>Meomi</span> <span className="menu-price">$12/42</span></div>
                                <div className="menu-item-header"><span>J Vineyards</span> <span className="menu-price">$15/52</span></div>

                                <h4 style={{ color: 'var(--color-accent)', marginBottom: '1rem', marginTop: '1.5rem', fontFamily: 'var(--font-heading)' }}>Chardonnay</h4>
                                <div className="menu-item-header"><span>J Vineyards</span> <span className="menu-price">$16/56</span></div>
                                <div className="menu-item-header"><span>Favorite Neighbor</span> <span className="menu-price">$17/60</span></div>

                                <h4 style={{ color: 'var(--color-accent)', marginBottom: '1rem', marginTop: '1.5rem', fontFamily: 'var(--font-heading)' }}>Red Blends</h4>
                                <div className="menu-item-header"><span>Cht St Michelle Indian Wells</span> <span className="menu-price">$13/46</span></div>
                                <div className="menu-item-header"><span>Antinori Villa Rosso</span> <span className="menu-price">$13/46</span></div>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--color-accent)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Pinot Grigio</h4>
                                <div className="menu-item-header"><span>Ruffino Aqua di Venus</span> <span className="menu-price">$12/46</span></div>
                                <div className="menu-item-header"><span>Girlan</span> <span className="menu-price">$15/53</span></div>

                                <h4 style={{ color: 'var(--color-accent)', marginBottom: '1rem', marginTop: '1.5rem', fontFamily: 'var(--font-heading)' }}>Sauvignon Blanc</h4>
                                <div className="menu-item-header"><span>Whitehaven</span> <span className="menu-price">$13/46</span></div>
                                <div className="menu-item-header"><span>Sancerre</span> <span className="menu-price">$90</span></div>

                                <h4 style={{ color: 'var(--color-accent)', marginBottom: '1rem', marginTop: '1.5rem', fontFamily: 'var(--font-heading)' }}>Sparkling</h4>
                                <div className="menu-item-header"><span>LaMarca Prosecco</span> <span className="menu-price">$12/42</span></div>
                                <div className="menu-item-header"><span>LaMarca Prosecco Rose</span> <span className="menu-price">$12/42</span></div>
                                <div className="menu-item-header"><span>Chandon Brut</span> <span className="menu-price">$12/42</span></div>

                                <h4 style={{ color: 'var(--color-accent)', marginBottom: '1rem', marginTop: '1.5rem', fontFamily: 'var(--font-heading)' }}>Rose</h4>
                                <div className="menu-item-header"><span>Hampton Water</span> <span className="menu-price">$13/46</span></div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </Layout>
    );
};

export default Menu;
