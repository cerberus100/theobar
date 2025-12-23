import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer section">
            <div className="container footer-content">
                <div className="footer-col">
                    <h3>The "O" Bar</h3>
                    <p className="address">
                        141 N Carrollton Ave<br />
                        New Orleans, LA 70119
                    </p>
                    <div className="footer-links">
                        <a href="https://www.google.com/maps/dir/?api=1&destination=141+N+Carrollton+Ave,+New+Orleans,+LA+70119" target="_blank" rel="noopener noreferrer">Get Directions</a>
                    </div>
                </div>

                <div className="footer-col" id="hours">
                    <h3>Hours</h3>
                    <ul className="footer-hours">
                        <li>Mon–Thu: 5pm – 12am</li>
                        <li>Fri–Sat: 5pm – 2am</li>
                        <li>Sun: 5pm – 12am</li>
                    </ul>
                </div>
            </div>

            <div className="container footer-bottom">
                <p>&copy; {year} The "O" Bar. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
