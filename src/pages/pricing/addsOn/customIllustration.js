import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class CustomIllustration extends Component{

    render(){
        return(
            <div className="row pricingaddonrow">
	                    <div className="col-md-6 pricingdivbgimg">
	                       {/* <!-- <img src="images/pricing/priceservice2.jpg">--> */}
	                       
	                    </div>
	                    <div className="col-md-6 pricingdivcontent">
	                        <div className="section-heading mb-20 text-left">
	                            <h1>Custom<br /> <span>Illustration</span></h1>
	                            <p>Our illustration artists create the most appealing and elegant illustrations to tell your brand story in unique ways. Do you need a custom-made mascot for your brand? Are you looking for an artist who can tell a memorable tale through drawings? You have reached the right place!</p>
	                        </div>
	                        <div className="price-link-area text-left mb-20">
								<a href="#" className="a-link more-padding-lr filled-link"><Link className="white-color" to="/request">Get a Demo</Link></a>
							</div>
	                    </div>
	                </div>
        )
    }
}


export default CustomIllustration;