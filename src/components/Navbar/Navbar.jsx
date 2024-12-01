import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import { NavLink } from 'react-router-dom'; // Import NavLink
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app_navbar">
      <div className="app_navbar-logo">
        <img src={images.WLlogo} alt="app logo" />
      </div>

      <ul className="app_navbar-links">
        <li className="p_opensans">
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li className="p_opensans">
          <NavLink to="/AboutUs" className="nav-link">About Us</NavLink>
        </li>
        <li className="p_opensans">
          <NavLink to="/Team" className="nav-link"> Team</NavLink>
        </li>
        <li className="p_opensans">
          <NavLink to="/Competitions" className="nav-link">Competitions</NavLink>
        </li>
        <li className="p_opensans">
          <NavLink to="/Gallery" className="nav-link">Gallery</NavLink>
        </li>
        <li className="p_opensans">
          <NavLink to="/News&Updates" className="nav-link">Lift connect</NavLink>
        </li>
        <li className="p_opensans">
          <NavLink to="/ContactUs" className="nav-link">Contact Us</NavLink>
        </li>
      </ul>

      <div className="app_navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="app_navbar-smallscreen_overlay flex_center slide-bottom">
            <MdOutlineRestaurantMenu fontsize={27} className="overlay_close" onClick={() => setToggleMenu(false)} />
            <ul className="app_navbar-smallscreen-links">
              <li className="p_opensans">
                <NavLink to="/" className="nav-link">Home</NavLink>
              </li>
              <li className="p_opensans">
                <NavLink to="/AboutUs" className="nav-link">About Us</NavLink>
              </li>
              <li className="p_opensans">
                <NavLink to="/Team" className="nav-link">Team</NavLink>
              </li>
              <li className="p_opensans">
                <NavLink to="/Competitions" className="nav-link">Competitions</NavLink>
              </li>
              <li className="p_opensans">
                <NavLink to="/Gallery" className="nav-link">Gallery</NavLink>
              </li>
              <li className="p_opensans">
                <NavLink to="/News&Updates" className="nav-link">News & Updates</NavLink>
              </li>
              <li className="p_opensans">
                <NavLink to="/ContactUs" className="nav-link">Contact Us</NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
