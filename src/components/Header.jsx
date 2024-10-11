import React from 'react';
import './Header.css';

const Header = ({ onLoginClick }) => {
    return (
        <header className="header">
            <div className="logo">FOTOGRAFIA GELADA</div>
            <button className="login-btn" onClick={onLoginClick}>Login</button>
        </header>
    );
};

export default Header;
