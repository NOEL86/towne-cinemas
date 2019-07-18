import React from "react";

const AdvertisingAgreement = props => (
  <div className="modal" id="advertisingAgreement" tabIndex="-1" role="dialog">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header d-flex justify-content-center">
          <h5 className="modal-title">Advertising Agreement</h5>
          <a href="http://www.townecinema.com" />
        </div>
        <div className="modal-body">
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="name">Company</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Company"
                  id="company"
                  value={props.company}
                  onChange={props.onChange}
                  name="company"
                />
              </div>
              {/* I WANT A datepicker HERE!!!*/}
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Responsible Person</label>
              <input
                type="text"
                className="form-control"
                id="rPerson"
                value={props.rPerson}
                onChange={props.onChange}
                name="rPerson"
                placeholder="Responsible Person"
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress1">Address 1</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress1"
                value={props.addressOne}
                onChange={props.onChange}
                name="addressOne"
                placeholder="Address"
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress2">Address 2</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                value={props.addressTwo}
                onChange={props.onChange}
                name="addressTwo"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputCity">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  value={props.city}
                  onChange={props.onChange}
                  name="city"
                  placeholder="American Fork"
                />
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="inputState">State</label>
                <input
                  id="state"
                  className="form-control"
                  value={props.state}
                  onChange={props.onChange}
                  name="state"
                  placeholder="state"
                />
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="inputZip">Zip</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputZip"
                  value={props.zip}
                  onChange={props.onChange}
                  name="zip"
                  placeholder="Zip"
                />
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  value={props.phone}
                  onChange={props.onChange}
                  name="phone"
                  placeholder="801-666-8888"
                />
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="fax">Fax</label>
                <input
                  type="text"
                  className="form-control"
                  id="fax"
                  value={props.fax}
                  onChange={props.onChange}
                  name="fax"
                  placeholder="801-666-8888"
                />
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={props.email}
                  onChange={props.onChange}
                  name="email"
                  placeholder="this@gmail.com"
                />
              </div>
            </div>
          </form>
        </div>

        <div className="row" style={{ textAlign: "left", marginLeft: "5px" }}>
          <div className="col-md-12">
            <p>Rates and Duration (please check appropriate boxes):</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ul style={{ listStyle: "none", textAlign: "left" }}>
              <li>2 Weeks @ $50 per week </li>
              <li>4 Weeks @ $40 per week</li>
              <li>8 Weeks @ $35 per week</li>
              <li>26 Weeks @ $30 per week</li>
              <li>52 Weeks @ $25 per week</li>
              <li>Non-Profit & Community Organizations Rate $25 per week</li>
            </ul>
          </div>
        </div>
        {/* TWO DATEPICKERS HERE!!  */}
        <div className="row">
          <div className="col-md-12">
            <p style={{ margin: "5px" }}>
              I hereby agree to the above rate and duration for Towne Cinemas
              on-screen advertising subject to their policies and procedures at
              the above listed rate and duration.
            </p>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              id="name"
              value={props.name}
              onChange={props.onChange}
              name="name"
            />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <label htmlFor="signature">
            {" "}
            <i>Sign Here</i>
          </label>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-12">
            <input
              type="text"
              id="signatureName"
              value={props.signatureName}
              onChange={props.onChange}
              name="signatureName"
            />
          </div>
        </div>
        <br />
        <div className="row d-flex justify-content-center">
          <div className="col-md-12">
            <button
              className="btn btn-primary"
              type="button"
              data-dismiss="modal"
              data-target="rentalModal"
              onClick={props.onClick}
            >
              Submit
            </button>
            <button
              type="button"
              className="btn btn-secondary modalButton"
              data-dismiss="modal"
              data-target="#rentalModal"
            >
              Close
            </button>
          </div>
        </div>
        <br />
      </div>
    </div>
  </div>
);
export default AdvertisingAgreement;
