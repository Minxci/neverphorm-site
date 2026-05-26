
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'sonner';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import ContactUsPage from './pages/ContactUsPage.jsx';
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Philosophy from "./pages/Culture.jsx";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Toaster position="bottom-right" theme="dark" richColors />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/culture" element={<Culture />} />
      </Routes>
    </Router>
  );
}

export default App;
