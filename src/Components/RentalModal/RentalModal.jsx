import React from "react";
import "/rentalModal.css";

const RentalModal = props => (
  <div className="modal" id="rentalModal" tabindex="-1" role="dialog">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Rental Agreement</h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            ariaLabel="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                />
              </div>
              <div className="form-group col-md-6">
                <label for="organization">Organization</label>
                <input
                  type="text"
                  class="form-control"
                  id="organization"
                  placeholder="Organization"
                />
              </div>
            </div>
            <div className="form-group">
              <label for="inputAddress">Address</label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>
            <div className="form-group">
              <label for="inputAddress2">Address 2</label>
              <input
                type="text"
                class="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputCity">City</label>
                <input type="text" class="form-control" id="inputCity" />
              </div>
              <div className="form-group col-md-4">
                <label for="inputState">State</label>
                <select id="inputState" class="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label for="inputZip">Zip</label>
                <input type="text" class="form-control" id="inputZip" />
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <div id="center" className="row">
            <div className="col-md-12">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <button
                type="button"
                className="btn btn-secondary modalButton"
                data-dismiss="modal"
                data-target="#rentalModal"
                // receiver={this.state.receiver} input values like so
                onClick={props.onClick}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default RentalModal;
