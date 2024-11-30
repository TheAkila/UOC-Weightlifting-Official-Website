import React from 'react';
import { images } from '../../constants';
import './SubHeading.css'; // Add a separate CSS file for this component if needed

const SubHeading = ({ title }) => (
  <div className="subheading-container">
    <p className="p_cormorant subheading-text">{title}</p>

  </div>
);

export default SubHeading;
