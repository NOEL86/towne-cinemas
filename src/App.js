import React from 'react';
import './App.css';
import MainCard from './Pages/MainCard.jsx';
import Schedule from './Pages/Schedule';
import Soon from './Pages/Soon.jsx';
import MovieOne from './Pages/Movie1';
import MovieTwo from './Pages/Movie2';
import Rentals from './Pages/Rentals';
import Advertising from './Pages/Advertising';
// import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={MainCard} />
          <Route path="/qSchedule" component={Schedule} />
          <Route path="/one" component={MovieOne} />
          <Route path="/two" component={MovieTwo} />
          <Route path="/soon" component={Soon} />
          <Route path="/advertising" component={Advertising} />
          <Route path="/rentals" component={Rentals} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
