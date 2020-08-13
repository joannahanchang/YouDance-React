import React from 'react';
// import './App.css';

function Footer(props) {
    return (
      <footer className="site-footer">
        <div className="containerone">
          <div className="text-center">
            <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram"></i></a>{' '}
            <a className="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i className="fa fa-facebook"></i></a>{' '}
            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>{' '}
            <a className="btn btn-social-icon btn-linkedin" href="http://linkedin.com/"><i className="fa fa-linkedin"></i></a>
          </div>
        </div>
        <div className="containertwo">
          <div className="text-center">
            <a role="button" className="btn btn-link" href="tel:+19091234567"><i className="fa fa-phone"></i> 1-909-123-4567</a>
            <a role="button" className="btn btn-link" href="mailto:contact@youdance.com"><i className="fa fa-envelope-o"></i> contact@youdance.com</a>
          </div>
        </div>
    </footer>
    );
}

export default Footer;
