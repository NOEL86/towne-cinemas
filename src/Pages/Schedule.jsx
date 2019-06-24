import React, { Component } from 'react';
import NavBar from '../Components/Nav/nav';
// import Footer from '../Components/Footer/Footer';
import './schedule.css';

class Schedule extends Component {
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
      <div id="black">
        <NavBar />
        <div className="row">
          <div className="col-md-12">
            <h1>Schedule At A Glance</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <b>Movies for: {this.state.currentDates}</b>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <p>
              (movies and times change each Friday. Check often for updates and
              current play times)
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h1>Movie One{this.state.movieOne}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4" />
          <div className="col-md-4">
            <p>
              Friday & Monday-Thursday (May 10 & May 13-16) 4:30, 6:30 & 8:30
              p.m. Saturday (May 11) 1:00, 3:00, 5:00, 7:00 & 9:00 p.m.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h1>Movie Two{this.state.movieTwo}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4" />
          <div className="col-md-4">
            <p>
              Friday & Monday-Thursday (May 10 & May 13-16) 4:30, 6:30 & 8:30
              p.m. Saturday (May 11) 1:00, 3:00, 5:00, 7:00 & 9:00 p.m.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h1>Movie Three{this.state.movieThree}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4" />
          <div className="col-md-4">
            <p>
              Friday & Monday-Thursday (May 10 & May 13-16) 4:30, 6:30 & 8:30
              p.m. Saturday (May 11) 1:00, 3:00, 5:00, 7:00 & 9:00 p.m.
            </p>
          </div>
        </div>

        <div id="center" className="row">
          <div className="col-md-4" />
          <div className="col-md-4">
            <b>
              Towne Cinemas 120 West Main Street American Fork, UT 84003
              801-756-3181
            </b>
          </div>
        </div>

        {/* <Footer /> */}
      </div>
    );
  }
}
export default Schedule;
