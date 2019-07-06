import React from "react";

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
          <input id="agreementForm" />
        </div>
        <div className="modal-footer">
          {/* <button type="button" className="btn btn-primary">
            Save changes
          </button> */}
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
);
export default RentalModal;
