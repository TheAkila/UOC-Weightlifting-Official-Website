import React,{useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md'

import images from '../../constants/images';
import './Navbar.css';


const Navbar = () => {

  const [toggleMenu,setToggleMenu] = useState(false);

  return(
  <nav className="app_navbar">
    <div className='app_navbar-logo'>
      <img src={images.WLlogo} alt="app logo" />
       
    </div>

    <ul className="app_navbar-links">
      <li className='p_opensans'><a href="#home">Home</a></li>
      <li className='p_opensans'><a href="#About Us">About Us</a></li>
      <li className='p_opensans'><a href="#Team">Team</a></li>
      <li className='p_opensans'><a href="#Competitions">Competitions</a></li>
      <li className='p_opensans'><a href="#Gallery">Gallery</a></li>
      <li className='p_opensans'><a href="#News & Updates">News & Updates</a></li>
      <li className='p_opensans'><a href="#Contact Us">Contact Us</a></li>
    </ul>

     <div className="app_navbar-smallscreen">
      <GiHamburgerMenu color= "#fff" fontSize={27} onClick={() =>setToggleMenu(true)}/>

      
       {toggleMenu && (
        <div className="app_navbar-smallscreen_overlay flex_center slide-bottom" >
          <MdOutlineRestaurantMenu fontsize={27} className="overlay_close" onClick={() => setToggleMenu(false)} />
          <ul className="app_navbar-smallscreen-links">
          <li className='p_opensans'><a href="#home">Home</a></li>
      <li className='p_opensans'><a href="#About Us">About Us</a></li>
      <li className='p_opensans'><a href="#Team">Team</a></li>
      <li className='p_opensans'><a href="#Competitions">Competitions</a></li>
      <li className='p_opensans'><a href="#Gallery">Gallery</a></li>
      <li className='p_opensans'><a href="#News & Updates">News & Updates</a></li>
      <li className='p_opensans'><a href="#Contact Us">Contact Us</a></li>
          </ul>
        </div>
       )}
     


     </div>
  </nav>
);
}

export default Navbar;
