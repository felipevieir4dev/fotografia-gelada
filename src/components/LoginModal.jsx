import React, { useState } from 'react';
import './LoginModal.css';

const LoginModal = ({ onClose, onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Aqui você pode fazer a validação real de login
        if (email === 'user@example.com' && password === 'password') {
            onLoginSuccess();
        } else {
            alert('Credenciais inválidas');
        }
    };

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <h2>Login</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="modal-actions">
                    <button onClick={onClose}>Cancelar</button>
                    <button onClick={handleLogin}>Entrar</button>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
