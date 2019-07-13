import React from "react";

const AdvertisingModal = props => (
  <div className="modal" id="advertisingModal" tabIndex="-1" role="dialog">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title d-flex justify-content-center">
            Towne Cinemas 120 West Main Street American Fork, UT 84003 (801)
            756-3181 Business Line (801) 368-2289 Fax (801) 406-4385 Email:
            townecinemaads@hotmail.com
          </h5>
          <a href="http://www.townecinema.com" />
        </div>
        <div className="modal-body">
          <div className="row">
            <div className="col-md-12">
              <h5>Cinema Advertising Summary</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>Captive Audience</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>
                Minimum of three (3) spots before each show on both screens Full
                color ad Ad appears on the screen for 15-25 seconds and appears
                every 5-7 minutes Weekly Audience Average 2,304 patrons (some
                weeks as high as 5,000 patrons)
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <b>Slide Production Design Fees</b>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>(you can design your own in MS PowerPoint):</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <b>Initial Ad Design $50.00</b>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>
                Changes or special requests can be accommodated at $50 per hour
              </p>
              <small>
                {" "}
                ** Rush Fee: $50.00 applied on ads requiring less than 48 hours
                design and insertion time.
              </small>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <b>Advertising Rates</b>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>Rates are a per week rate based on the length of contract.</p>
            </div>
          </div>
          <div className="row">
            <table
              className="table table-dark"
              style={{ fontSize: "10px", margin: "5px" }}
            >
              <thead>
                <tr>
                  <th scope="col">Theater</th>
                  <th scope="col"># of Screens</th>
                  <th scope="col">2 Week Contract</th>
                  <th scope="col">4 Week Contract</th>
                  <th scope="col">8 Week Contract</th>
                  <th scope="col">26 Week Contract</th>
                  <th scope="col">52 Week Contract</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Towne Cinemas American Fork</th>
                  <td>2</td>
                  <td>$50 per week</td>
                  <td>$40 per week</td>
                  <td>$35 per week</td>
                  <td>$30 per week</td>
                  <td>$25 per week</td>
                </tr>
              </tbody>
            </table>
            <small>
              *Non-profit and community organizations use the 52 week rate.
            </small>
            <div className="row">
              <div className="col-md-12">
                <b>
                  For further inquiries or information please contact Phil Clegg
                  at (801) 368-2289. Be sure and ask about our current special!!
                </b>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-12">
            <button
              type="button"
              className="btn btn-secondary modalButton"
              data-dismiss="modal"
              data-target="#advertisingModal"
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
export default AdvertisingModal;
