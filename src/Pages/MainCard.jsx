import React from "react";
import NavBar from "../Components/Nav/nav";
// import Footer from '../Components/Footer/Footer';
import "./mainCard.css";
// import '../Components/Footer/footer.css';

const MainCard = props => (
  <div>
    <NavBar />
    <div className="card main">
      <div id="header" className="row">
        <div className="col-med-12">
          <h1>Towne Cinemas</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h5 id="saying">
            Northern Utah County's Family Friendly Discount Theater!!
          </h5>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h5>801-756-3181</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h5>120 West Main St. American Fork, UT</h5>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <img id="tCinemas" src="/505_Town_Cinemas.jpg" />
          <img src="/230_theatresm.jpg" />
        </div>
      </div>
    </div>
  </div>
);

export default MainCard;
