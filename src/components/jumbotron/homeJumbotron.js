import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class HomeJumbotron extends Component{

    render(){
        return(
            <section className="home-banner">
			<div className="home-banner-bg position-absolute header-distance">
				<img src="/images/home/banner-bg/1.png" alt="" id="home-banner-bg-1" />
				<img src="/images/home/banner-bg/2.png" alt="" id="home-banner-bg-2" />
				<img src="/images/home/banner-bg/3.png" alt="" id="home-banner-bg-3" />
				<img src="/images/home/banner-bg/4.png" alt="" id="home-banner-bg-4" />
				<img src="/images/home/banner-bg/5.png" alt="" id="home-banner-bg-5" />
			</div>
			<div className="container banner-center">
				<div className="row">
					<div className="col-md-5">
						<div className="banner-heading">
							<h1>A New Approach to Graphic Design. <span>Simple. Scalable. Reliable.</span></h1>
							<p>Our team works with the contemporary approach in design which is minimal, yet highly creative. Great quality of design and concepts matter most to us as they do to you.</p>
						</div>
						<div className="link-area">
							<a href="#" className="a-link purple-link"><Link className="white-color" to="/pricing">See Pricing</Link></a>
							<a href="#portfolio" className="a-link scroll-to">Vist Portfolio</a>
						</div>
					</div>
				</div>
			</div>

			<div className="banner-right-area">
				<img src="/images/home/banner-right/1.png" alt="" className="banner-right-center-img" />
				<img src="/images/home/banner-right/2.png" alt="" className="banner-right-center-img" />
				<img src="/images/home/banner-right/3.png" alt="" className="banner-right-top-img" />
				<img src="/images/home/banner-right/4.png" alt="" className="banner-right-bottom-img" />

				<div className="half-height-box">
					<div className="right-sec-heading">
						<h2>Logo Design</h2>
						<h3>Create a Professional Brand Online</h3>
						<p>Great for existing companies that want to step up.</p>
						<a href="#"><Link to="/ultimate">Learn More</Link> <i className="fas fa-long-arrow-alt-right"></i></a>
					</div>
				</div>

				<div className="half-height-box d-flex pl-13-per">
			        <div className="half-width-box">
    					<div className="right-sec-heading pl-0">
    						<h2>Brand Design</h2>
    						<h3>Add a designer to your team</h3>
    						<p>Great for Creative Agencies.</p>
    						<a href="pro.html">Learn More <i className="fas fa-long-arrow-alt-right"></i></a>
					    </div>
					</div>
					<div className="half-width-box standard-box">
    					<div className="right-sec-heading pl-0">
    						<h2>Web Design</h2>
    						<h3>Add a designer to your team</h3>
    						<p>Great Logo Design.</p>
    						<a href="standard.html">Learn More <i className="fas fa-long-arrow-alt-right"></i></a>
					    </div>
				    </div>
				</div>
			</div>
		</section>
        )
    }
}


export default HomeJumbotron;