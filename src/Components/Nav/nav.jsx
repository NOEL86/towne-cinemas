import React from 'react';
import './nav.css';

const NavBar = props => (
  <ul className="nav nav-pills bg-dark">
    <li className="nav-item">
      <a className="nav-link active" href="#">
        Home
      </a>
    </li>
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        data-toggle="dropdown"
        href="#"
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Movies
      </a>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">
          Now Playing 1
        </a>
        <a className="dropdown-item" href="#">
          Now Playing 2
        </a>
      </div>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">
        Coming Soon
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">
        Advertising Information
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">
        Theater Rentals
      </a>
    </li>
    {/* <li className="nav-item">
  <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
</li> */}
  </ul>
);

export default NavBar;
