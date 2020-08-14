import React from 'react';
// import './App.css';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {

  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false
    };
}

toggleNav() {
    this.setState({
        isNavOpen: !this.state.isNavOpen
    });
}

  render() {
    return (
       <div className="topnav">
          <NavbarBrand className="mr-auto active site-title" href="/">YouDance</NavbarBrand>
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isNavOpen} navbar></Collapse>
            <div class="link-container">
              <NavLink to ='/register'>
                <button type="button" class="btn btn-lg">Register</button>
              </NavLink>
              <NavLink to ='/login'>
                <button type="button" class="btn btn-lg">log In</button>
                </NavLink>
                <NavLink to ='/profile'>
                <button type="button" class="btn btn-lg">Profile</button>
                </NavLink>
                <NavLink to ='/survey'>
                <button type="button" class="btn btn-lg">Quick Survey</button>
                </NavLink>
            </div>
        </div>
    ); 
  }
}


export default Header;



           {/* <Nav navbar>
              <NavItem>
            <NavbarBrand className="mr-auto active site-title" href="/">YouDance</NavbarBrand>
              </NavItem>
              <NavItem>
            <NavLink className="nav-link" to="/login">Log In</NavLink>
              </NavItem>
              <NavItem>
            <NavLink className="nav-link" to="/profile">Profile</NavLink>
              </NavItem>
              <NavItem>
            <NavLink className="nav-link" to="/survey">Quick Survey</NavLink>
              </NavItem>
            </Nav> */}