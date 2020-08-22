import React from 'react';
import ReactDOM from "react-dom";
// import './App.css';

import Header from './HeaderComponent.js';
import Welcome from './WelcomeComponent.js';
import Carousel from './CarouselComponent.js';
import Footer from './FooterComponent.js';
import Register from './RegisterComponent';
import Login from './LoginComponent';
import Profile from './ProfileComponent';
import Survey from './SurveyComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends React.Component {


    constructor() {
        super()
        this.allVideos = [
            {
    
            }
        ]
        this.filteredVideos = this.allVideos;
        this.boundApplyFilters = this.applyFilters.bind(this);
    }

    applyFilters(filters) {
        console.log(this, filters)
        this.filteredVideos = this.allVideos.filter(() => {

        })
    }

    render() {
        const defaultContent = (
            <div>
                <Welcome onChange={this.boundApplyFilters}/>
                {/* <VideoList videos={filteredVideos}></VideoList> */}
                <Carousel />
            </div>
        )
        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path="/" render={() => defaultContent} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/survey" component={Survey} />
                </Switch>
                <Footer />
            </div>
        );
    };
}

  export default Main;