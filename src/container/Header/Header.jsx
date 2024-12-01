import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div
    className="relative h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${images.team})` }}
    id="home"
  >
    {/* Dark overlay to make text stand out */}
    <div className="absolute inset-0 bg-black bg-opacity-60"></div>

    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 md:px-12">
      {/* SubHeading */}
      <SubHeading title="Strength In Unity" />

      {/* Main header title */}
      <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-wide leading-tight mb-4 text-shadow-lg">
        Welcome to UOC Weightlifting
      </h1>

      {/* Description text */}
      <p className="text-lg md:text-2xl font-light mb-6">
        Join the champions and push your limits with the best team at UOC.
      </p>

      {/* Explore Button */}
      <button
        type="button"
        className="bg-yellow-500 text-black hover:bg-yellow-600 py-2 px-8 rounded-full font-semibold text-lg uppercase transition-all duration-300 ease-in-out"
      >
        Explore Us
      </button>
    </div>
  </div>
);

export default Header;
