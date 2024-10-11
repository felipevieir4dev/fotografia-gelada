import React from 'react';
import './Footer.css';
import X from '../assets/x.svg'
import Instagram from '../assets/instagram.svg';
import Youtube from '../assets/youtube.svg';
import TikTok from '../assets/tiktok.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="logo">FOTOGRAFIA GELADA</div>
            <div className="social-icons">
                <img src={X} alt="X" />
                <img src={Instagram} alt="Instagram" />
                <img src={Youtube} alt="YouTube" />
                <img src={TikTok} alt="TikTok" />
            </div>
            <p>Copyright-2024</p>
        </footer>
    );
};

export default Footer;
