import React from 'react';
// import './App.css';

import Header from './HeaderComponent.js';
import Welcome from './WelcomeComponent.js';
import Carousel from './CarouselComponent.js';
import Footer from './FooterComponent.js';
import Profile from './ProfileComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends React.Component {
        render() {
            return (
                <div className="App">
                    <Header />
                    <Welcome />
                    <Carousel />
                    <Switch>
                    <Route exact path="/profile" component={Profile} />
                    </Switch>
                    <Footer />
                </div>
            );
        };
      }
 
  export default Main;