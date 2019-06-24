import React, { Component } from 'react';
import NavBar from '../Components/Nav/nav';
// import './movies.css';

class MovieTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieOne: '',
      movieTwo: '',
      times: [],
      rating: '',
      genre: [],
      writtenBy: [],
      runTime: '',
      studio: '',
      currentDates: '5-15-19 through 5-20-19',
      movieOneDates: [],
      movieTwoDates: []
    };

    // this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    const date = Date.now();
    console.log(date);
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="row">
          <div className="col-md-12">
            <h1>Movie Title</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <img
              style={{ height: '15%' }}
              src="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"
              alt="poster"
            />
            <div className="row">
              <div className="col-md-6" />
              <div className="col-md-6">
                <ul>
                  <li>Rating: </li>
                  <li>Genre: </li>
                  <li>Written By: </li>
                  <li>Runtime: </li>
                  <li>Studio: </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <h5>Now Playing Daily</h5>
            </div>
            <div className="row">
              <div className="col-md-6">
                <p>
                  IN DIGITAL FORMAT! Friday & Monday-Thursday (May 10 & May
                  13-16) 4:30, 6:30 & 8:30 p.m. Saturday (May 11) 1:00, 3:00,
                  5:00, 7:00 & 9:00 p.m.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MovieTwo;
