import React, { Component } from "react";
import NavBar from "../Components/Nav/nav";
import RentalModal from "../Components/RentalModal/RentalModal";
import Footer from "../Components/Footer/Footer";
import "./schedule.css";

class Rentals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      organization: "",
      address: "",
      addressTwo: "",
      zip: "",
      state: "",
      signatureName: "",
      date: "",
      time: "",
      guestNumber: 0,
      cost: 0,
      hours: 0,
      email: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.figureCost = this.figureCost.bind(this);
  }
  componentDidUpdate() {
    // console.log("I have a modal");
  }

  handleSubmit() {
    console.log("button clicked");

    let userObj = {
      name: this.state.name,
      email: this.state.email,
      organization: this.state.organization,
      address: this.state.address,
      addressTwo: this.state.addressTwo,
      city: this.state.city,
      state: this.state.state,
      phone: this.state.phone,
      date: this.state.rentalDate,
      time: this.state.rentalTime,
      guestNum: this.state.guestNumber,
      cost: this.state.cost
    };

    console.log("This is my user object going to the backend", userObj);
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({
      [name]: value
    });

    if (this.state.hours) {
      console.log("I made it to figure cost func");
      this.figureCost();
    }
  };

  // componentWillUpdate() {
  //   // console.log(prevProps, prevState);
  //   this.figureCost();
  // }
  figureCost = () => {
    //need this to update and show the cost if you need to go back and adjust
    console.log(this.state.hours);
    let numHours = this.state.hours;
    let updatedCost = numHours * 40;

    this.setState({
      cost: updatedCost
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
          onClick={this.handleSubmit}
          onCostUpdate={this.onCostUpdate}
          cost={this.state.cost}
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
