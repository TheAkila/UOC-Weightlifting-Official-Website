import React from 'react';
import { images } from '../../constants';

const AboutUs = () => (
  <div className="flex flex-col items-center justify-start bg-gradient-to-r from-gray-900 to-gray-800 text-white px-4 py-10">
    {/* About Us Section */}
    <div className="text-center max-w-4xl mb-16">
      <h2 className="text-5xl font-extrabold text-orange-500 uppercase mb-4 relative overflow-hidden">
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
    <div className="w-full max-w-4xl mb-12 overflow-hidden rounded-lg shadow-lg">
      <img src={images.aboutus} alt="Our Team" className="w-full h-auto object-cover transform transition-transform duration-500 ease-in-out hover:scale-105" />
    </div>

    {/* Our Mission Section */}
    <div className="text-center max-w-4xl mb-16 px-4">
      <h3 className="text-4xl font-semibold text-orange-500 mb-6">Our Mission</h3>
      <p className="text-lg text-gray-300 leading-relaxed mb-6">
        Our mission is to build a community of passionate athletes who push the boundaries of strength and fitness. 
        With dedication, discipline, and teamwork, we aim to foster growth and excellence in every individual. 
        Together, we will achieve greatness.
      </p>
    </div>

    {/* Team Members Section */}
    <div className="w-full flex flex-col items-center mb-16">
      <h3 className="text-4xl font-semibold text-orange-500 mb-6">Meet Our Team</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="text-center bg-gray-800 rounded-lg p-6 shadow-lg">
          <img src={images.team1} alt="Team Member 1" className="w-40 h-40 rounded-full mx-auto mb-4" />
          <h4 className="text-xl font-semibold text-white">John Doe</h4>
          <p className="text-gray-400">Captain & Trainer</p>
        </div>
        <div className="text-center bg-gray-800 rounded-lg p-6 shadow-lg">
          <img src={images.team2} alt="Team Member 2" className="w-40 h-40 rounded-full mx-auto mb-4" />
          <h4 className="text-xl font-semibold text-white">Jane Smith</h4>
          <p className="text-gray-400">Strength Coach</p>
        </div>
        <div className="text-center bg-gray-800 rounded-lg p-6 shadow-lg">
          <img src={images.team3} alt="Team Member 3" className="w-40 h-40 rounded-full mx-auto mb-4" />
          <h4 className="text-xl font-semibold text-white">Michael Lee</h4>
          <p className="text-gray-400">Athlete</p>
        </div>
      </div>
    </div>

    {/* Achievements Section */}
    <div className="w-full max-w-4xl mb-16 px-4">
      <h3 className="text-4xl font-semibold text-orange-500 mb-6 text-center">Our Achievements</h3>
      <div className="space-y-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h4 className="text-2xl font-semibold text-white">SriLanka University Games Weightlifting Championship 2023</h4>
          <p className="text-gray-300">Our Mens team secured the first place in the National Weightlifting Championship, showcasing our commitment to excellence and strength.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h4 className="text-2xl font-semibold text-white">SriLanka Novices Weightlifting Championship 2023</h4>
          <p className="text-gray-300">Our Mens team secured the second place in the National Weightlifting Championship.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h4 className="text-2xl font-semibold text-white">SriLanka Novices Weightlifting Championship 2024</h4>
          <p className="text-gray-300">Our Mens team secured the first place in the National Weightlifting Championship</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h4 className="text-2xl font-semibold text-white">SriLanka Novices Weightlifting Championship 2024</h4>
          <p className="text-gray-300">Our Womens team secured the first place in the National Weightlifting Championship</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h4 className="text-2xl font-semibold text-white">SriLanka InterUniversity Weightlifting Championship 2024</h4>
          <p className="text-gray-300">Our team secured the first place in the National Weightlifting Championship</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h4 className="text-2xl font-semibold text-white">SriLanka Intermediate Weightlifting Championship 2024</h4>
          <p className="text-gray-300">Our team secured the first place in the National Weightlifting Championship</p>
        </div>

        
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h4 className="text-2xl font-semibold text-white">Community Outreach</h4>
          <p className="text-gray-300">Our team is involved in numerous community outreach programs, encouraging young athletes to pursue their dreams and push beyond their limits.</p>
        </div>
      </div>
    </div>

    {/* Call to Action Section */}
    <div className="w-full text-center bg-gradient-to-r from-gray-900 to-gray-800 py-16">
      <h3 className="text-4xl font-semibold text-white mb-6">Join Us Today!</h3>
      <p className="text-lg text-gray-300 mb-8">Become part of a winning team and push yourself to new heights. Whether you're an athlete or a supporter, your journey begins here.</p>
      <button className="px-8 py-3 bg-orange-500 text-black font-semibold text-lg uppercase rounded-full hover:bg-orange-400 transition-all duration-300 ease-in-out">
        Join the Team
      </button>
    </div>
  </div>
);

export default AboutUs;
