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
