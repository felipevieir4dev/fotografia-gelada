import React, { useState } from 'react';
import './LoginModal.css';

const LoginModal = ({ onClose, onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (!email || !email.includes('@') || !email.includes('.')) {
            alert('Por favor, insira um email válido.');
            return;
        }

        if (password.length < 6) {
            alert('A senha deve ter pelo menos 6 caracteres.');
            return;
        }

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
                    <button id='cancelar' onClick={onClose}>Cancelar</button>
                    <button id='entrar' onClick={handleLogin}>Entrar</button>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
