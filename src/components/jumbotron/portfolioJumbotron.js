import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class PortfolioJumbotron extends Component{

    render(){
        return(
            <section className="home-banner postion-rel">
	            <img src="images/aboutus/1.png" alt="" className="position-absolute" style={{width:"100%",top:"560px",zIndex:"2",left:"-15px",maxWidth:"120px"}}/>
	            <img src="images/aboutus/4.png" alt="" className="position-absolute" style={{width:"100%",top:"125px",left:"-25px",maxWidth:"90px"}}/>
	            <img src="images/shapes/pinkcircle.png" alt="" className="position-absolute" style={{width:"100%",right:"-15px",top:"105px",maxWidth:"90px"}}/>
	            <img src="images/shapes/orangetriangle.png" alt="" className="position-absolute" style={{width:"100%",bottom:"20px",right:"-38px",maxWidth:"100px"}}/>
			<div className="container banner-center">
				<div className="row">
					<div className="col-md-5 portfoliopagemainbannercontent">
						<div className="banner-heading">
							<h1><span>View Some of <br />Our Latest</span><br /> Creations for Our <br />Real Clients</h1>
							<p>Our portfolio is evidence of our par excellence design skills. Have a look for yourself and
                                decide the kind of brand you want to build with.</p>
						</div>
						<div className="link-area">
							<a href="#" className="a-link purple-link"><Link className="white-color" to="/pricing">See Pricing</Link></a>
							<a href="#" className="a-link">Watch The Video</a>
						</div>
					</div>
                    <div className="col-md-7 portfoliopagesidebanner">
	                    <img src="images/portfolio/banner.png" />
	                </div>
				</div>
			</div>
		</section>
        )
    }
}


export default PortfolioJumbotron;