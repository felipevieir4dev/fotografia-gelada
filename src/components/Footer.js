import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="logo">FOTOGRAFIA GELADA</div>
            <div className="social-icons">
                <img src="twitter.svg" alt="Twitter" />
                <img src="instagram.svg" alt="Instagram" />
                <img src="youtube.svg" alt="YouTube" />
                <img src="tiktok.svg" alt="TikTok" />
            </div>
            <p>Copyright-2024</p>
        </footer>
    );
};

export default Footer;
