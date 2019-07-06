import React, { Component } from "react";
import NavBar from "../Components/Nav/nav";
import RentalModal from "../Components/RentalModal/RentalModal";
import Footer from "../Components/Footer/Footer";
import "./schedule.css";

class Rentals extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentDidMount() {
    // console.log("I have a modal");
  }

  handleClick() {
    console.log("button clicked");
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="addToBottom">
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
          <div className="col-md-3" />
          <div className="col-md-6">
            <h5>
              Individuals or Groups may rent the theaters for private parties or
              special occasions. Below is a link to the rental agreement which
              explains the procedures for renting the theater. For more
              information or special requests please call (801) 361-6709 or
              email us at townecinemaads@hotmail.com
            </h5>
          </div>
          <div className="col-md-3" />
        </div>

        <div className="row">
          <div className="col-md-12">
            <button
              value="rentalModal"
              className="button"
              data-toggle="modal"
              data-target="#rentalModal"
            >
              Rental Agreement
            </button>
          </div>
        </div>

        <div className="row bottom-padding">
          <div className="col-md-12">
            <p>
              <b>
                Towne Cinemas 120 West Main Street American Fork, UT 84003
                801-756-3181
              </b>
            </p>
          </div>
        </div>
        <RentalModal
          onChange={this.handleInputChange}
          onClick={this.handleClick}
          // receiver={this.state.receiver}
          // phoneNum={this.state.phoneNum}
          // status={this.state.condition}
          // comment={this.state.comment}
        />
      </div>
    );
  }
}
export default Rentals;
