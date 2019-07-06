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
            <h1>Movie Title{this.state.movieOne}</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-4">
            <div className="card mx-auto" style={{ width: '15rem'}}>
              <img
                className="card-img-top"
                src="https://ballzbeatz.com/wp-content/uploads/2018/03/Pretty-Woman-1990-Minimal-Poster-Print-PMOV-1-10424.jpg"
                alt="Card image cap"
              />
             
            </div>
          </div>
          <div className='col-md-3'>
                <h5 >Now Playing Daily</h5>

                <p>
                  IN DIGITAL FORMAT! Friday & Monday-Thursday (May 10 & May
                  13-16) 4:30, 6:30 & 8:30 p.m. Saturday (May 11) 1:00, 3:00,
                  5:00, 7:00 & 9:00 p.m.
                </p>
              </div>
        </div>
        <br/>
        
      </div>
    );
  }
}
export default MovieTwo;
