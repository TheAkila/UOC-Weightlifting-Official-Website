import React from 'react';

import { AboutUs, Chef, Gallery, Header } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
 
    <Chef />
  
 
    <Gallery />

 
  </div>
);

export default App;
