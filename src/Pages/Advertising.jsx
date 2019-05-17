import React, { Component } from 'react';
import NavBar from '../Components/Nav/nav';
import Footer from '../Components/Footer/Footer';
import './schedule.css';

class Advertising extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    // this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {}

  render() {
    return (
      <div>
        <NavBar />
        <div className="row">
          <div className="col-md-12">
            <h1>Towne Cinemas On-Screen Advertising</h1>
          </div>
        </div>

        <div className="row" style={{ textAlign: 'center' }}>
          <div className="col-md-3" />
          <div className="col-md-6">
            <p>
              <b>
                Towne Cinemas offers affordable, effective on-screen advertsing
                for your business or event!! Click on the links below for
                information and rates. The advertising agreement is also linked
                when you are ready to start the advertising. If you need more
                information please call (801) 368-2289 or email us at{' '}
              </b>
            </p>
            <a>email link here</a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <a>Advertising Rates</a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <a>Advertising Agreement</a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4" />
          <div className="col-md-4">
            <p>
              <b>
                Towne Cinemas 120 West Main Street American Fork, UT 84003
                801-756-3181
              </b>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Advertising;
