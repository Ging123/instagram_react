import React from 'react';
import instagramLogo from '../../../assets/Instagram-Logo.png';
import userImage from "../../../assets/user.jpg";

const MainHeader = ({user}) => {
  const alt = "it was't possible to load this image";

  return (
    <header className="main-header">
      <img src={instagramLogo} alt={alt} className="insta-logo light-effect"/>
      <input className="search-input" placeholder="search"/>
      <nav className="header-nav">
        <i className="fas fa-home light-effect"></i>
        <i className="fas fa-paper-plane light-effect"></i>
        <i className="fas fa-compass light-effect"></i>
        <i className="fas fa-heart light-effect"></i>
        <img src={userImage} alt={alt} className="small-user-pic light-effect"/>
      </nav>
    </header>
  )
}

export default MainHeader;
