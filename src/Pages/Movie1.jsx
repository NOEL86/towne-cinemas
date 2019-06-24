import React, { Component } from 'react';
import NavBar from '../Components/Nav/nav';
// import './movies.css';

class MovieOne extends Component {
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
            <h1>Movie Title{this.state.movieOne}</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="card mx-auto" style={{ width: '18rem' }}>
              <img
                className="card-img-top"
                src="https://ballzbeatz.com/wp-content/uploads/2018/03/Pretty-Woman-1990-Minimal-Poster-Print-PMOV-1-10424.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Now Playing Daily</h5>

                <p className="card-text">
                  IN DIGITAL FORMAT! Friday & Monday-Thursday (May 10 & May
                  13-16) 4:30, 6:30 & 8:30 p.m. Saturday (May 11) 1:00, 3:00,
                  5:00, 7:00 & 9:00 p.m.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 
        <div className="row">
          <div className="col-md-3">
            <ul>
              <li>Rating: </li>
              <li>Genre: </li>
              <li>Written By: </li>
              <li>Runtime: </li>
              <li>Studio: </li>
            </ul>
          </div>
          <div className="col-md-9" />
        </div>

        <div className="row">
          <div className="col-md-12">
            <h1>{this.state.movieOne}</h1>
          </div>
        </div> */}
      </div>
    );
  }
}
export default MovieOne;
