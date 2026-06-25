
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'sonner';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import ContactUsPage from './pages/ContactUsPage.jsx';
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Culture from "./pages/Culture.jsx";
import Updates from "./pages/Updates.jsx";
import Games from "./pages/Games.jsx";
import Mobile from "./pages/Mobile.jsx";
import VecPulse from "@/pages/Mobile/VecPulse.jsx";

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
        <Route path="/games" element={<Games />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/mobile" element={<Mobile />} />

        <Route path="/mobile/vecpulse" element={<VecPulse />} />
      </Routes>
    </Router>
  );
}

export default App;
