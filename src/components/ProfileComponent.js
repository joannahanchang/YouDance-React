import React from 'react';
// import './App.css';


function Profile() {
    return (
        <React.Fragment>
        <div className="page-container">
        <div className="introduction">
            <h2>Welcome to your YouDance profile!</h2> 
        </div>
    </div>
    <div className="picture-and-about-container">
        <div className="profile-img">
            <img src="20200216_154954.jpg" alt="Profile Photo"/>
            <div className="file btn btn-lg btn-primary">
                Change Photo
                <input type="file" name="file"/>
            </div>
        </div>
        <div className="container emp-profile">
            <form method="post">
                <div className="row">
                    <div className="col-md-12">
                        <div className="profile-head">
                            <h4>Jojo Yoyo</h4>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="video-tab" data-toggle="tab" href="#video" role="tab" aria-controls="video" aria-selected="true">Videos Saved</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>First Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Jojo</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Last Name</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Yoyo</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>jojoyoyo@gmail.com</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Last Log In</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>July 10, 2020</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Total Number of Videos Watched</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>15</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Estimated Number of Calories Burned</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>7,500</p>
                                            </div>
                                        </div>
                            </div>
                            <div className="tab-pane fade" id="video" role="tabpanel" aria-labelledby="video-tab">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="container-video">
                                            <div className="video-box">
                                                <iframe width="300" height="200" src="https://www.youtube.com/embed/ZWk19OVon2k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                            </div>
                                            <div className="video-box">
                                                <iframe width="300" height="200" src="https://www.youtube.com/embed/GE3SoUQ5GwU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                            </div>
                                            <div className="video-box">
                                                <iframe width="300" height="200" src="https://www.youtube.com/embed/8TOIWNAVADw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                            </div>
                                            <div className="video-box">
                                                <iframe width="300" height="200" src="https://www.youtube.com/embed/8DZktowZo_k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                            </div>
                                            <div className="video-box">
                                                <iframe width="300" height="200" src="https://www.youtube.com/embed/NjE7MRnvTD4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>           
        </div>
    </div>
    </React.Fragment>      
    ); 
}
 
export default Profile;