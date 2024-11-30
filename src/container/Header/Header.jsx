import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app_header app_wrapper section_padding" id="home">
    <div className="app_wrapper_info">
      <SubHeading title="Strength In Unity" />
      <h1 className="app_header-h1">Welcome to UOC Weightlifting</h1>
      <p className="p_opensans" style={{ margin: '2rem 0' }}>
        Join the champions and push your limits with the best team at UOC.
      </p>
      <button type="button" className="custom_button">
        Explore Us
      </button>
    </div>
    <div className="app_wrapper_img">
      <img src={images.team} alt="team img" />
    </div>
  </div>
);

export default Header;
