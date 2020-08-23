import React from 'react';

class Carousel extends React.Component {
    render() {
      return (
		<div className="container" id="carousel-container">
			<div className="row row-content">
				<div className="col-md-8 mx-auto">
					<div id="homeCarousel" className="carousel slide" data-ride="carousel">
						<ol className="carousel-indicators">
							<li data-target="#homeCarousel" data-slide-to="0" className="active"></li>
							<li data-target="#homeCarousel" data-slide-to="1"></li>
							<li data-target="#homeCarousel" data-slide-to="2"></li>
							<li data-target="#homeCarousel" data-slide-to="3"></li>
							<li data-target="#homeCarousel" data-slide-to="4"></li>
						</ol>                               
						<div className="carousel-inner">
							<div className="carousel-item">
								<iframe width="750" height="315" src="https://www.youtube.com/embed/ZWk19OVon2k" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
							</div>													
							<div className="carousel-item">
								<iframe width="750" height="315" src="https://www.youtube.com/embed/GE3SoUQ5GwU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
							</div>												
							<div className="carousel-item active">
								<iframe width="750" height="315" src="https://www.youtube.com/embed/8TOIWNAVADw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
							</div>
							<div className="carousel-item">
								<iframe width="750" height="315" src="https://www.youtube.com/embed/8DZktowZo_k" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
							</div>
							<div className="carousel-item">
								<iframe width="750" height="315" src="https://www.youtube.com/embed/NjE7MRnvTD4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
							</div>
						</div>
						<a className="carousel-control-prev" href="#homeCarousel" role="button" data-slide="prev">
							<span className="carousel-control-prev-icon"></span>
							<span className="sr-only">Previous</span>
						</a>
						<a className="carousel-control-next" href="#homeCarousel" role="button" data-slide="next">
							<span className="carousel-control-next-icon"></span>
							<span className="sr-only">Next</span>
						</a>
 					</div>
				</div>
			</div>
		</div>
      ); 
    }
  }
  
  export default Carousel;