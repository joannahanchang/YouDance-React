import React from 'react';
// import './App.css';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Register from './RegisterComponent';
import Login from './LoginComponent';
import Survey from './SurveyComponent';

class Header extends React.Component {

  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
      openModalName: undefined,
    };
  }

  toggleNav() {
      this.setState({
          isNavOpen: !this.state.isNavOpen
      });
  }

  setOpenModalName(modalName) {
    this.setState({
      openModalName: modalName,
    });
  }

  render() {
    console.log('this.state.openModalName', this.state.openModalName)
    return (
       <div className="topnav">
          <NavbarBrand className="mr-auto active site-title" href="/">YouDance</NavbarBrand>
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isNavOpen} navbar></Collapse>
            <div className="link-container">
                <a onClick={this.setOpenModalName.bind(this, 'REGISTER')}>
                  <button type="button" className="btn btn-lg">Register</button>
                </a>
                <a onClick={this.setOpenModalName.bind(this, 'LOGIN')}>
                  <button type="button" className="btn btn-lg">log In</button>
                </a>
                <NavLink to ='/profile'>
                <button type="button" className="btn btn-lg">Profile</button>
                </NavLink>
                <a onClick={this.setOpenModalName.bind(this, 'SURVEY')}>
                  <button type="button" className="btn btn-lg">Quick Survey</button>
                </a>
            </div>
            <Register isOpen={ this.state.openModalName === 'REGISTER' } />
            <Login isOpen={ this.state.openModalName === 'LOGIN' } />
            <Survey isOpen={ this.state.openModalName === 'SURVEY' } />       
        </div>
    ); 
  }
}

export default Header;
