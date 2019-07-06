import React from "react";
import "./rentalModal.css";

const RentalModal = props => (
  <div className="modal" id="rentalModal" tabIndex="-1" role="dialog">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header d-flex justify-content-center">
          <h5 className="modal-title">
            Towne Cinema Private Party Rental Agreement
          </h5>
          <a href="http://www.townecinema.com" />
        </div>
        <div className="modal-body">
          <form>
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
              <div className="form-group col-md-6">
                <label htmlFor="organization">Organization</label>
                <input
                  type="text"
                  className="form-control"
                  id="organization"
                  value={props.organization}
                  onChange={props.onChange}
                  name="organization"
                  placeholder="Organization"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Address</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                value={props.address}
                onChange={props.onChange}
                name="address"
                placeholder="1234 Main St"
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
              {/*  I NEED A DATE PICKER HERE!! */}
            </div>

            <div className="form-group col-md-3">
              <label htmlFor="guests"># of Guests (estimate)</label>
              <input
                type="text"
                className="form-control"
                id="guests"
                value={props.guestNumber}
                onChange={props.onChange}
                name="guestNumber"
                placeholder="Est."
              />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="guests">Cost = # Hours x $40 Rental Fee</label>
              <input
                type="text"
                className="form-control"
                id="guests"
                value={props.guestNumber}
                onChange={props.onChange}
                name="guestNumber"
                placeholder="Est."
              />
            </div>

            <div className="form-group col-md-3">{props.cost}</div>
          </form>
        </div>

        <div className="row d-flex justify-content-center">
          <div className="col-md-12">
            <p>
              Towne Cinemas 120 West Main Street American Fork, UT 84003 (801)
              756-3181 Business Line (801) 361-6709 Northern Utah County’s
              Family Friendly Theater!{" "}
            </p>
          </div>
        </div>
        <div className="col-md-12">
          <p id="conditions">Conditions of Use</p>
          <p>
            <b>Rental hours:</b>{" "}
          </p>
          <p>
            Hours must run consecutively and include required time for
            management to open and close (1 hour minimum). Early arrivals will
            not be admitted without prior approval. Additional fees will be
            incurred for use beyond scheduled hours. Refunds will not be given
            for hours not used. Minimum usage time is two hours. The rental will
            be considered a “no show” if the group does not arrive within 30
            minutes of the scheduled rental time. Setup and clean up: The
            theater is rented as is with no special equipment provided, Renters
            may bring into the theater a reasonable amount of needed equipment
            at their own risk and responsibility for damage to the premises that
            may occur. Equipment and materials brought in by the group must be
            removed immediately following the event or additional charges may
            apply.
          </p>
          <p>
            <b>Not allowed:</b>{" "}
          </p>
          <p>
            {" "}
            smoking, outside food or drink without special permission, alcoholic
            beverages or illegal substances. Violation of this provision will
            terminate this contract with no refund.{" "}
          </p>
          <p>
            <b>Conduct:</b>{" "}
          </p>
          <p>
            Renters are responsible for the conduct of their guests and any
            damages or loss caused by guests. Performer conduct and performance
            conduct, whether live or recorded, must be appropriate for PG-13
            audiences. Profane, lewd, indecent, or slanderous conduct or content
            is unacceptable.{" "}
          </p>
          <p>
            <b>Staff: </b>
          </p>
          <p>
            Towne Cinemas staff will be on site during the event. Lack of
            cooperation with staff in resolving problems or addressing illegal
            activities will result in the event being stopped and the facility
            being secured.{" "}
          </p>
          <p>
            <b>Cancellation Policy</b>
          </p>
          <p>
            Reservations may be cancelled with 72 hours notice but will forfeit
            the entire rental fee. Reservations cancelled with less than 72
            hours notice or no shows will be charged the entire rental fee due
            to staff scheduling concerns. All fees must be paid in full before
            event begins.{" "}
          </p>
          <p>
            <b>Agreement</b>
          </p>
          <p>
            I hereby approve the rental agreements herein. I have read the
            Conditions of Use, understand the requirements, and agree to comply
            with all conditions. I state that I have the authority to enter into
            this Agreement for the applicant or organization, agree that the
            applicant or organization will observe all applicable conditions of
            use and will exercise the utmost care in the use of the facility and
            premises. Further, I hereby release, indemnify and promise to defend
            and hold harmless Towne Cinemas, its officers, employees, and agents
            from and against any and all liability, loss, damage, expense,
            actions and claims, including costs and reasonable attorney’s fees
            incurred by Towne Cinemas, its officers, employees, and agents in
            defense thereof, asserting or arising directly or indirectly on
            account of or out of or incident to Lessee’s use of the Towne
            Cinemas building pursuant to this Agreement; provided, however, this
            paragraph does not purport to indemnify Towne Cinemas against
            liability for damages arising out of bodily injuries to persons or
            damages caused by or resulting from the sole negligence of Towne
            Cinemas, its officers, employees, and agents.
          </p>
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
export default RentalModal;
