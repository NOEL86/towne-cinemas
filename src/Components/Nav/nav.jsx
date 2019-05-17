import React from 'react';
import './nav.css';

const NavBar = props => (
  <ul className="nav nav-pills bg-dark">
    <li className="nav-item">
      <a className="nav-link active" href="/">
        Home
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/qSchedule">
        Quick Schedule
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
        <a className="dropdown-item" href="/one">
          Now Playing 1
        </a>
        <a className="dropdown-item" href="/two">
          Now Playing 2
        </a>
      </div>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/soon">
        Coming Soon
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/advertising">
        Advertising Information
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/rentals">
        Theater Rentals
      </a>
    </li>
  </ul>
);

export default NavBar;
