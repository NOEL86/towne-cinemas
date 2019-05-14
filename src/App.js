import React from 'react';
import NavBar from './Components/Nav/nav.jsx';
import './App.css';
import MainCard from './Components/MainCard/MainCard.jsx';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainCard />
      <Footer />
    </div>
  );
}

export default App;
