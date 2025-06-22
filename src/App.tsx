import XOGame from './XOGame';
import { Analytics } from "@vercel/analytics/react";
import AdBanner from './AdBanner';
import {  Route, Routes } from "react-router-dom";
import About from './About';
import PrivacyPolicy from './PrivacyPolicy';
import Contact from './Contact';
function App() {
  return (
    <>
      <Routes>
       
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
 
     <Analytics />
      <XOGame />
      <AdBanner />
    </>
  );
}

export default App;
