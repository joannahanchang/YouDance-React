import React from 'react';
// import './App.css';

class NavBar extends React.Component {
  render() {
    return (
      <div className="topnav">
        <a className="active site-title" href="index.html">YouDance</a>
        <div className="link-container">
          <button type="button" className="btn btn-lg" id="registerButton">Register</button>
          <button type="button" className="btn btn-lg" id="loginButton">Log In</button>
          <a className="btn btn-lg" href="profile.html">Profile</a>
          <button type="button" className="btn btn-lg" id="surveyButton">Quick Survey</button>
        </div>
      </div>
    );
  
  }
}

export default NavBar;
