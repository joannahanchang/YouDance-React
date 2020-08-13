import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/HeaderComponent.js';
import Welcome from './components/WelcomeComponent.js';
import Carousel from './components/CarouselComponent.js';
import Footer from './components/FooterComponent.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
