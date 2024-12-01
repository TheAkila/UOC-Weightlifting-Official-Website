import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AboutUs, Team, Gallery, Header,ContactUs } from './container';
import { Navbar } from './components'; 
import './App.css';
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
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>
);

export default App;
