import React from 'react';
// import './App.css';

class Welcome extends React.Component {
    render() {
      return (
        <React.Fragment>
        <div className="page-container">
            <div className="introduction">
                <h2>Welcome to YouDance, home to your favorite on-demand dance fitness videos.</h2> 
            </div>
            <div className="button-container">
                <div className="btn-group text-center">
                    <select className="custom-select text-center" id="dance-style">
                        <option selected>Dance Type</option>
                        <option value="barre">Barre</option>
                        <option value="hipHop">Hip Hop</option>
                        <option value="zumba">Zumba</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="btn-group text-center">
                    <select className="custom-select text-center" id="intensity">
                        <option selected>Intensity Level</option>
                        <option value="low">Low</option>
                        <option value="moderate">Moderate</option>
                        <option value="high">High</option>
                        </select>
                </div>
                <div className="btn-group text-center">
                    <select className="custom-select text-center" id="views">
                        <option selected># of Views on YouTube</option>
                        <option value="lessThan5K">Less Than 5K</option>
                        <option value="5Kto10K">5K - 10K</option>
                        <option value="10KPlus">10K+</option>
                    </select>
                </div>
            </div>
        </div>
        <div id="target-element" className="filtered-video-container">select some stuff</div>
        </React.Fragment>
      ); 
    }
  }
  
  export default Welcome;
