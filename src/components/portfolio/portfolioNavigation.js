import React,{Component} from 'react';

class PortfolioNavigation extends Component{


    componentDidMount(){
        const script = document.createElement('script');
        script.src = '/js/scrollable-tabs.js';
        script.async = true;
        document.body.appendChild(script);
    }

    render(){
        return(
            <div className="dashed-tabs scrollable-tabs mt-60">
    					<ul className="nav nav-tabs" id="scrollable-tabs-ul">
    						<li className="nav-item">
    							<a className="nav-link active" data-toggle="tab" href="#logo-design-portfolio">Logo Design</a>
    						</li>
    						<li className="nav-item">
    							<a className="nav-link" data-toggle="tab" href="#web-design-portfolio">Web Design</a>
    						</li>
    						<li className="nav-item">
    							<a className="nav-link" data-toggle="tab" href="#business-card-portfolio">Business Card</a>
    						</li>
    						<li className="nav-item">
    							<a className="nav-link" data-toggle="tab" href="#stationary-portfolio">Stationary</a>
    						</li>
    						<li className="nav-item">
    							<a className="nav-link" data-toggle="tab" href="#car-portfolio">Car Wraps</a>
    						</li>
    						<li className="nav-item">
    							<a className="nav-link" data-toggle="tab" href="#brochure-portfolio">Brochure</a>
    						</li>
    						<li className="nav-item">
    							<a className="nav-link" data-toggle="tab" href="#t-shirts-portfolio">T Shirts</a>
    						</li>
    						<li className="nav-item">
    							<a className="nav-link" data-toggle="tab" href="#book-covers-portfolio">Book Covers</a>
    						</li>
    						<li className="nav-item">
    							<a className="nav-link" data-toggle="tab" href="#signage-portfolio">Signage</a>
    						</li>
    						<li className="nav-item">
    							<a className="nav-link" data-toggle="tab" href="#bag-design-portfolio">Bag Design</a>
    						</li>
    					</ul>
    					<div className="prev-portfolio"><i className="fas fa-chevron-left"></i></div>
    					<div className="next-portfolio"><i className="fas fa-chevron-right"></i></div>
    				</div>
        )
    }
}


export default PortfolioNavigation;