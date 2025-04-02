
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal';
import FacilityPage from './pages/FacilityPage';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import FacilityDetail from './pages/FacilityDetail';

const App = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar 
          onLoginClick={() => setShowLoginModal(true)}
          onSignupClick={() => setShowSignupModal(true)}
        />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/facilities/:category" element={<FacilityPage />} />
            <Route path="/facility/:id" element={<FacilityDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        
        {showLoginModal && (
          <LoginModal onClose={() => setShowLoginModal(false)} />
        )}
        
        {showSignupModal && (
          <SignupModal onClose={() => setShowSignupModal(false)} />
        )}
      </div>
    </Router>
  );
};

export default App;
