import React from 'react';
import '../Nav/nav.css';

const Footer = props => (
  <nav
    id="footer"
    className="navbar navbar-expand-sm navbar-dark"
    style={{ backgroundColor: 'red' }}
  >
    <a className="navbar-brand" href="#">
      Towne Cinemas
    </a>
    <small>
      <b>Where all movies are $1.50!!</b>
    </small>
  </nav>
);

export default Footer;
