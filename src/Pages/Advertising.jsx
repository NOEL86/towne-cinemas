import React, { Component } from "react";
import NavBar from "../Components/Nav/nav";
import AdvertisingModal from "../Components/AdvertisingModal/AdvertisingModal";
import "./schedule.css";
import AdvertisingAgreement from "../Components/AdvertisingAgreement/AdvertisingAgreement";

class Advertising extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      company: "",
      phone: "",
      addressOne: "",
      addressTwo: "",
      city: "",
      state: "",
      date: "",
      zip: "",
      fax: "",
      email: "",
      signatureName: ""
    };

    // this.handleClick = this.handleClick.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentDidMount() {
    console.log("locked and loaded");
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({
      [name]: value
    });
  };

  handleSubmit() {
    console.log("button clicked");

    let userObj = {
      name: this.state.name,
      email: this.state.email,
      company: this.state.company,
      address: this.state.address,
      addressTwo: this.state.addressTwo,
      city: this.state.city,
      state: this.state.state,
      phone: this.state.phone,
      date: this.state.date,
      signatureName: this.state.signatureName
    };

    console.log("This is my user object going to the backend", userObj);
  }

  render() {
    return (
      <div className="addToBottom">
        <NavBar />
        <AdvertisingModal />
        <AdvertisingAgreement />
        <div className="row">
          <div className="col-md-12">
            <h1>Towne Cinemas On-Screen Advertising</h1>
          </div>
        </div>

        <div className="row" style={{ textAlign: "center" }}>
          <div className="col-md-3" />
          <div className="col-md-6">
            <p>
              <b>
                Towne Cinemas offers affordable, effective on-screen advertsing
                for your business or event!! Click on the links below for
                information and rates. The advertising agreement is also linked
                when you are ready to start the advertising. If you need more
                information please call (801) 368-2289 or email us at
                <span>
                  <a
                    id="email"
                    href="mailto:townecinemaads@hotmail.com"
                    editor_id="mce_editor_0"
                  >
                    <b> townecinemaads@hotmail.com</b>
                  </a>
                </span>
              </b>
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <a
              value="advertisingModal"
              className="btn btn-success"
              data-toggle="modal"
              data-target="#advertisingModal"
              style={{ marginBottom: "10px" }}
            >
              Advertising Rates
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <a
              value="advertisingAgreement"
              className="btn btn-danger"
              data-toggle="modal"
              data-target="#advertisingAgreement"
            >
              Advertising Agreement
            </a>
          </div>
        </div>
        <br />
        <div className="row bottom-padding">
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
