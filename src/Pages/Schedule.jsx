import React, { Component } from 'react';
import NavBar from '../Components/Nav/nav';

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
      times: [],
      rating: '',
      genre: [],
      writtenBy: [],
      runTime: '',
      studio: '',
      currentDates: [],
      movieOneDates: [],
      movieTwoDates: []
    };

    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    console.log('I got to Schedule page');
    const today = Date.now();
    console.log(today);
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="row">
          <div className="col-md-12">
            <h1>Schedule At A Glance</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">Movies for: {this.state.dates}</div>
        </div>
      </div>
    );
  }
}
export default Schedule;
