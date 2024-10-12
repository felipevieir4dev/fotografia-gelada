import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ImageGallery from './components/ImageGallery';
import LoginModal from './components/LoginModal';
import './App.css';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLogin = () => {
    setShowLoginModal(true);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLoginModal(false);
  };

  return (
    <div className="App">
      <Header onLoginClick={handleLogin} />
      <ImageGallery isLoggedIn={isLoggedIn} />
      <Footer />
      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} onLoginSuccess={handleLoginSuccess} />}
    </div>
  );
}

export default App;
