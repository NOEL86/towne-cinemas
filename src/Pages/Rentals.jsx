import React, { Component } from 'react';
import NavBar from '../Components/Nav/nav';
import Footer from '../Components/Footer/Footer';
import './schedule.css';

class Rentals extends Component {
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
            <h1>Towne Cinemas</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h5>Northern Utah County's Family Friendly Discount Theater!!</h5>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h5>
              Individuals or Groups may rent the theaters for private parties or
              special occasions. Below is a link to the rental agreement which
              explains the procedures for renting the theater. For more
              information or special requests please call (801) 361-6709 or
              email us at townecinemaads@hotmail.com
            </h5>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <a>Rental Agreement</a>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <p>
              <b>
                Towne Cinemas 120 West Main Street American Fork, UT 84003
                801-756-3181
              </b>
            </p>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
export default Rentals;
