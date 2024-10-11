import React from 'react';
import './Header.css';

const Header = ({ onLoginClick }) => {
    return (
        <header className="header">
            <div className="logo">FOTOGRAFIA GELADA</div>
            <div>
            <button className="login-btn" onClick={onLoginClick}>Login</button>
            </div>
        </header>
    );
};

export default Header;
