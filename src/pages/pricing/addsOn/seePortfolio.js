import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class SeePortfolio extends Component{

    render(){
        return(
            <div className="row pricingaddonrow">
	            <div className="col-md-6 pricingdivcontent">
	                <div className="section-heading mb-20 text-left">
	                    <h1>See Our<br /> <span>Portfolio</span></h1>
	                    <p>Witness our vast portfolio with a huge variety of designs, illustrations and custom-made artworks for our happy clients. Our work speaks for itself. You can also explore our previously created craft to get inspiration for your next great project.</p>
	                </div>
                    <div className="price-link-area text-left mb-20">
                        <a href="#" className="a-link more-padding-lr filled-link"><Link className="white-color" to="/request">Get a Demo</Link></a>
                    </div>
	            </div>
	            <div className="col-md-6 pricingdivbgimg" style={{backgroundImage:"/images/pricing/priceservice2.jpg",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPositionX:"center",backgroundPositionY:"center",borderRadius:"0 8px 8px 0"}}>
	                {/* <!-- <img src="images/pricing/priceservice2.jpg">--> */}
	            </div>
	        </div>
        )
    }
}


export default SeePortfolio;