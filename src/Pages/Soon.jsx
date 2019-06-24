import React, { Component } from 'react';
import NavBar from '../Components/Nav/nav';
// import Footer from '../Components/Footer/Footer';
import './schedule.css';

class Soon extends Component {
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
      <div className="addToBottom">
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
            <h1>{this.state.movieOne}</h1>
          </div>
        </div>

        <div className="row bottom-padding">
          <div className="col-md-12">
            <h1>{this.state.movieTwo}</h1>
          </div>
        </div>
        {/* 
        <Footer /> */}
      </div>
    );
  }
}
export default Soon;
