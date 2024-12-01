import React from 'react';
import { images } from '../../constants';

const AboutUs = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white px-4 py-10">
    {/* About Us Section */}
    <div className="text-center max-w-2xl mb-12">
      <h2 className="text-4xl font-extrabold text-orange-500 uppercase mb-4 relative overflow-hidden">
        About Us
        <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 transform scale-x-0 transition-all duration-500 ease-out group-hover:scale-x-100" />
      </h2>
      <p className="text-lg font-light mb-6 text-gray-300">
        We are the champions, the dedicated weightlifters of UOC, pushing boundaries and lifting to new heights. 
        Our team is built on hard work, perseverance, and strength. Join us and become a part of something special.
      </p>
      <button className="px-8 py-3 bg-orange-500 text-black font-semibold text-lg uppercase rounded-full hover:bg-orange-400 transition-all duration-300 ease-in-out">
        Explore Our Journey
      </button>
    </div>

    {/* About Us Image */}
    <div className="w-full max-w-2xl mb-12 overflow-hidden rounded-lg shadow-lg">
      <img src={images.aboutus} alt="Our Team" className="w-full h-auto object-cover transform transition-transform duration-500 ease-in-out hover:scale-105" />
    </div>
  </div>
);

export default AboutUs;
