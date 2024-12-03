import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AboutUs, Team, Gallery, Header,ContactUs,Competitions } from './container';
import { Navbar,PopupModal } from './components'; 
import Footer from './components/Footer/FooterOverlay';


const App = () => (
  <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Header />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/ContactUs" element={<ContactUs />} /> 
        <Route path="/Competitions" element={<Competitions />} />  
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>
);

export default App;
